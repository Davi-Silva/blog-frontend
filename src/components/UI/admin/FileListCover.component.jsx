
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import {
  Container,
  FileInfo,
  Preview,
} from '../../../styled-components/admin.styled-components';

const FileList = ({ files, onDelete }) => (
  <Container>
    {files.map((uploadedFile) => (
      <li key={uploadedFile.id}>
        <FileInfo>
          <Preview src={uploadedFile.preview} />
          <br />
          <div style={{
            position: 'absolute', display: 'table', margin: '0 auto', background: '#fff', left: '125px', top: '210px', padding: '2px 5px', borderRadius: '5px',
          }}
          >
            {/* <strong>{uploadedFile.name}</strong> */}
            <span>
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
        <div style={{
          position: 'absolute', display: 'table', margin: '0 auto', background: '#fff', left: '146px', top: '177px', padding: '2px 5px', borderRadius: '5px',
        }}
        >
          {!uploadedFile.uploaded && !uploadedFile.error && (
            <CircularProgressbar
              styles={{
                root: { width: 24 },
                path: { stroke: '#0058e4' },
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
