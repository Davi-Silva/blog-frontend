import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const RecentCategoriesWrap = styled(Link)`
background: #fff;
    box-shadow: 0px 1px 2px rgba(0,0,0,0.25);
    border: 1px solid #f2f3f5;
    -webkit-letter-spacing: 1px;
    -moz-letter-spacing: 1px;
    -ms-letter-spacing: 1px;
    letter-spacing: 1px;
    color: #333;
    width: 100%;
    height: 54px;
    display: block;
    padding: 11px 17px;
    margin-bottom: 20px;
    -webkit-transition: .2s all ease-in-out;
    transition: .2s all ease-in-out;
  &:hover {
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3);
    color: #333;
    text-decoration: none;
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
