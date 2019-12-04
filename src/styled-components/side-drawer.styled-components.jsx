/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { showSideDrawer } from './animations';

export const BackgroundDrawer = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, .2);
  z-index: 9999999999;
  height: 100%;
  width: 100%;
  display: none;
`;

export const Drawer = styled.nav`
  height: 100%;
  width: 250px;
  background: #fff;
  position: fixed;
  z-index: 99999999999;
  padding: 15px;
  transform: translateX(-250px);
  .closeDrawer {
    position: absolute;
    top: 15px;
    right: 15px;
    transform: rotate(45deg);
    color: #999;
    transition: all .2s ease-in-out;
    &:hover {
      transform: scale(1.1, 1.1) rotate(45deg);
      color: #0058e4;
    }
    &:active {
      transform: scale(0.95, 0.95) rotate(45deg);
    }
  }
  /* @media (max-width: 991px) {
    width: 350px;
  }
  @media (max-width: 768px) {
    width: 300px;
  }
  @media (max-width: 600px) {
    width: 275px;
  } */
`;

export const ProfileImage = styled.img`
  height: 55px;
  width: 55px;
  border-radius: 50px;
`;

export const ProfileName = styled.span`
  color: #333;
  font-size: 16px;
  letter-spacing: 1px;
  margin-left: 11px;
`;

export const SideDrawerUl = styled.ul`
  width: 100%;
  margin: 10px 0;
`;

export const SideDrawerLi = styled.li`
  margin: 3px 0;
  list-style: none;
`;

export const SideDrawerLinkTo = styled(Link)`
  color: #999;
  font-size: 13px;
  transition: all .3s ease-in-out;

  &:hover {
    color: #0058e4;
    text-decoration: none;
  }
`;

export const Button = styled.button`
  border: none;
  background: #ff0000;
`;
