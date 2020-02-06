/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoriesWrapper = styled.div`
  z-index: 9999999999;
  position: absolute;
  background: #ffcd2b;
  min-width: 100px;
  /* min-height: 400px; */
  color: #000;
  top: 58px;
  overflow: hidden;
  left: 12%;
  border-radius: 2px;
  box-shadow: 0px 2px 4px 1px rgba(0,0,0,0.2);
`;

export const CategoriesUl = styled.ul`
  margin-bottom: 0;
`;

export const CategoriesLi = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const Category = styled(Link)`
  padding: 8px 10px;
  background: transparent;
  color: #000;
  display: flex;
  flex-direction: row;
  transition: all .2s ease-in-out;
  p {
    margin-bottom: 0;
  }
  &:hover {
    background: #000;
    color: #ffcd2b;
    text-decoration: none;
  }
`;
