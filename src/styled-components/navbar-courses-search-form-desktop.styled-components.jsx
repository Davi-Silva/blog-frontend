/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Form = styled.form`
  display: block;
  top: 0px;
  left: 0px;
  svg {
    color: #999;
    transform: rotate(-45deg) translate(-19px,-22px);
    transform-origin: 50% 50%;
  }
`;

export const Input = styled.input`
  background: #efefef;
  border: none;
  padding: 7px 10px;
  border-radius: 3px;
  margin: 5px 0;
  color: #999;
  border: 1px solid #fff;
  transition: .2s all ease-in-out;
  &:focus {
    outline: none;
    border: 1px solid #b3b3b3;
    background: #fff;
  }
  &::placeholder {
    color: #999;
  }
`;
