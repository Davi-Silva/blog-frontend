import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _, { uniqueId } from 'lodash';
import filesize from 'filesize';

import {
  FaUsersCog,
  FaUserPlus,
} from 'react-icons/fa';

import {
  TitleDiv,
  Form,
  Warning,
} from '../styled-components/register-admin.styled-components';

import api from '../services/api';

import UploadCover from '../components/UI/admin/UploadFieldAdmin';
import FileListCover from '../components/UI/admin/FileListCoverAdmin';

import * as UserAction from '../store/actions/user/user';

const RegisterAdmin = (props) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [isSU, setIsSU] = useState(false);
  const [error, setError] = useState(false);
  const [adminName, setAdminName] = useState('');
  const [adminUser, setAdminUser] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [adminPassword2, setAdminPassword2] = useState('');
  // const [isRegister, setIsRegister] = useState(null);
  const [isAdminUserValid, setIsAdminUserValid] = useState(true);
  const [isPasswordsMatching, setIsPasswordsMatching] = useState(true);
  const [profilePicture, setProfilePicture] = useState([]);
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.user.data);
  const userInfoFetched = useSelector((state) => state.user.fetched);

  const processUploadCover = (uploadedCoversParam) => {
    const data = new FormData();

    data.append('file', uploadedCoversParam.file, uploadedCoversParam.name);

    api.post('/users/upload/profile-picture', data, {
      onUploadProgress: (e) => {
        const progress = parseInt(Math.round((e.loaded * 100) / e.total), 10);
      },
    })
      .then((response) => {
        setProfilePicture(response.data);
      })
      .catch((err) => {
        console.log('err:', err);
      });
  };

  const verifyAdminUser = async () => {
    const response = await fetch(`http://localhost:5000/admin/user/verify/admin/username/${adminUser}`,
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

  const handleName = (e) => {
    setAdminName(e.target.value);
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

    if (adminPassword === adminPassword2
      && (adminPassword !== '' && adminPassword2 !== '')
      && !_.isEmpty(profilePicture)
      && adminName !== ''
      && adminUser !== '') {
      setIsPasswordsMatching(true);
      const res = await verifyAdminUser(adminUser);
      if (!res.valid) {
        setIsAdminUserValid(false);
      } else {
        const adminRegisterInfo = {
          name: adminName,
          user: adminUser,
          password: adminPassword,
        };
        dispatch(UserAction.registerAdminUser(adminRegisterInfo, profilePicture.id));
        if (userInfoFetched) {
          const {
            history,
          } = props;
          history.push('/');
        }
      }
    } else {
      setIsPasswordsMatching(false);
    }
  };

  const handleUploadCover = async (files) => {
    console.log('file Dropzone:', files);
    const uploadedCoversObj = files.map((file) => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));
    uploadedCoversObj.forEach(processUploadCover);
  };

  const handleDeleteProfilePicture = async (id) => {
    await api.delete(`/users/delete/profile-picture/${id}`);
    setProfilePicture({});
  };


  let registerAdmin;

  if (isSU) {
    registerAdmin = (
      <>
        <div className="col-12">
          <TitleDiv>
            <FaUserPlus />
            <h1>Register new admin</h1>
          </TitleDiv>
          <Form method="post" onSubmit={handleRegistration}>
            <UploadCover onUpload={handleUploadCover} />
            {!_.isEmpty(profilePicture) && (
            <FileListCover
              file={profilePicture}
              onDelete={handleDeleteProfilePicture}
            />
            )}
            <input
              type="text"
              name="name"
              id="name"
              value={adminName}
              placeholder="Name"
              autoComplete="off"
              onChange={handleName}
            />
            <br />
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
            {!isPasswordsMatching && (
            <Warning>
              Passwords must match
            </Warning>
            )}
            {!isAdminUserValid && (
            <Warning>
              This username is already taken
            </Warning>
            )}
            <button className="register" type="submit">
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
            {error && (
              <>
                <br />
                <Warning>
                  Not a Super User
                </Warning>
              </>
            )}
            <button className="register" type="submit">
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
