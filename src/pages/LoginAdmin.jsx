import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FaUsersCog,
  FaUser,
} from 'react-icons/fa';
import _ from 'lodash';


import {
  TitleDiv,
  Form,
  Warning,
} from '../styled-components/login-admin.styled-components';

import * as UserAction from '../store/actions/user/user';

const LoginAdmin = (props) => {
  const userInfo = useSelector((state) => state.user);

  const {
    history,
  } = props;

  if (!_.isEmpty(userInfo.data)) {
    history.push('/');
  }


  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [isSU, setIsSU] = useState(false);
  const [error, setError] = useState(false);
  const [adminUser, setAdminUser] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [isCredentialIncorrect, setIsCredentialIncorrect] = useState(false);
  const [areFieldsFilled, setAreFieldsFilled] = useState(true);

  const dispatch = useDispatch();

  const handleLoginAdmin = async (e) => {
    e.preventDefault();
    // setIsCredentialIncorrect(false);
    dispatch(UserAction.loginAdminUser(adminUser, adminPassword));
    if (userInfo.fetched && !_.isEmpty(userInfo.data)) {
      history.push('/');
    }
  };


  const LoginSU = async (userInfo) => {
    const response = await fetch('http://localhost:5000/admin/user/verify/su',
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });
    const data = await response.json();
    return data;
  };

  const handleUser = (e) => {
    setUser(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleAdminUser = (e) => {
    setAdminUser(e.target.value);
  };

  const handleAdminPassword = (e) => {
    setAdminPassword(e.target.value);
  };


  const handleLoginSU = async (e) => {
    e.preventDefault();
    const userInfo = {
      user,
      password,
    };
    const res = await LoginSU(userInfo);
    setIsSU(res.isSU);
    if (!isSU) {
      setError(true);
    } else {
      setError(false);
    }
  };

  let loginAdmin;


  if (isSU) {
    loginAdmin = (
      <>
        <div className="col-12">
          <TitleDiv>
            <FaUser />
            <h1>Login Admin</h1>
          </TitleDiv>
          <Form method="post" onSubmit={handleLoginAdmin}>
            <input
              type="text"
              name="user"
              id="user"
              value={adminUser}
              placeholder="User"
              autoComplete="off"
              onChange={handleAdminUser}
            />
            <br />
            <input
              type="password"
              name="password"
              id="password"
              value={adminPassword}
              placeholder="Password"
              onChange={handleAdminPassword}
            />
            {isCredentialIncorrect && (
            <Warning>
              Invalid credentials
            </Warning>
            )}
            <button className="login" type="submit">
              Login
            </button>
          </Form>
        </div>
      </>
    );
  } else {
    loginAdmin = (
      <>
        <div className="col-12">
          <TitleDiv>
            <FaUsersCog />
            <h1>Super User</h1>
          </TitleDiv>
          <Form method="post" onSubmit={handleLoginSU}>
            <input
              type="text"
              name="user"
              id="user"
              value={user}
              placeholder="User"
              autoComplete="off"
              onChange={handleUser}
            />
            <br />
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={handlePassword}
            />
            {error && (
              <>
                <br />
                <Warning>
                  Not a Super User
                </Warning>
              </>
            )}
            <button className="login" type="submit">
              Login
            </button>
          </Form>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row">
          {loginAdmin}
        </div>
      </div>
    </>
  );
};

export default LoginAdmin;
