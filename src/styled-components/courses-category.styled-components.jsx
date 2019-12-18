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
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 3px;
  position: relative;
  padding: 40px 0 5px 0;
`;

export const CategoryDescription = styled.p`
  color: #fff;
  font-weight: 700;
  /* font-size: 30px;
  font-weight: 900;
  letter-spacing: 3px;
  position: relative;
  padding: 30px 15px; */
`;


export const Breadcrumb = styled.div`
  padding: 8px 0;
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

export const MainStatement = styled.p`
  color: #333;
  font-size: 16px;
`;

export const RelatedTopics = styled.div`
  strong {
    color: #333;
  }
  a {
    color: #0058e4;
    &:hover {
      color: #0058e4;
    }
  }
`;

export const RelatedTopicsLink = styled(Link)`
  strong {
    color: #333;
  }
  a {
    color: #0058e4;
    &:hover {
      color: #0058e4;
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



export const CoursesListUl = styled.ul`
  width: 100%;
  height: 200px;
  li {
    display: inline-block;
    margin-right: 4px;
  }
`;

export const AddToFavorites = styled.button`
  color: #999;
  font-weight: 900;
  font-size: 18px;
  display: table;
  margin: 0 auto;
  border-radius: 5px;
  background: #fff;
  border: 2px solid #999;
  padding: 6px 11px;
  transition: all .1s ease-in-out;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #0058e4;
    border-color: #0058e4;
  }
  &:active {
    transform: scale(.95, .95);
  }
  svg {
    margin: 0 0 4px 7px;
  }
  @media (max-width: 576px) {
    margin: 25px auto 5px auto;
  }
`;