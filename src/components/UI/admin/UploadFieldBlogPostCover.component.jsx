import React, { Component } from "react";

import Dropzone from "react-dropzone";

import {
  DropContainerBlogPostCover,
  UploadMessage
} from "../../../styled-components/admin.styled-components";

export default class Upload extends Component {
  renderDragMessage = (isDragActive, isDragReject) => {
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

  render() {
    const { onUpload } = this.props;
    return (
      <Dropzone accept="image/*" onDropAccepted={onUpload}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainerBlogPostCover
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} />
            {this.renderDragMessage(isDragActive, isDragReject)}
          </DropContainerBlogPostCover>
        )}
      </Dropzone>
    );
  }
}