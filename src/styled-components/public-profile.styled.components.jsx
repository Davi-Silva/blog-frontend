/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Cover = styled.div`
  width: 100%;
  height: 180px;
  background-size: no-repeat;
  background-size: cover;
  background-position: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
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

export const Wrapper = styled.ul`
  width: 70%;
  display: table;
  margin: 20px auto 0 auto;
  li {
    display: inline-block;
    list-style: none;
    margin: 0 7px;
    @media (max-width: 767px) {
      width: 100%;
      margin: 0;
    }
  }
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

export const UserInfoDiv = styled.div`
  transform: translateY(33px);
  @media (max-width: 768px) {
    transform: translateY(0px);
    margin: 0 auto;
    display: table;
  }
  p {
    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;

export const ProfileImage = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 80px;
  @media (max-width: 768px) {
    display: table;
    margin: 0 auto;
  }
  @media (max-width: 565px) {
    width: 150px;
    height: 150px;
  }
  @media (max-width: 440px) {
    width: 140px;
    height: 140px;
  }
  @media (max-width: 385px) {
    width: 130px;
    height: 130px;
  }
  @media (max-width: 340px) {
    width: 120px;
    height: 120px;
  }
`;

export const DisplayName = styled.span`
  font-size: 22px;
  color: #333;
  font-weight: 700;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    display: table;
    margin: 34px auto 0 auto;
  }
`;

export const FollowButton = styled.span`
  margin-left: 15px;
  button {
    background-color: #fff;
    border: 1px solid #00b170;
    border-radius: 3px;
    padding: 1px 5px;
    color: #00b170;
    font-size: 14px;
    transform: translateY(-10px);
    transition: .2s all ease-in-out;
    &:focus {
      outline: none;
    }
    &:hover {
      color: #fff;
      background-color: #00b170;
    }
    &:active {
      background-color: #00945e;
    }
  }
  @media (max-width: 768px) {
    margin: -25px auto 0 auto;
    display: table;
    button {
      transform: translateY(-37px);
    }
  }
`;

export const MemberSince = styled.span`
  color: #333;
  font-size: 14px;
  font-weight: 900;
  @media (max-width: 768px) {
    display: table;
    margin: 0 auto;
  }
`;
