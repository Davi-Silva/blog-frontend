import React, { Component } from 'react';

import { FaEnvelope } from 'react-icons/fa';

import {
  Wrapper,
  Title,
  Email,
  // Separator,
  Icon,
} from '../../../styled-components/newsletter-side.styled-components';

export default class NewsletterSide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isEmailValid: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    // this.SignupNewletter = this.SignupNewletter.bind(this);
    // this.ValidateEmail = this.ValidateEmail.bind(this);
  }

  onChangeEmail(e) {
    this.setStateAsync({
      email: e.target.value,
    });
    // setTimeout(() => {
    //   this.ValidateEmail();
    // }, 0);
  }

  onSubmit(e) {
    const { isEmailValid } = this.state;
    e.preventDefault();
    if (isEmailValid) {
    } else {
    }
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }


  // ValidateEmail() {
  //   const { email } = this.state;
  //   const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(email);
  // }


  // SignupNewletter() {

  // }


  render() {
    const { email } = this.state;
    return (
      <>
        <Wrapper>
          <Title>Sign up for crypto news</Title>
          <form method="POST" onSubmit={this.onSubmit}>
            <Email
              placeholder="Email"
              onChange={this.onChangeEmail}
              value={email}
            />
            <Icon>
              <FaEnvelope />
            </Icon>
          </form>
        </Wrapper>
      </>
    );
  }
}
