
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import {
  Container,
  FileInfo,
  PreviewAudio,
} from '../../../styled-components/admin.styled-components';

const FileList = ({ file, onDelete }) => (
  <Container>
    <li key={file.id}>
      <FileInfo>
        <PreviewAudio src={file.preview} />
        <div style={{
          position: 'absolute', display: 'block', width: '98%', background: '#fff', left: '5px', top: '186px', padding: '2px 5px', borderRadius: '5px',
        }}
        >
          <strong style={{ width: '100%' }}>{file.name}</strong>
          <span style={{ marginLeft: '10px' }}>
            {file.readableSize}
            {' '}
            {!!file.url && (
            <button type="button" onClick={() => onDelete(file.id)}>
                  Delete
            </button>
            )}
          </span>
        </div>
      </FileInfo>
      <div
        style={{
          position: 'absolute', background: '#fff', left: '0px', top: '255px', padding: '2px 5px', borderRadius: '5px',
        }}
      >
        {!file.uploaded && !file.error && (
        <CircularProgressbar
          styles={{
            root: { width: 24 },
            path: { stroke: '#0058e4' },
            marginLeft: '30px',
            position: 'absolute',
          }}
          strokeWidth={10}
          percentage={file.progress}
        />
        )}

        {file.url && (
        <a
          href={file.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
        </a>
        )}

        {file.uploaded && <MdCheckCircle size={24} color="#47d15c" />}
        {file.error && <MdError size={24} color="#e34444" />}
      </div>
    </li>
  </Container>
);

export default FileList;
