/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const CategoriesWrapper = styled.div`
  z-index: 9999999999;
  position: absolute;
  background: #ffcd2b;
  min-width: 100px;
  min-height: 400px;
  color: #000;
  top: 58px;
  left: 12%;
  border-radius: 2px;
  padding: 15px;
  box-shadow: 0px 2px 4px 1px rgba(0,0,0,0.2);
`;

export const EmptyImg = styled.img`
  color: #846913;
  width: 30px;
  height: 30px;
  margin: 0 auto;
  display: table;
`;

export const EmptyCartSpan = styled.span`
  color: #846913;
  font-size: 13px;
  text-align: center;
`;
