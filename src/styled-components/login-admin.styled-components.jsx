/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const TitleDiv = styled.div`
  margin: 15px auto 0 auto; 
  display: table;
  svg {
    margin: 0 auto;
    display: table;
    font-size: 25px;
    color: #333;
  }
  h1 {
    margin: 0 auto;
    display: table;
    font-size: 18px;
    color: #333;
  }
`;

export const Form = styled.form`
  margin: 20px auto 10px auto;
  display: table;
  input {
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 0 0 5px 0;
    border-radius: 5px;
    color: #333;
    padding: 5px 8px;
    transition: .2s all ease-in-out;
    &:focus {
      outline: none;
      border: 1px solid #0058e4;
    }
    &::placeholder {
      color: #333;
    }
  }
  .login {
    margin: 0 auto;
    display: table;
    background-color: transparent;
    padding: 5px 8px;
    border: none;
    border-radius: 5px;
    color: #999;
    font-weight: 900;
    letter-spacing: 1px;
    transition: .2s all ease-in-out;
    &:hover {
      background-color: #f2f3f5;
    }
    &:focus {
      outline: none;
    }
    &:active {
      background-color: #dedede;
      color: #888;
    }
  }
`;

export const Warning = styled.div`
  border: 1px solid #d42626;
  background-color: #d426260f;
  display: table;
  margin: 5px auto;
  border-radius: 5px;
  padding: 5px 8px;
  color: #d42626;
  font-size: 13px;
  letter-spacing: 1px;
`;
