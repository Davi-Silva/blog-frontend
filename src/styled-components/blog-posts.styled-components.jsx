/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

export const Cover = styled.img`
  border-radius: 10px;
`;

export const PublishedOn = styled.b`
  color: #333;
  font-size: 12px;
`;

export const Title = styled.h5`
  color: #333;
  font-size: 16px;
  font-weight: 900;
  margin: 0;
`;

export const ShortDescription = styled.p`
  color: #999;
  font-size: 14px;
`;
