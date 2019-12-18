import styled from 'styled-components';

export const UploadedOn = styled.p`
	color: #999;
	margin: 10px 0px;
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
