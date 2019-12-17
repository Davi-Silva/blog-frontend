import styled from 'styled-components';

export const UnderTopCoverStrapDiv = styled.div`
  width: 100%;
  height: 90px;
  background: linear-gradient(to right, #0058e4 0%, #0058e4 100%);
  padding: 15px;
  ul {
    li {
      display: inline-block;
      img {
        height: 55px;
        width: 55px;
      }
      h6 {
        text-align: center;
        color: #fff;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
