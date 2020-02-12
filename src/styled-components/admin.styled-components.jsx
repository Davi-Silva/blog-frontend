/* eslint-disable no-tabs */
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { rotate } from './animations';

export const AdminWrapper = styled.div`
  padding: 0;
`;

export const Column = styled.div`
  padding: 0 15px;
  @media (max-width: 1199px) {
    padding-right: 10px;
  }
  @media (max-width: 1106px) {
    padding-right: 5px;
  }
  @media (max-width: 991px) {
    padding-right: 0px;
  }
  @media (max-width: 767px) {
    padding-right: 15px;
  }
`;

export const AdminUl = styled.ul`
  padding: 0;
  position: sticky;
  top: 0;
  @media (max-width: 767px) {
    width: 100%;
    position: sticky;
    margin-bottom: 0px!important;
    top: 0;
  }
`;

export const AdminLi = styled.li`
  list-style: none;
  width: 100%;
  height: 100px;
  transition: all .2s ease-in-out;
  &:hover {
    color: #e0b528;
  }
  @media (max-width: 767px) {
    display: inline-block;
    width: 25%;
    height: 70px;
  }
`;

export const AdminLi2 = styled.li`
  list-style: none;
  width: 100%;
  height: 100px;
  transform: translateY(49px);
  transition: all .2s ease-in-out;
  &:hover {
    color: #e0b528;
  }
  @media (max-width: 767px) {
    display: inline-block;
    transform: translateY(0px);
    width: 33%;
    height: 55px;
  }
`;

export const AdminButton = styled.button`
  color: #000;
  width: 100%;
  height: 100%;
  display: block;
  margin: 0 auto;
  background: transparent;
  border: none;
  transition: all .2s ease-in-out;
  @media (max-width: 767px) {
    transform: translateY(14px);
  }
  &:hover {
    text-decoration: none;
    color: #e0b528;
  }
  &:focus {
    outline: none;
  }
  svg {
    margin: 0 auto;
    display: table;
    font-size: 22px;
    @media (max-width: 566px) {
      font-size: 20px;
    }
    @media (max-width: 400px) {
      font-size: 18px;
    }
    @media (max-width: 272px) {
      font-size: 16px;
    }
  }
  span {
    margin: 0 auto;
    display: table;
    font-size: 14px;
    margin-top: 4px;
    @media (max-width: 566px) {
      font-size: 13px;
    }
    @media (max-width: 400px) {
      font-size: 12px;
    }
    @media (max-width: 272px) {
      font-size: 11px;
    }
  }

  @media (max-width: 767px) {
    width: unset!important;
    height: unset!important;
  }
`;

export const AdminSubButton = styled.button`
  color: #000;
  width: 100%;
  height: 100%;
  display: block;
  margin: 0 auto;
  background: transparent;
  border: none;
  transition: all .2s ease-in-out;
  @media (max-width: 767px) {
    transform: translateY(14px);
  }
  &:hover {
    text-decoration: none;
    color: #e0b528;
  }
  &:focus {
    outline: none;
  }
  svg {
    margin: 0 auto;
    display: table;
    font-size: 22px;
    @media (max-width: 566px) {
      font-size: 20px;
    }
    @media (max-width: 400px) {
      font-size: 18px;
    }
    @media (max-width: 272px) {
      font-size: 16px;
    }
  }
  span {
    margin: 0 auto;
    display: table;
    font-size: 14px;
    margin-top: 4px;
    @media (max-width: 566px) {
      font-size: 13px;
    }
    @media (max-width: 400px) {
      font-size: 12px;
    }
    @media (max-width: 272px) {
      font-size: 11px;
    }
  }

  @media (max-width: 767px) {
    width: unset!important;
    height: unset!important;
  }
`;

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

export const NoContentDiv = styled.div`
	margin: 10px auto;
	display: table;
`;

export const NoContentImg = styled.img`
	height: 30px;
	width: 30px;
	margin: 5px auto;
	display: table;
`;

export const NoContentP = styled.p`
	color: #999;
	font-size: 12px;
	margin: 0 auto;
	display: table;
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
    box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.1);
    background: rgba(0, 0, 0, 0.04);
  }
  &:focus {
    outline: none;
    box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.1);
    background: rgba(0, 0, 0, 0.04);
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
    border: 1px solid #e0b528;
    border-radius: 50px;
    transition: "all .2s ease-in-out";
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #e0b528;
  }
`;

export const Expand = styled(Link)`
  padding: 20px;
  float: right;
  margin-right: 10px;
  color: #e0b528;
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
    color: #e0b528;
    border: none;
    font-size: 18px;
  }
`;

export const Add = styled(Link)`
  background-color: transparent;
  font-size: 19px;
  float: right;
  color: #e0b528;
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
  padding: 4px 7px;
  font-weight: 700;
  background-color: #fff;
  border-radius: 4px;
  color: #e0b528;
  transition: all .3s ease-in-out;
  transition-delay: .1s;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #e0b528;
    text-decoration: none;
    background-color: #e2ecfd;
  }
`;

export const Delete = styled.button`
  margin-left: 5px;
  float: right;
  font-size: 12px;
  border: none;
  padding: 4px 7px;
  font-weight: 700;
  background-color: #fff;
  border-radius: 4px;
  color: #cc2222;
  transition: all .3s ease-in-out;
  transition-delay: .1s;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #cc2222;
    text-decoration: none;
    background-color: #ffe5e5;
  }
`;

export const GoTo = styled(Link)`
  color: #333;
  margin-right: 10px;
  float: right;
  font-size: 12px;
  padding: 4px 7px;
  font-weight: 700;
  border-radius: 4px;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  transition-delay: .1s;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #333;
    text-decoration: none;
    background-color: #ececec;
  }
`;

export const Container = styled.ul`
    top: -250px;
    position: relative;

  li {
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
    list-style: none;
    color: #444;
    & + li {
      margin-top: 15px;
    }
  }
`;

export const ContainerAdmin = styled.div`
  position: relative;

`;

export const ContainerBlogPostCover = styled.ul`
  top: 20px;
  position: relative;
  width: 100%;
  transform: translateY(-305px);
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

export const DeleteButton = styled.button`
  color: #e57878;
  background: #fff;
  border: none;
  margin: 0 auto;
  display: table;
  transform: translateY(-37px);
  padding: 1px 5px;
  font-size: 12px;
  border-radius: 4px;
`;

export const FileInfoAdmin = styled.div`
  position: relative;
    top: -141px;
    height: 0px;
`;

export const FileInfoBlogPost = styled.div`
  div {
    position: absolute;
    height: 300px;
    width: 100%;
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
  display: table;
  margin: 0 auto;
`;

export const PreviewAdmin = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 120px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  display: table;
  margin: 0 auto;
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
  position: absolute;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 100%;
  height: 305px;
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
  border: 1px dashed #e0b528;
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
  border: 1px dashed #e0b528;
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

export const DropContainerAdmin = styled.div.attrs({
  className: 'dropzone',
})`
  border: 1px dashed #e0b528;
  border-radius: 70px;
  height: 120px;
  width: 120px;
  display: table;
  z-index: 99999;
  margin: 0 auto 20px auto;
  cursor: pointer;
  -webkit-transition: height 0.2s ease;
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
  border: 1px dashed #e0b528;
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
  default: '#000',
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

export const UploadMessageAdmin = styled.p`
  display: flex;
  color: ${(props) => messageColors[props.type || 'default']};
  justify-content: center;
  text-align: center;
  padding: 15px 0;
  font-size: 13px;
  margin: 25px 0;
`;

export const AllContent = styled.div`

`;

export const LoadingAllContent = styled.div`
	width: 100%;
	svg {
		animation: ${rotate} 1s infinite;
		color: #333;
		font-size: 18px;
		display: table;
		margin: 25px auto;
	}
`;

export const InfinitePostList = styled.ul`
	margin-bottom: 0px;
	div {
		overflow: hidden;
		::-webkit-scrollbar {
			display: none;
		}

		::-webkit-scrollbar-track {
			display: none;
		}

		::-webkit-scrollbar-thumb {
			display: none;
		}

		::-webkit-scrollbar-thumb:hover {
			display: none;
		}
	}
`;
