/* eslint-disable no-tabs */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  border: none;
  transition: all 0.15s ease-in-out;
  :focus {
    border-bottom: none;
    outline: none;
  }
  ::placeholder {
    color: #333;
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
  background-color: transparent;
  border: none;
  color: #999;
  width: 100%;
  font-weight: 900;
  padding: 8px 0px;
  transition: all 0.3s ease-in-out;
  font-size: 16px;
	:focus {
		outline: none;
	}
  :hover {
    color: #0042ab;
  }
`;

export const BackButton = styled(Link)`
	i {
		color: #fff;
		&:hover {
			text-decoration: none;
		}
	}
`;
