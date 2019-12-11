/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  z-index: 9999999999;
  position: absolute;
  background: #fff;
  width: 130px;
  color: #333;
  right: 90px;
  top: 60px;
  border-radius: 2px;
  box-shadow: 0px 2px 4px rgba(0 ,0 ,0 , 0.2);
  hr {
    margin: 0;
  }
`;

export const WrapperArrow = styled.div`
  display: table;
  background: #fff;
  width: 15px;
  z-index: 99999999999;
  height: 15px;
  top: 52px;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
  right: 107px;
  position: absolute;
  border-top-left-radius: 100px;
  -webkit-transform: rotate(-135deg);
  -ms-transform: rotate(-135deg);
  transform: rotate(-135deg);
`;

export const ProfileDiv = styled.div`
  color: #333;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  font-size: 13px;
  transition: .2s all ease-in-out;
  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
`;

export const Profile = styled(Link)`
  /* width: 100%; */
  margin: 0px auto;
  display: table;
  padding: 5px 0;
  color: #333;
  &:hover {
    text-decoration: none;
    color: #333;
  }
  p {
    margin: 0;
  }
`;

export const MenuOpitionUl = styled.ul`
  height: 100px;
  display: table;
  margin: 5px auto;
`;

export const MenuOpitionLi = styled.li`
  height: 100px;
  display: table;
  margin: 5px auto;
`;
