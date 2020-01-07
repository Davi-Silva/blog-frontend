/* eslint-disable no-tabs */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TagsUl = styled.ul`
font-size: 16px;
height: 50px;
padding-top: 5px;
white-space: nowrap;
display: flex;
width: 100%;
overflow-x: scroll;
overflow-y: hidden;
scroll-snap-type: x mandatory;
-webkit-overflow-scrolling: touch;
margin-bottom: 0;
::-webkit-scrollbar {
  display: none;
}
`;

export const TagLi = styled.li`
display: inline-block;
scroll-snap-align: start;
`;

export const Tag = styled(Link)`
padding: 6px 13px;
font-size: 16px;
background: #eaeaea;
border-radius: 16px;
color: #333;
display: inline;
padding: 5px 10px;
font-weight: 500;
margin-right: 10px;
&:hover {
  text-decoration: none;
  color: #333;
}
`;
