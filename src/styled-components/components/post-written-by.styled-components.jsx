/* eslint-disable no-tabs */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WrittenByDiv = styled.div`
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  padding: 25px 0;
  margin: 20px 0 30px 0;
  @media (max-width: 575px) {
    margin-bottom: 0;
  }   
`;

export const WrittenByUl = styled.ul`
  margin-bottom: 0;
  transform: translateY(-25px);
  @media (max-width: 575px) {
    transform: translateY(0px);
  }  
  li {
    display: inline-block;
    @media (max-width: 575px) {
      width: 100%;
    }
    img {
      height: 95px;
      width: 95px;
      border-radius: 70px;
      @media (max-width: 991px) {
        width: 80px;
        height: 80px;
      }
      @media (max-width: 440px) {
        width: 75px;
        height: 75px;
      }
    }
  }
  .userInfoDiv {
    transform: translateY(39px);
    @media (max-width: 575px) {
      transform: translateY(0px);
    }  
  }
`;

export const WrittenByAuthorLinkTop = styled(Link)`
  &:hover {
    text-decoration: none;
  }
  @media (max-width: 575px) {
    margin: 0 auto;
    display: table;
  }  
`;

export const WrittenByAuthorInfoUl = styled.ul`
  margin-bottom: 0;
  margin-left: 15px;
  li {
    list-style: none;
    p {
      color: #999;
      font-size: 13px;
      margin-bottom: 0;
      @media (max-width: 991px) {
        font-size: 12px;
      }
      @media (max-width: 575px) {
        text-align: center;
      }   
    }
    b {
      color: #333;
      font-size: 24px;
      letter-spacing: 1px;
      @media (max-width: 991px) {
        font-size: 20px;
      }
      @media (max-width: 575px) {
        text-align: center;
      }  
    }
    .author-quote {
      color: #999;
      font-weight: 700;
      font-size: 13px;
      letter-spacing: 1px;
      width: 485px;
      line-height: 20px;
      @media (max-width: 991px) {
        font-size: 12px;
        width: 415px;
        line-height: 17px;
      }
      @media (max-width: 575px) {
        width: 80%;
        text-align: center;
        margin: 0 auto;
        display: table;
      }
      @media (max-width: 440px) {
        width: 100%;
      }    
    }
  }
`;
