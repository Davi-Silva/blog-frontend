/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Cover = styled.div`
  width: 100%;
  height: 180px;
  background-size: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 565px) {
    height: 150px;
  }
  @media (max-width: 440px) {
    height: 140px;
  }
  @media (max-width: 385px) {
    height: 130px;
  }
  @media (max-width: 340px) {
    height: 120px;
  }
`;

export const Wrapper = styled.div`
  margin-top: 20px;
  @media (max-width: 767px) {
    margin-top: 90px;
  }
`;

export const ProfileImage = styled.img`
  height: 170px;
  width: 170px;
  border-radius: 80px;
  border: 3px solid #fff;
  position: absolute;
  top: -80px;
  @media (max-width: 565px) {
    width: 150px;
    height: 150px;
    top: -70px;
  }
  @media (max-width: 440px) {
    width: 140px;
    height: 140px;
    top: -62px;
  }
  @media (max-width: 385px) {
    width: 130px;
    height: 130px;
    top: -57px;
  }
  @media (max-width: 340px) {
    width: 120px;
    height: 120px;
    top: -54px;
  }
`;

export const Label = styled.h1`
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #333;
`;

export const DisplayName = styled.h1`
  font-size: 20px;
  color: #333;
  font-weight: 700;
  letter-spacing: 1px;
`;
