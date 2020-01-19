import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  FaGithub,
  FaFacebook,
  FaGoogle,
  FaInstagram,
} from 'react-icons/fa';

import {
  SocialMediaLoginLink,
} from '../../../styled-components/third-party-login-button.styled-components';

import * as UserActions from '../../../store/actions/user/user';

const LoginButton = (props) => {
  const {
    icon,
    backgroundColor,
    endpoint,
    providerName,
  } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log('clicked');
    dispatch(UserActions.loginUserProvider(endpoint));
  };


  let socialIcon;
  if (icon === 'github') {
    socialIcon = (
      <>
        <FaGithub />
      </>
    );
  } else if (icon === 'facebook') {
    socialIcon = (
      <>
        <FaFacebook />
      </>
    );
  } else if (icon === 'instagram') {
    socialIcon = (
      <>
        <FaInstagram />
      </>
    );
  } else if (icon === 'google') {
    socialIcon = (
      <>
        <FaGoogle />
      </>
    );
  }
  return (
    <>
      <SocialMediaLoginLink
        // onClick={handleClick}
        href={endpoint}
        style={{
          backgroundColor: `${backgroundColor}`,
        }}
      >

        <ul>
          <li
            style={{
              marginRight: '5px',
            }}
          >
            {socialIcon}
          </li>
          <li
            style={{
              marginLeft: '5px',
            }}
          >
            <span style={{ textDecoration: 'none' }}>
                Login with
              {' '}
              {providerName}
            </span>
          </li>
        </ul>


      </SocialMediaLoginLink>
    </>
  );
};

export default LoginButton;
