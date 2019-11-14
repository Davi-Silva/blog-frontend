/* eslint-disable no-tabs */
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const H6 = styled.h6`
  color: #999;
  font-weight: 900;
  letter-spacing: 1px;
  font-size: 13px;
`;

export const Panel = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 20px 30px;
  height: 400px;
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  @media (max-width: 768px) {
    margin: 15px 15px !important;
  }
`;

export const Li = styled.li`
  display: inline-block;
  list-style: none;
  margin: 5px 30px;
  color: #999;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #555;
  }
`;

export const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  width: 100%;
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid #fff;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.2);
    border: 1px solid #0058e4;
  }
  &:focus {
    outline: none;
    border: 1px solid #0058e4;
    box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.2);
  }
`;

export const A = styled(Link)`
  color: #999;
`;

export const Span = styled.span`
  color: #999;
  font-size: 12px;
  cursor: default;
  user-select: none;
`;

export const Main = styled.main`
  height: 288px;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    height: 5px;
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #fff;
    border: 1px solid #0058e4;
    border-radius: 50px;
    transition: "all .2s ease-in-out";
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #0058e4;
  }
`;

export const Expand = styled(Link)`
  padding: 20px;
  float: right;
  margin-right: 10px;
  color: #0058e4;
  &:hover {
    text-decoration: none;
  }
  &:focus {
    outline: none;
  }
`;

export const Form = styled.form`
  display: inline-block;
  input {
    border: none;
    transition: all 0.2s ease-in-out;
    padding-right: 10px;
    color: #999;
    &:focus {
      outline: none;
    }
    @media (max-width: 373px) {
      width: 180px;
    }
    @media (max-width: 323px) {
      width: 140px;
    }
    @media (max-width: 293px) {
      width: 120px;
    }
    @media (max-width: 257px) {
      width: 100px;
    }
  }
  button {
    background-color: transparent;
    color: #0058e4;
    border: none;
    font-size: 18px;
  }
`;

export const Add = styled(Link)`
  background-color: transparent;
  font-size: 19px;
  float: right;
  color: #0058e4;
  padding: 0px 5px;
  &:hover {
    text-decoration: none;
  }
  i {
    padding: 6px;
    border-radius: 50px;
    transition: all 0.35s ease-in-out;
    &:active {
      background-color: #f4f4f4;
    }
  }
`;

export const Edit = styled(Link)`
  margin-right: 5px;
  float: right;
  font-size: 12px;
  border: none;
  padding: 3px 7px;
  background-color: #fff;
  border-radius: 50px;
  border: 1px solid #0058e4;
  color: #0058e4;
  transition: all .3s ease-in-out;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
    text-decoration: none;
    background-color: #0058e4;
  }
`;

export const Delete = styled.button`
  margin-left: 5px;
  float: right;
  font-size: 12px;
  border: 1px solid #cc2222;
  padding: 3px 7px;
  background-color: #fff;
  border-radius: 50px;
  color: #cc2222;
  transition: all .3s ease-in-out;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
    text-decoration: none;
    background-color: #cc2222;
  }
`;

export const GoTo = styled(Link)`
  color: #333;
  margin-right: 10px;
  float: right;
  border: 1px solid #333;
  font-size: 12px;
  padding: 3px 7px;
  border-radius: 50px;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
    text-decoration: none;
    background-color: #333;
  }
`;

export const Container = styled.ul`
  top: 20px;
  position: absolute;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;
    & + li {
      margin-top: 15px;
    }
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    span {
      font-size: 12px;
      color: #999;
      margin-top: 5px;
      button {
        border: 0;
        background: transparent;
        color: #e57878;
        margin-left: 5px;
        cursor: pointer;
      }
    }
  }
`;

export const FileInfoBlogPost = styled.div`
  div {
    position: absolute;
    height: 300px;
    width: 100vw;
    z-index: 9999;
    span {
      font-size: 12px;
      color: #999;
      margin-top: 50px;
      background-color: #fff;
      padding: 3px 6px;
      border-radius: 5px;
      button {
        border: 0;
        background: transparent;
        color: #e57878;
        margin-left: 5px;
        cursor: pointer;
      }
    }
  }
`;

export const Preview = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 5px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-left: 50px;
`;

export const PreviewAudio = styled.div`
  width: 250px;
  /* height: 250px; */
  border-radius: 5px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-left: 50px;
`;

export const PreviewBlogPostCover = styled.div`
  width: 100%!important;
  height: 305px!important;
  display: table;
  position: absolute;
  top: -20px!important;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`;

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const DropContainer = styled.div.attrs({
  className: 'dropzone',
})`
  margin: -3px auto 6px auto;
  border: 1px dashed #0058e4;
  border-radius: 4px;
  width: 250px;
	height: 250px;
	display: table;
  z-index: 99999;
	margin: 0 auto;
  cursor: pointer;
  transition: height 0.2s ease;
  ${(props) => props.isDragActive && dragActive};
  ${(props) => props.isDragReject && dragReject};
  &:focus {
    outline: none;
  }
`;

export const DropAudioContainer = styled.div.attrs({
  className: 'dropzone',
})`
  margin: -3px auto 6px auto;
  border: 1px dashed #0058e4;
  border-radius: 4px;
  width: 100%;
	height: 20px;
	display: table;
  z-index: 99999;
	margin: 0 auto;
  cursor: pointer;
  transition: height 0.2s ease;
  ${(props) => props.isDragActive && dragActive};
  ${(props) => props.isDragReject && dragReject};
  &:focus {
    outline: none;
  }
`;

export const DropContainerBlogPostCover = styled.div.attrs({
  className: 'dropzone',
})`
  margin-top: 5px;
  margin-left: 6px;
  border: 1px dashed #0058e4;
  border-radius: 4px;
  width: 99%;
	height: 300px;
	display: table;
  z-index: 99999;
  cursor: pointer;
  transition: height 0.2s ease;
  ${(props) => props.isDragActive && dragActive};
  ${(props) => props.isDragReject && dragReject};
  &:focus {
    outline: none;
  }
`;

const messageColors = {
  default: '#999',
  error: '#e57878',
  success: '#78e5d5',
};

export const UploadMessage = styled.p`
  display: flex;
  color: ${(props) => messageColors[props.type || 'default']};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;

export const UploadAudioMessage = styled.p`
  display: flex;
  color: ${(props) => messageColors[props.type || 'default']};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;
