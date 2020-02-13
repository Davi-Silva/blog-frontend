/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 25px 0 55px 0;
  width: 100%;
  @media (max-width: 768px) {
    padding: 25px 0 460px 0;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  display: block;
  font-weight: 900;
  color: #333;
`;

export const Statement = styled.p`
  font-size: 16px;
  color: #999;
  max-width: 310px;
`;

export const Form = styled.form`
  border: 1px solid rgba(0, 0, 0, 0.2); 
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: table;
  background-color: #fff;
  padding: 0px 2px;
  @media (max-width: 367px) {
      width: 100%;
    }
  input {
    background-color: #fff;
    color: #333; 
    border: none;
    padding: 4px;
    width: 300px;
    height: 38px;
    &:focus {
      outline: none;
    }
    @media (max-width: 367px) {
      width: 85%;
    }
    @media (max-width: 238px) {
      width: 75%;
    }
  }
  button {
    background-color: #fff;
    border: none;
    padding: 7px;
    @media (max-width: 367px) {
      float: right;
    }
    &:focus {
      outline: none;
    }
    svg {
      color: #000;
    }
  }
`;
