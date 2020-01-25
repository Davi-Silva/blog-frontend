import React, { Component } from "react";

import Dropzone from "react-dropzone";

import {
  DropAudioContainer,
  UploadAudioMessage
} from "../../../styled-components/admin.styled-components";

export default class Upload extends Component {
  renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadAudioMessage>Drag the audio file here...</UploadAudioMessage>;
    }

    if (isDragReject) {
      return <UploadAudioMessage type="error">Unsupported file...</UploadAudioMessage>;
    }

    return (
      <UploadAudioMessage type="success">Drop the audio file here...</UploadAudioMessage>
    );
  };

  render() {
    const { onUpload } = this.props;

    return (
      <Dropzone accept="audio/*" onDropAccepted={onUpload} uploadMultiple="false">
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropAudioContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} />
            {this.renderDragMessage(isDragActive, isDragReject)}
          </DropAudioContainer>
        )}
      </Dropzone>
    );
  }
}