/* eslint-disable react/prop-types */
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
    {files.map((uploadedFile) => (
      <li key={uploadedFile.id}>
        <FileInfoBlogPost>
          <PreviewBlogPostCover src={uploadedFile.preview} />
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

          {uploadedFile.uploaded && (
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
          {uploadedFile.error && (
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
    ))}
  </ContainerBlogPostCover>
);

export default FileList;
