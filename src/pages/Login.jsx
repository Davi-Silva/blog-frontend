
import React, { useState, useContext } from 'react';
import _ from 'lodash';

import UserProvider from '../contexts/UserProvider';

import {
  Header,
  Input,
  Button,
  P,
  A,
} from '../styled-components/forms.styled-components';

import LoginButton from '../components/UI/buttons/ThirdPartyLoginButton.component';

const Login = (props) => {
  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
  });

  const userInfo = useContext(UserProvider.context);
  if (!_.isEmpty(userInfo)) {
    const {
      history,
    } = props;
    history.push('/profile');
  }

  const onChangeEmail = (e) => {
    setLoginState({
      email: e.target.value,
    });
  };

  const onChangePassword = (e) => {
    setLoginState({
      password: e.target.value,
    });
  };

  const loginUser = async (loginInfo) => {
    const response = await fetch(
      'http://localhost:5000/users/login',
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
    const data = await response.json();
    return data;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginState;

    const loginInfo = {
      email,
      password,
    };

    loginUser(loginInfo)
      .then((res) => {
        console.log(res.json());
      })
      .catch((err) => console.log(err));
  };

  const { email, password } = loginState;
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
            <form onSubmit={onSubmit}>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={onChangeEmail}
              />

              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={onChangePassword}
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
            {/* <li
              style={{
                listStyle: 'none',
                margin: '5px auto',
              }}
            >
              <LoginButton
                icon="google"
                backgroundColor="#4285f4"
                endpoint="http://localhost:5000/auth/google"
                providerName="Google"
              />
            </li> */}
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
            {/* <li
              style={{
                listStyle: 'none',
                margin: '5px auto',
              }}
            >
              <LoginButton
                icon="facebook"
                backgroundColor="#3a5797"
                endpoint="http://localhost:5000/auth/facebook"
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
                endpoint="http://localhost:5000/auth/instagram"
                providerName="Instagram"
              />
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
