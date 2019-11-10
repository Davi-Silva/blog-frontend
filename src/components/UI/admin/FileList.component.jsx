/* eslint-disable react/prop-types */
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import {
  Container,
  FileInfo,
  PreviewAudio,
} from '../../../styled-components/admin.styled-components';

const FileList = ({ files, onDelete }) => (
  <Container>
    {files.map((uploadedFile) => (
      <li key={uploadedFile.id}>
        <FileInfo>
          <PreviewAudio src={uploadedFile.preview} />
          <div style={{
            position: 'absolute', display: 'block', width: '240%', background: '#fff', left: '5px', top: '120px', padding: '2px 5px', borderRadius: '5px',
          }}
          >
            <strong style={{ width: '100%' }}>{uploadedFile.name}</strong>
            <span style={{ marginLeft: '10px' }}>
              {uploadedFile.readableSize}
              {' '}
              {!!uploadedFile.url && (
                <button type="button" onClick={() => onDelete(uploadedFile.id)}>
                  Delete
                </button>
              )}
            </span>
          </div>
        </FileInfo>
        <div
          style={{
            position: 'absolute', background: '#fff', left: '0px', top: '190px', padding: '2px 5px', borderRadius: '5px',
          }}
        >
          {!uploadedFile.uploaded && !uploadedFile.error && (
            <CircularProgressbar
              styles={{
                root: { width: 24 },
                path: { stroke: '#0058e4' },
                marginLeft: '30px',
                position: 'absolute',
              }}
              strokeWidth={10}
              percentage={uploadedFile.progress}
            />
          )}

          {uploadedFile.url && (
            <a
              href={uploadedFile.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
            </a>
          )}

          {uploadedFile.uploaded && <MdCheckCircle size={24} color="#47d15c" />}
          {uploadedFile.error && <MdError size={24} color="#e34444" />}
        </div>
      </li>
    ))}
  </Container>
);

export default FileList;
