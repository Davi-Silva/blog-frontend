/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Form = styled.form`
  display: block;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  svg {
    color: #999;
    transform: rotate(-45deg) translate(-19px,-22px);
    transform-origin: 50% 50%;
  }
`;

export const Input = styled.input`
  background: #fff;
  border: none;
  padding: 7px 10px;
  border: 1px solid #0058e4;
  width: 100%;
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
