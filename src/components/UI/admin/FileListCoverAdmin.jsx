/* eslint-disable react/prop-types */

import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import {
  ContainerAdmin,
  FileInfoAdmin,
  PreviewAdmin,
  DeleteButton,
} from '../../../styled-components/admin.styled-components';

const FileList = ({ file, onDelete }) => (
  <ContainerAdmin>

    <FileInfoAdmin>
      <PreviewAdmin src={file.url} />
      {file.readableSize}
      {' '}
      {!!file.url && (
        <DeleteButton type="button" onClick={() => onDelete(file.id)}>
          Delete
        </DeleteButton>
      )}

    </FileInfoAdmin>

  </ContainerAdmin>
);

export default FileList;
