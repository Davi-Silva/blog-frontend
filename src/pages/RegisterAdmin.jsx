import React, { useState } from 'react';

import {
  FaUsersCog,
  FaUserPlus,
} from 'react-icons/fa';

import {
  TitleDiv,
  Form,
  Warning,
} from '../styled-components/register-admin.styled-components';

const RegisterAdmin = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState(false);
  const [adminUser, setAdminUser] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [adminPassword2, setAdminPassword2] = useState('');

  const handleRegistration = async () => {

  };

  const LoginSU = async (userInfo) => {
    console.log('userInfo:', userInfo);
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

  const handleAdminPassword2 = (e) => {
    setAdminPassword2(e.target.value);
  };

  const handleLoginSU = async (e) => {
    e.preventDefault();
    const userInfo = {
      user,
      password,
    };
    const res = await LoginSU(userInfo);

    setIsAdmin(res.isAdmin);
    if (!isAdmin) {
      setError(true);
    } else {
      setError(false);
    }
  };


  let registerAdmin;
  let warning;

  if (error) {
    warning = (
      <>
        <br />
        <Warning>
          Not Admin
        </Warning>
      </>
    );
  } else {
    warning = (
      <>

      </>
    );
  }

  if (isAdmin) {
    registerAdmin = (
      <>
        <div className="col-12">
          <TitleDiv>
            <FaUserPlus />
            <h1>Register new admin</h1>
          </TitleDiv>
          <Form method="post" onSubmit={handleLoginSU}>
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
            <br />
            <input
              type="password2"
              name="password2"
              id="password2"
              value={adminPassword2}
              placeholder="Confirm Password"
              onChange={handleAdminPassword2}
            />
            <br />
            <button type="submit">
              Register
            </button>
          </Form>
        </div>
      </>
    );
  } else {
    registerAdmin = (
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
            {warning}

            <button type="submit">
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
          {registerAdmin}
        </div>
      </div>
    </>
  );
};

export default RegisterAdmin;
