import React, { Component } from "react";

import Dropzone from "react-dropzone";

import {
  DropContainerAdmin,
  UploadMessageAdmin
} from "../../../styled-components/admin.styled-components";

export default class Upload extends Component {
  renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessageAdmin>Drag the audio file here...</UploadMessageAdmin>;
    }

    if (isDragReject) {
      return <UploadMessageAdmin type="error">Unsupported file...</UploadMessageAdmin>;
    }

    return (
      <UploadMessageAdmin type="success">Drop the audio file here...</UploadMessageAdmin>
    );
  };

  render() {
    const { onUpload } = this.props;

    return (
      <Dropzone accept="image/*" onDropAccepted={onUpload} uploadMultiple="false">
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainerAdmin
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} />
            {this.renderDragMessage(isDragActive, isDragReject)}
          </DropContainerAdmin>
        )}
      </Dropzone>
    );
  }
}