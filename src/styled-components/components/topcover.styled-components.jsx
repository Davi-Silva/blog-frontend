import styled from 'styled-components';

export const TopCoverDiv = styled.div`
  width: 100%;
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const TopCoverContent = styled.div`
  margin: 150px 0;
`;

export const TopCoverTitle = styled.h1`
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 1px;
  color: #fff;
`;

export const TopCoverP = styled.p`
  font-size: 18px;
  letter-spacing: 1px;
  color: #fff;
`;

export const TopCoverSearchInput = styled.span`
  background: #fff;
  color: #999;
  padding: 10px;
  font-size: 16px;
  border-radius: 2px;
  border: none;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  input {
    border: none;
    &:focus {
      outline: none;
      color: #999;
    }
    &::placeholder {
      color: #999;
      font-size: 16px;
      font-weight: 200px;
    }
  }
  svg {
    margin: 0 4px 0px 18px;
  }
`;
