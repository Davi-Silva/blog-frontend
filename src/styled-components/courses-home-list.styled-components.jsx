/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UnderTopCoverStrap = styled.div`
  width: 100%;
  height: 70px;
  background: linear-gradient(to right, #0058e4 0%, #0058e4 100%);
  padding: 15px;
  h6 {
    text-align: center;
    color: #fff;
  }
`;

export const WrapperMostViewed = styled.div`
  border: 1px solid #efefef;
  border-radius: 4px;
  color: #333;
  width: 200px;
  background: #fff;
  height: 250px;
  margin: 0 0 25px 0;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.15);
  transition: .2s all ease-in-out;
  &:hover {
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
    border: 1px solid #e2e2e2;
  }
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

export const AuthorMostViewed = styled(Link)`
  color: #333;
  font-size: 12px;
  position: relative;
  top: 68px;
  &:hover {
    text-decoration: none;
    color: #0058e4;
  }
`;

export const StickyWrapper = styled.div`
  position: sticky;
  top: 25px;
  margin: 41px 0 25px 0;
`;

export const MostViewed = styled.div`
  padding: 15px 0;
`;

export const MostViewedTitle = styled.h3`
  color: #333;
  font-size: 16px;
  letter-spacing: 1px;
  margin-top: 15px;
`;
