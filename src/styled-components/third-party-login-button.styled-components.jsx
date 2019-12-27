/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const SocialMediaLoginLink = styled.a`
  color: #fff;
  padding: 12px 20px;
  display: inline-block;
  width: 100%;
  text-align: center;
  border-radius: 3px;
  font-size: 14px;
  &:hover {
    text-decoration: none;
    color: #fff;
  }
  ul {
    display: table;
    margin: 0 auto;
    li {
      list-style: none;
      display: inline;
      svg {
        font-size: 17px;
      }
    }
  }
`;
