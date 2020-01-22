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
  const [isSU, setIsSU] = useState(false);
  const [error, setError] = useState(false);
  const [adminUser, setAdminUser] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [adminPassword2, setAdminPassword2] = useState('');
  // const [isRegister, setIsRegister] = useState(null);
  const [isAdminUserValid, setIsAdminUserValid] = useState(true);
  const [isPasswordsMatching, setIsPasswordsMatching] = useState(true);

  const RegisterAdminUser = async (adminRegisterInfo) => {
    console.log('userInfo:', adminRegisterInfo);
    const response = await fetch('http://52.70.19.141:5000/admin/user/register/admin',
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adminRegisterInfo),
      });
    const data = await response.json();
    return data;
  };

  const verifyAdminUser = async () => {
    const response = await fetch(`http://52.70.19.141:5000/admin/user/verify/admin/username/${adminUser}`,
      {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    const data = await response.json();
    return data;
  };

  const LoginSU = async (userInfo) => {
    const response = await fetch('http://52.70.19.141:5000/admin/user/verify/su',
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
    setIsSU(res.isSU);
    if (!isSU) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (adminPassword === adminPassword2 && (adminPassword !== '' && adminPassword2 !== '')) {
      setIsPasswordsMatching(true);
      const res = await verifyAdminUser(adminUser);
      if (!res.valid) {
        setIsAdminUserValid(false);
      } else {
        const adminRegisterInfo = {
          user: adminUser,
          password: adminPassword,
        };
        const resRegistration = await RegisterAdminUser(adminRegisterInfo);
      }
    } else {
      setIsPasswordsMatching(false);
    }
  };


  let registerAdmin;
  let notSUWarning;
  let passwordsDoesntMatch;
  let usernameAlreadyTaken;

  if (error) {
    notSUWarning = (
      <>
        <br />
        <Warning>
          Not a Super User
        </Warning>
      </>
    );
  } else {
    notSUWarning = (
      <>

      </>
    );
  }

  if (isPasswordsMatching) {
    passwordsDoesntMatch = (
      <>

      </>
    );
  } else {
    passwordsDoesntMatch = (
      <>
        <Warning>
          Passwords must match
        </Warning>
      </>
    );
  }


  if (isAdminUserValid) {
    usernameAlreadyTaken = (
      <>

      </>
    );
  } else {
    usernameAlreadyTaken = (
      <>
        <Warning>
          This username is already taken
        </Warning>
      </>
    );
  }

  if (isSU) {
    registerAdmin = (
      <>
        <div className="col-12">
          <TitleDiv>
            <FaUserPlus />
            <h1>Register new admin</h1>
          </TitleDiv>
          <Form method="post" onSubmit={handleRegistration}>
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
              type="password"
              name="password2"
              id="password2"
              value={adminPassword2}
              placeholder="Confirm Password"
              onChange={handleAdminPassword2}
            />
            {passwordsDoesntMatch}
            {usernameAlreadyTaken}
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
            {notSUWarning}
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
