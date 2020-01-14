/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Form = styled.form`
  display: block;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  svg {
    color: #000;
    transform: rotate(-45deg) translate(-19px,-22px);
    transform-origin: 50% 50%;
  }
`;

export const Input = styled.input`
  background: #e0b528;
  border: none;
  padding: 9px 10px;
  border: none;
  border-bottom: 1px solid #000;
  width: 100%;
  color: #000;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #000;
  }
`;

export const Background = styled.div`
  position: fixed;
  height: 100%;
  display: block;
  z-index: 9999999999;
  width: 100%;
  background: rgba(0,0,0,0.2);
  transition: .2s all ease-in-out;
  
`;
