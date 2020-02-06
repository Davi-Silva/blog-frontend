import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.nav`
  background: #ffcd2b;
  border: none;
  padding: .05rem 1rem;
  height: 50px;
  border-bottom: 1px solid #000;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  .clicked {
    background: #e0b528;
  }
`;

export const Ul = styled.ul`
  .go-home {
    transform: translateY(-3px);
  }
  .nav-item {
    transform: translateY(-4px);
  }
  li {
    margin: 0 3px;
    height: 26px;
  }
  .profile-li {
    height: 35px;
    transform: translateX(3px);
  }
  .nav-cart {
    padding: 6px 7px!important;
    transform: translateY(-3px);
    display: block;
  }
`;


export const LinkA = styled(Link)`
  color: #000;
  text-decoration: none;
  font-weight: 100;
  font-size: 13px;
  transition: all 0.2s ease-in-out;
  line-height: 35px;
  margin-left: 5px;
  :hover {
    color: #000;
  }
  p {
    line-height: 14px;
    margin-bottom: 0;
    text-align: center;
    transform: translateY(3px);
  }
  @media (max-width: 991px) {
    display: table;
    margin: 0 auto;
  }
  @media (max-width: 320px) {
    font-size: 12px;
  }
  @media (max-width: 240px) {
    font-size: 11px;
  }
`;

export const LinkIcon = styled.button`
  color: #000;
  text-decoration: none;
  font-weight: 100;
  background: transparent;
  margin: 10px 15px 0px 6px;
  padding: 6px 9px 8px 9px;
  border-radius: 3px;
  border: none;
  transition: all 0.15s ease-in-out;
  line-height: 18px;
  .nav-cart {
    padding: 6px;
  }
  :hover {
    color: #000;
  }
  &:focus {
    outline: none;
    color: #000;
  }
  @media (max-width: 320px) {
    font-size: 12px;
  }
  @media (max-width: 240px) {
    font-size: 11px;
  }
`;

export const LinkIconGrid = styled.button`
  color: #000;
  text-decoration: none;
  font-weight: 100;
  background: transparent;
  margin-left: 15px;
  margin-right: 6px;
  padding: 6px 9px 8px 9px;
  border-radius: 3px;
  border: none;
  transition: all 0.15s ease-in-out;
  line-height: 18px;
  :hover {
    color: #000;
  }
  &:focus {
    outline: none;
    color: #000;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LinkAProfile = styled(Link)`
  @media (max-width: 991px) {
    display: table;
    margin: 0 auto;
  }
`;

export const ButtonProfile = styled.button`
  border: none;
  background: transparent;
  border-radius: 50px;
  &:focus {
    outline: none;
  }
`;

export const Brand = styled(Link)`
  color: #000;
  font-weight: 900;
  letter-spacing: 1px;
  font-size: 14px;
  &:hover {
    color: #000;
  }
  p {
    margin-bottom: 0;
    line-height: 15px;
    span {
      font-size: 16px;
      position: relative;
      float: right;
    }
  }
  @media (max-width: 991px) {
    margin-right: 0px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    padding-top: 7px;
    padding-bottom: 7px;
    p {
      line-height: 13px;
      span {
        font-size: 16px;
      }
    }
  }
  @media (max-width: 440px) {
    font-size: 13px;
    p {
      span {
        font-size: 15px;
      }
    }
  }
`;

export const ToggleButton = styled.button`
  color: #000;
  padding: 0;
  background: transparent;
  border: none;
  :focus {
    outline: none;
  }
  @media (max-width: 768px) {
    font-size: 21px;
  }
  @media (max-width: 440px) {
    font-size: 19px;
  }
`;

export const SignUp = styled(Link)`
  background-color: #000;
  border: none;
  margin: 13px 0 0 10px;
  color: #ffcd2b;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 3px 7px;
  font-weight: 700;
  transform: translateY(-7px);
  display: block;
  font-size: 13px;
  transition: .2s all ease-in-out;
  transition-delay: .1s;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.2);
  &:hover {
    color: #000;
    background-color: #ffcd2b;
    border: 1px solid #000;
    text-decoration: none;
  }
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  color: #ff0000;
`;

export const Separator = styled.div`
  background: #000;
  height: 60%;
  width: 1px;
  display: block;
  transform: translateY(-1px);
`;
