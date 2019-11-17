/* eslint-disable import/prefer-default-export */
/* eslint-disable no-tabs */
import styled from 'styled-components';

export const SubNavigatorBar = styled.nav`
  padding: 0 0 3px 0;
  background: #fff;
  margin-top: -1px;
  letter-spacing: 1px;
  border-bottom: 1px solid #0058e4;
  border-top: 1px solid #fff;
  z-index: 999999999;
`;

export const Ul = styled.ul`
  list-style: none;
  font-size: 20px;
  margin-bottom: 0;
  overflow-y: scroll;
	overflow-y: hidden;
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }

  ::-webkit-scrollbar-track {
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    display: none;
  }

  ::-webkit-scrollbar-thumb:hover {
    display: none;
  }
`;

export const Li = styled.li`
  display: inline-block;
  color: #0058e4;
  font-size: 14px;
  @media (max-width: 768px) {
    font-size: 13px;
  }
  @media (max-width: 440px) {
    font-size: 12px;
  }
  @media (max-width: 320px) {
    font-size: 12px;
  }
  @media (max-width: 240px) {
    font-size: 11px;
  }
`;

export const Separator = styled.span`
  font-size: 11px;
  color: #0058e4;
  @media (max-width: 768px) {
    font-size: 11px;
  }
  @media (max-width: 440px) {
    font-size: 10px;
  }
  @media (max-width: 320px) {
    font-size: 10px;
  }
  @media (max-width: 240px) {
    font-size: 9px;
  }
`;
