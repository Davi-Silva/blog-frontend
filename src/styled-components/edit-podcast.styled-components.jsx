/* eslint-disable no-tabs */
import styled from 'styled-components';

export const Wrapper = styled.div`
	margin: 20px auto 0px auto;
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.2);
`;

export const UploadedOn = styled.p`
	color: #999;
	margin: 10px 25px;
`;

export const Input = styled.input`
	color: #0058e4;
	text-transform: uppercase;
	font-size: 26px;
	font-weight: 700;
	letter-spacing: 1px;
	margin: 10px 25px;
  background: transparent;
  border: none;
  transition: all .15s ease-in-out;
  &:focus {
    outline: none;
  }
`;

export const TextArea = styled.textarea`
	color: #999;
	font-size: 18px;
	margin: 10px 25px;
  background: transparent;
  border: none;
  height: 400px;
  &:focus {
    outline: #0058e4;
  }
`;

export const Tags = styled.p`
	color: #999;
	font-size: 16px;
`;

export const Update = styled.button`
	background: #0058e4;
	color: #fff;
	border-radius: 50px;
	height: 65px;
	width: 65px;
	position: absolute;
	right: 0;
	top: 0;
	border: none;
	box-shadow: 0px 4px 7px rgba(0, 0, 0, .25);
	transition: all .2s ease-in-out;
	&:hover {
		box-shadow: 0px 6px 7px rgba(0, 0, 0, .25);
		transform: scale(1.1, 1.1);
	}
	&:active {
		transform: scale(0.9, 0.9);
	}
	&:focus {
		outline: none;
	}
	i {
		font-size: 25px;
	}
`;
