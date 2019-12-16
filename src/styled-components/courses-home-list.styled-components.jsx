/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TopCover = styled.div`
  width: 100%;
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const TopCoverContent = styled.div`
  margin: 150px 0;
`;

export const TopCoverTitle = styled.h1`
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 1px;
  color: #fff;
`;

export const TopCoverP = styled.p`
  font-size: 18px;
  letter-spacing: 1px;
  color: #fff;
`;


export const TopCoverSearchInput = styled.span`
  background: #fff;
  color: #999;
  padding: 10px;
  font-size: 18px;
  border-radius: 2px;
  border: none;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  input {
    border: none;
    &:focus {
      outline: none;
      color: #999;
    }
    &::placeholder {
      color: #999;
      font-size: 18px;
      font-weight: 200px;
    }
  }
  svg {
    margin: 0 4px 0px 18px;
  }
`;

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

export const StatementDiv = styled.div`
  width: 100%;
  /* height: 200px; */
  background: #f2f3f5;
`;

export const StatementWrapper = styled.div`
  background: #fff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 150px;
  display: table;
  margin: 25px auto;
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

export const Newsletter = styled.div`
  width: 100%;
  background: #353535;
  padding: 25px 0;
`;

export const NewsletterDiv = styled.div`
  width: 100%;
  margin: 50px 0;
`;

export const NewsletterTitle = styled.h3`
  color: #fff;
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 2px;
  text-align: center;
`;

export const NewsletterP = styled.p`
  color: #fff;
  font-size: 16px;
  text-align: center;
`;

export const NewsletterInput = styled.span`
  background: #fff;
  color: #999;
  padding: 10px;
  font-size: 18px;
  border-radius: 2px;
  display: table;
  margin: 5px auto;
  border: none;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  input {
    border: none;
    &:focus {
      outline: none;
      color: #999;
    }
    &::placeholder {
      color: #999;
      font-size: 18px;
      font-weight: 200px;
    }
  }
  svg {
    margin: 0 4px 0px 18px;
  }
`;

export const RecentCategoriesDiv = styled.div`
  width: 100%;
  margin: 15px 0;
`;

export const RecentCategoriesTitle = styled.h3`
  color: #333;
  font-size: 16px;
  letter-spacing: 1px;
  margin-top: 15px;
`;

export const RecentCategoriesWrap = styled.div`
  background: #fff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  border: 1px solid #f2f3f5;
  letter-spacing: 1px;
  padding: 11px 17px;
  margin-bottom: 20px;
  transition: .2s all ease-in-out;
  &:hover {
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3);
  }
  svg {
    font-size: 30px;
  }
  span {
    color: #333;
    font-size: 14px;
    margin-left: 15px;
  }
`;
