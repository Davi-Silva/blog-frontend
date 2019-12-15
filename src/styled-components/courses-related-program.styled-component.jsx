/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProgramCover = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
  width: 100%;
`;

export const ProgramTitle = styled.h1`
  color: #fff;
  font-size: 26px;
  font-weight: 900;
  letter-spacing: 3px;
  position: relative;
  padding: 30px 15px;
`;

export const CourseCover = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100px;
  width: 100%;
`;

export const JourneyDiv = styled.div`
  margin: 15px 0;
`;

export const JourneyTitle = styled.h3`
  font-size: 20px;
  color: #333;
  font-weight: 900;
  letter-spacing: 1px;
`;

export const JourneyP = styled.p`
  font-size: 16px;
  color: #333;
`;

export const JourneyBuyAllCourses = styled(Link)`
  font-size: 16px;
  color: #fff;
  background: #008100;
  padding: 7px 10px;
  position: absolute;
  right: 0;
  transition: .2s all ease-in-out;
  &:hover {
    color: #fff;
    text-decoration: none;
    background: #007900;
  }
  &:focus {
    outline: none;
  }
`;

export const ProgressDiv = styled.div`
  margin: 15px 0;
`;

export const Progress = styled.h3`
  font-size: 18px;
  color: #333;
  font-weight: 900;
  letter-spacing: 1px;
  display: block;
  text-align: center;
`;
