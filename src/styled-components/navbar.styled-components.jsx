import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.nav`
  /* border: 1px solid rgba(0, 0, 0, 0.1); */
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

export const Brand = styled(Link)`
  color: #0058e4;
  font-weight: 900;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 17px;
  }
  @media (max-width: 440px) {
    font-size: 16px;
  }
  @media (max-width: 320px) {
    font-size: 15px;
  }
  @media (max-width: 240px) {
    font-size: 13px;
  }
`;

export const ToggleButton = styled.button`
  color: #0058e4;
  :focus {
    outline: none;
  }
  @media (max-width: 768px) {
    font-size: 17px;
  }
  @media (max-width: 440px) {
    font-size: 16px;
  }
  @media (max-width: 320px) {
    font-size: 15px;
  }
  @media (max-width: 240px) {
    font-size: 13px;
  }
`;

export const SignUp = styled(Link)`
  background-color: #fff;
  border: 1px solid #0058e4;
  color: #0058e4;
  border-radius: 50px;
  padding: 3px 7px;
  margin-top: 4px;
  font-weight: 100;
  font-size: 13px;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  color: #ff0000;
`;
