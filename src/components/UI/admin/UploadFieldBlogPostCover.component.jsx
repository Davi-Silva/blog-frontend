/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';

import Dropzone from 'react-dropzone';

import {
  DropContainerBlogPostCover,
  UploadMessage,
} from '../../../styled-components/admin.styled-components';

const Upload = (props) => {
  const renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessage>Drag the cover image here...</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">Unsupported file...</UploadMessage>;
    }

    return (
      <UploadMessage type="success">Drop the cover image here...</UploadMessage>
    );
  };


  const { onUpload } = props;
  return (
    <Dropzone accept="image/*" onDropAccepted={onUpload} uploadMultiple="false">
      {({
        getRootProps,
        getInputProps,
        isDragActive,
        isDragReject,
      }) => (
        <DropContainerBlogPostCover
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          <input {...getInputProps()} />
          {renderDragMessage(isDragActive, isDragReject)}
        </DropContainerBlogPostCover>
      )}
    </Dropzone>
  );
};

export default Upload;
