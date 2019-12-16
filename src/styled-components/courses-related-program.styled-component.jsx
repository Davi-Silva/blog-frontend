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
  font-size: 15px;
  color: #333;
`;

export const JourneyBuyAllCourses = styled(Link)`
  font-size: 16px;
  color: #fff;
  background: #008100;
  padding: 7px 10px;
  /* float: right; */
  transition: .2s all ease-in-out;
  &:hover {
    color: #fff;
    text-decoration: none;
    background: #006f00;
  }
  &:focus {
    outline: none;
  }
`;

export const ProgressDiv = styled.div`
  margin: 15px 0;
  position: sticky;
  top: 15px;
`;

export const ProgressTitle = styled.h3`
  font-size: 18px;
  color: #333;
  font-weight: 900;
  letter-spacing: 1px;
  display: block;
  text-align: center;
`;

export const ProgramRecordTitle = styled.h4`
  color: #0058e4;
  letter-spacing: 1px;
  font-size: 13px;
  font-weight: 900;
  display: block;
  width: 100%;
  &::after {
    content: '';
    width: 100%;
    height: 3px;
    display: block;
    background: #e4e4e4;
    margin-top: 10px;
  }
`;

export const ProgramRecordCircle = styled.div`
  width: 250px;
  height: 250px;
  display: table;
  margin: 10px auto;
  border-radius: 150px;
  background: transparent;
  border: 8px solid #e4e4e4;
`;

export const ProgramRecordP = styled.p`
  font-size: 15px;
  color: #333;
  margin: 10px;
`;

export const CoursesListDiv = styled.div`
  /* width: 100%; */
  margin: 15px 0;
`;

export const CoursesListTitle = styled.h4`
  color: #0058e4;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 13px;
  font-weight: 900;
  display: block;
  width: 100%;
  &::after {
    content: '';
    width: 100%;
    height: 3px;
    display: block;
    background: #e4e4e4;
    margin-top: 10px;
  }
`;
