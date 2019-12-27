import React, { Component } from 'react';
import {
  FaGithub,
  FaFacebook,
  FaGoogle,
  FaInstagram,
} from 'react-icons/fa';

import {
  SocialMediaLoginLink,
} from '../../../styled-components/third-party-login-button.styled-components';

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);

    this.state = {
      icon: '',
      backgroundColor: '',
      providerName: '',
      endpoint: '',
    };
  }

  componentDidMount() {
    const {
      icon,
      backgroundColor,
      providerName,
      endpoint,
    } = this.props;
    this.setState({
      icon,
      backgroundColor,
      providerName,
      endpoint,
    });
  }


  render() {
    const {
      endpoint,
      backgroundColor,
      icon,
      providerName,
    } = this.state;

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
  }
}
