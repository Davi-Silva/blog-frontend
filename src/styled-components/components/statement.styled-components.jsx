import styled from 'styled-components';

export const StatementDiv = styled.div`
  width: 100%;
  /* height: 200px; */
  background: #f2f3f5;
  @media (max-width: 576px) {
    padding: 20px 0;
  }
`;

export const StatementWrapper = styled.div`
  background: #fff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 150px;
  display: table;
  margin: 25px auto;
  /* padding: 10px; */
  @media (max-width: 576px) {
    margin: 5px auto;
  }
`;

export const Ul = styled.ul`
  width: 100%;
  height: 100%;
  padding: 15px;
  margin-bottom: 0;
`;

export const Li = styled.li`
  display: inline-block;
  height: 100%;
`;

export const StatementTitle = styled.h5`
  display: table;
  text-align: center;
  font-size: 20px;
  color: #333;
`;
