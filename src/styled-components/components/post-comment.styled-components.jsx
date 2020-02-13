/* eslint-disable import/prefer-default-export */
/* eslint-disable no-tabs */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { opacity } from '../animations';

export const CommentsWrapper = styled.div`
  margin: 40px 0 30px 0;
`;

export const Wrapper = styled.div`
  margin-bottom: 0px;
  padding: 10px 0;
`;

export const UserInfoWrapper = styled.div`
  height: 50px;
  width: 100%;
  ul {
    display: flex;
    flex-direction: row;
    .img-li {
      width: 35px;
    }
    .user-info {
      margin-left: 10px;
    }
    li {
      list-style: none;
    }
  }
`;

export const LinkToProfile = styled(Link)`
  &:hover {
    color: #333;
    text-decoration: none;
  }
`;

export const AuthorName = styled.b`
  color: #333;
  font-size: 15px;
`;

export const PostedOn = styled.p`
  color: #999;
  font-size: 13px;
  margin-bottom: 0;
  transform: translateY(-5px);
`;

export const AuthorPicture = styled.img`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 37px;
  width: 37px;
  border-radius: 50px;
`;

export const Content = styled.p`
  font-size: 16px;
  line-height: 22px;
`;

export const CommentsTitle = styled.h4`
  font-size: 13px;
  text-transform: uppercase;
  color: #333;
  letter-spacing: 1px;
  font-weight: 900;
`;
