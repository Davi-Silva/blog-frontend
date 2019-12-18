/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryCover = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
  width: 100%;
`;

export const CategoryTitle = styled.h1`
  color: #fff;
  font-size: 26px;
  font-weight: 900;
  letter-spacing: 3px;
  position: relative;
  padding: 30px 15px;
`;

export const Breadcrumb = styled.div`
  padding: 15px 0;
  ul {
    margin-bottom: 0;
    li {
      display: inline-block;
      span {
        margin: 0 7px;
        font-size: 11px;
      }
      p {
        margin-bottom: 0;
        font-size: 14px;
        color: #0058e4;
      }
    }
  }
`;

export const BreadcrumbLink = styled(Link)`
  color: #0058e4;
  transition: all .2s ease-in-out;
  font-size: 14px;
  &:hover {
    color: #0058e4;
    font-weight: 500;
    text-decoration: none;
  }
`;
