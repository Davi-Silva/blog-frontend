/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

import { rotate } from './animations';

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

export const SocialMediaUser = styled.ul`
  margin: 5px auto;
  display: table;
  li {
    display: inline-block;
    text-align: center;
  }
`;

export const SocialMediaUserLink = styled.a`
  text-decoration: none;
  padding: 4px;
  svg {
    font-size: 22px;
    color: #000;
    transition: .2s all ease-in-out;
    &:hover {
      color: #ffcd2b;
    }
  }
`;


export const Wrapper = styled.ul`
  width: 70%;
  display: table;
  margin: 20px auto 40px auto;
  .user-cover {
    transform: translateY(-40px);
    @media (max-width: 768px) {
      display: table;
      margin: 0 auto;
      transform: translateY(0px);
    }
  }
  .user-info {
    @media (max-width: 991px) {
      width: 66%;
      margin: 0;
      transform: translate(10px, 10px);
    }
    @media (max-width: 768px) {
      transform: translate(0px);
      margin: 0 auto;
      display: table;
    }
  }
  li {
    display: inline-block;
    list-style: none;
    margin: 0 7px;
  }
  @media (max-width: 768px) {
    margin: 30px auto 40px auto;
    width: 100%;
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

export const Quote = styled.p`
  color: #999;
  font-size: 14px;
  height: fit-content;
  max-width: 599px;
  line-height: 18px;
  @media (max-width: 1199px) {
    max-width: 473px;
  }
  /* @media (max-width: 991px) {
    height: 24px;
    max-width: 599px;
    line-height: 18px;
  } */
`;

export const EmptyQuote = styled.p`
  color: #999;
  font-size: 15px;
  height: 24px;
`;

export const FollowButton = styled.button`
  margin-left: 15px;
  display: inline-block;
  background-color: #fff;
  border: 1px solid #00b170;
  border-radius: 50px;
  padding: 3px 7px;
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
  @media (max-width: 768px) {
    margin: -25px auto 0 auto;
    display: table;
    transform: translateY(-39px);
    button {
      transform: translateY(-37px);
    }
  }
`;


export const UnfollowButton = styled.button`
  margin-left: 15px;
  background-color: #00b170;
  border: 1px solid #00b170;
  border-radius: 50px;
  padding: 3px 7px;
  display: inline-block;
  color: #fff;
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

  @media (max-width: 768px) {
    margin: -25px auto 0 auto;
    display: table;
    transform: translateY(-39px);
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

export const LoadingAllContent = styled.div`
  width: 100%;
  svg {
    animation: ${rotate} 1s infinite;
    color: #333;
    font-size: 18px;
    display: table;
    margin: 25px auto;
  }
`;

export const LoadingAllContentFollow = styled.div`
  margin-left: 15px;
  display: inline-block;
  background-color: #fff;
  border: 1px solid #00b170;
  border-radius: 50px;
  padding: 3px 7px;
  color: #00b170;
  font-size: 14px;
  transform: translateY(-10px);
  transition: .2s all ease-in-out;
  @media (max-width: 768px) {
    transform: translateY(-39px);
  }
  svg {
    animation: ${rotate} 1s infinite;
    color: #00b170;
    font-size: 18px;
    display: table;
    margin: 25px auto;
  }
`;

export const LoadingAllContentUnfollow = styled.div`
  margin-left: 15px;
  background-color: #00b170;
  border: 1px solid #00b170;
  border-radius: 50px;
  padding: 3px 7px;
  display: inline-block;
  color: #fff;
  font-size: 14px;
  transform: translateY(-10px);
  transition: .2s all ease-in-out;
  @media (max-width: 768px) {
    transform: translateY(-39px);
  }
  svg {
    animation: ${rotate} 1s infinite;
    color: #fff;
    font-size: 18px;
    display: table;
    margin: 25px auto;
  }
`;

export const FollowUl = styled.ul`
  transform: translateY(40px);
  li {
    display: inline-block;
    margin-right: 15px;
    margin-left: 0px;
  }
  @media (max-width: 768px) {
    margin: -20px auto 10px auto;
    display: table;
  }
`;

export const FollowDivUl = styled.ul`
  li {
    display: block;
    margin-right: 6px;
  }
  .number {
    span {
      @media (max-width: 768px) {
        margin: 0 auto;
        display: table;
      }
    }
  }
`;
