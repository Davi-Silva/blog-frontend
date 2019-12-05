/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Wrapper = styled.div`
  margin: 11px 0;
  &::after {
    content: '';
    height: 1px;
    width: 25%;
    display: table;
    margin: 25px auto 0px auto;
    background: #ddd;
  }
`;

export const Title = styled.h6`
  color: #999;
  font-weight: 900;
  font-size: 10px;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
`;

export const CategoriesUl = styled.ul`
  margin: 2px auto;
  display: table;
`;

export const CategoriesLi = styled.li`
  list-style: none;
`;

export const CategoryLink = styled(Link)`
  color: #999;
  font-size: 14px;
  margin: 5px auto;
  display: table;
  transition: all .3s ease-in-out;
  &:hover {
    color: #0058e4;
    text-decoration: none;
  }
`;
