
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import {
  ContainerBlogPostCover,
  FileInfoBlogPost,
  PreviewBlogPostCover,
} from '../../../styled-components/admin.styled-components';

const FileList = ({ files, onDelete }) => (
  <ContainerBlogPostCover>
    <li key={files.id}>
      <FileInfoBlogPost>
        <PreviewBlogPostCover src={files.preview} />
        <br />
        <div style={{
          display: 'block',
          position: 'absolute',
          // left: '45%',
          // width: '100%',
          borderRadius: '5px',
          textAlign: 'center',
          height: '28px',
          top: '240px',
        }}
        >
          {/* <strong>{files.name}</strong> */}
          <span>
            {files.readableSize}
            {' '}
            {!!files.url && (
            <button type="button" onClick={() => onDelete(files.id)}>
                  Delete
            </button>
            )}
          </span>
        </div>
      </FileInfoBlogPost>
      <div style={{
        display: 'block',
        position: 'absolute',
        left: '45%',
        borderRadius: '5px',
        textAlign: 'center',
        height: '28px',
        // width: '100vw',
        top: '200px',
        zIndex: '9999',
      }}
      >
        {!files.uploaded && !files.error && (
        <CircularProgressbar
          styles={{
            root: { width: 24 },
            path: { stroke: '#0058e4' },
          }}
          strokeWidth={10}
          percentage={files.progress}
        />
        )}

        {files.url && (
        <a
          href={files.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            position: 'absolute',
            borderRadius: '5px',
            textAlign: 'center',
            height: '28px',
            zIndex: '9999',
            backgroundColor: '#fff',
            padding: '2px 0px 0px 7px',
          }}
        >
          <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
        </a>
        )}

        {files.uploaded && (
        <MdCheckCircle
          size={24}
          color="#47d15c"
          style={{
            backgroundColor: '#fff',
            margin: '0 0 0 56px',
            display: 'block',
            position: 'absolute',
            height: '29px',
            width: '34px',
            borderRadius: '5px',
          }}
        />
        )}
        {files.error && (
        <MdError
          size={24}
          color="#e34444"
          style={{
            backgroundColor: '#fff', margin: '0 0 0 56px', height: '29px', width: '34px', borderRadius: '5px',
          }}
        />
        )}
      </div>
    </li>
  </ContainerBlogPostCover>
);

export default FileList;
