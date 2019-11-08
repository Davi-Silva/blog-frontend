import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.nav`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: .05rem 1rem;
`;

export const LinkA = styled(Link)`
  color: #999;
  text-decoration: none;
  font-weight: 100;
  font-size: 13px;
  letter-spacing: 1px;
  transition: all 0.2s ease-in-out;
  :hover {
    color: #0058e4;
  }
  @media (max-width: 991px) {
    display: table;
    margin: 0 auto;
  }

`;

export const Brand = styled(Link)`
  color: #0058e4;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const ToggleButton = styled.button`
  color: #0058e4;
`;
