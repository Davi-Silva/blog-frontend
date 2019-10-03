import styled from "styled-components";

export const Header = styled.h5`
  color: #0058e4;
`;

export const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 10px 15px;
  margin: 3px 0px;
  color: #a9a7ad;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.05);
  transition: all 0.4s ease-in-out;
  :focus {
    border: 1px solid #0058e4;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  ::placeholder {
    color: #a9a7ad;
  }
`;

export const Button = styled.button`
  background-color: #0058e4;
  border: none;
  border-radius: 3px;
  color: #fff;
  width: 100%;
  padding: 8px 0px;
  transition: all 0.3s ease-in-out;
  font-size: 14px;

  :hover {
    background-color: #0042ab;
  }
`;

export const P = styled.p`
  font-size: 14px;
`;

export const A = styled.a`
  color: #0058e4;
  :hover {
    color: #a9a7ad;
  }
`;

export const Alert = styled.div`
  display: none;
`;
