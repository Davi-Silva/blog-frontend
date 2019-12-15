/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  border: 1px solid #efefef;
  color: #333;
  width: 100%;
  margin: 25px 0;
  transition: .2s all ease-in-out;
  &:hover {
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
    border: 1px solid #e2e2e2;
  }
`;

export const CourseCoverLink = styled(Link)`
  width: 100%;
  height: 150px;
`;


export const CourseCover = styled.div`
  width: 100%;
  height: 150px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const RelatedProgramDiv = styled.div`
  background: #efefef;
  width: 100%;
  padding: 5px 7px;
  font-size: 14px;
  transition: .2s all ease-in-out;
  &:hover {
    background: #e2e2e2;
  }
`;

export const ReplatedProgram = styled(Link)`
  color: #333;
  font-size: 16px;
  display: block;
  transition: .2s all ease-in-out;
  &:hover {
    text-decoration: none;
    color: #333;
  }
  b {
    font-size: 13px;
    /* text-transform: uppercase; */
  }
`;

export const Content = styled.div`
  padding: 10px;
`;

export const Title = styled(Link)`
  color: #333;
  font-size: 20px;
  letter-spacing: 1px;
  display: table;
  transition: .2s all ease-in-out;
  &:hover {
    text-decoration: none;
    color: #0058e4;
  }
`;

export const Author = styled(Link)`
  color: #333;
  font-size: 16px;
  display: table;
  &:hover {
    text-decoration: none;
    color: #333;
  }
`;
