/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MostRecentPostH6 = styled.h6`
  color: #333;
  font-size: 14px;
  font-weight: 900;
  `;


export const LinkTo = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 160px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 25px;
  @media (max-width: 768px) {
    margin-bottom: 0px;
  }
`;

export const BackgroundWrapper = styled.div`
  background: linear-gradient(0deg, rgba(0,0,0,0.8491771708683473) 0%, rgba(0,212,255,0) 100%);
  height: 160px;
  width: 100%;
`;

export const Title = styled.h5`
  color: #fff;
  font-size: 16px;
  font-weight: 900;
  margin: 0;
  position: absolute;
  top: 65px;
  left: 7px;
`;
