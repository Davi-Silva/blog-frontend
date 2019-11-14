import React, { Component } from 'react';

import {
  Header,
  Input,
  Button,
  P,
  A,
} from '../styled-components/forms.styled-components';

import LoginButton from '../components/UI/buttons/ThirdPartyLoginButton.component';

class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.loginUser = this.loginUser.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;

    const loginInfo = {
      email,
      password,
    };

    this.loginUser(loginInfo)
      .then((res) => {
        console.log(res.json());
      })
      .catch((err) => console.log(err));
  }

  async loginUser(loginInfo) {
    // let response = await fetch("https://cryptic-activist-backend.herokuapp.com/users/login", {
    this.response = await fetch(
      'https://cryptic-activist-backend.herokuapp.com/users/login',
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInfo),
      },
    );
    const data = await this.response.json();
    return data;
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="container">
        <div className="row m-5">
          <div className="col-lg-4 col-md-6 col-sm-8 col-12 m-auto">
            <div className="form-container">
              <Header className="text-center mb-3">
                <i className="fas fa-sign-in-alt" />
                {' '}
                Login
              </Header>
              <form onSubmit={this.onSubmit}>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={this.onChangeEmail}
                />

                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.onChangePassword}
                />
                <Button type="submit">Login</Button>
              </form>
              <P className="mt-1">
                No Account?
                {' '}
                <A to="/register">Register</A>
              </P>
            </div>
            <ul className="m-auto">
              <li
                style={{
                  listStyle: 'none',
                  margin: '5px auto',
                }}
              >
                <LoginButton
                  icon="google"
                  backgroundColor="#4285f4"
                  endpoint="https://cryptic-activist-backend.herokuapp.com/auth/google"
                  providerName="Google"
                />
              </li>
              <li
                style={{
                  listStyle: 'none',
                  margin: '5px auto',
                }}
              >
                <LoginButton
                  icon="github"
                  backgroundColor="#333"
                  endpoint="https://cryptic-activist-backend.herokuapp.com/auth/github"
                  providerName="Github"
                />
              </li>
              <li
                style={{
                  listStyle: 'none',
                  margin: '5px auto',
                }}
              >
                <LoginButton
                  icon="facebook"
                  backgroundColor="#3a5797"
                  endpoint="https://cryptic-activist-backend.herokuapp.com/auth/facebook"
                  providerName="Facebook"
                />
              </li>
              <li
                style={{
                  listStyle: 'none',
                  margin: '5px auto',
                }}
              >
                <LoginButton
                  icon="instagram"
                  backgroundColor="#4285f4"
                  endpoint="https://cryptic-activist-backend.herokuapp.com/auth/instagram"
                  providerName="Instagram"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
