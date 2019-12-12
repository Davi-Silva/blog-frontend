import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.nav`
  /* border: 1px solid rgba(0, 0, 0, 0.1); */
  background: transparent;
  border: none;
  padding: .05rem 1rem;
`;

export const LinkA = styled(Link)`
  color: #999;
  text-decoration: none;
  font-weight: 100;
  font-size: 13px;
  transition: all 0.2s ease-in-out;
  line-height: 35px;
  :hover {
    color: #0058e4;
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

export const LinkAProfile = styled(Link)`
  @media (max-width: 991px) {
    display: table;
    margin: 0 auto;
  }
`;

export const ButtonProfile = styled.button`
  border: none;
  background: transparent;
  margin-top: 7px;
  margin-left: 5px;
  border-radius: 50px;
  &:focus {
    outline: none;
  }
  @media (max-width: 991px) {
    display: table;
    margin: 0 auto;
  }
`;

export const Brand = styled(Link)`
  color: #0058e4;
  font-weight: 900;
  letter-spacing: 1px;
  @media (max-width: 991px) {
    margin-right: 0px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ToggleButton = styled.button`
  color: #0058e4;
  padding: 0;
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
  background-color: #fff;
  border: none;
  color: #0058e4;
  border-radius: 4px;
  padding: 3px 7px;
  margin-top: 13px;
  font-weight: 700;
  font-size: 13px;
  transition: .2s all ease-in-out;
  transition-delay: .1s;
  &:hover {
    background: #edf5ff;
  }
  &:active {
    background: #edf5ff;
  }

`;

export const Button = styled.button`
  background: transparent;
  border: none;
  color: #ff0000;
`;
