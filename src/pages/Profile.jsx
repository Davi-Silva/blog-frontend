import React, {
  useContext,
  // useState,
} from 'react';
import _ from 'lodash';
// import {
//   FaGithub,
// } from 'react-icons/fa';
import UserProvider from '../contexts/UserProvider';


import ProfilePlaceholder from '../static/img/profile-placeholder.png';

import {
  Cover,
  Wrapper,
  ProfileImage,
  Label,
  DisplayName,
} from '../styled-components/profile.styled.components';

const Profile = () => {
  const userInfo = useContext(UserProvider.context);
  console.log('userInfo profile:', userInfo);
  let UserImageDiv;
  let ProfileCoverImage;
  let displayName = '';


  if (!_.isEmpty(userInfo)) {
    const {
      name,
      profileImage,
    } = userInfo[0];
    displayName = name;
    UserImageDiv = (
      <>
        <ProfileImage
          src={profileImage}
          alt="Profile Placeholder"
        />
      </>
    );
    ProfileCoverImage = (
      <>
        <Cover
          alt="Profile Placeholder"
          style={{
            backgroundImage: `url(${profileImage})`,
          }}
        />
      </>
    );
  } else {
    UserImageDiv = (
      <>
        <ProfileImage
          src={ProfilePlaceholder}
          alt="Profile Placeholder"
        />
      </>
    );
    ProfileCoverImage = (
      <>
        <Cover
          alt="Profile Placeholder"
          style={{
            backgroundImage: `url(${ProfilePlaceholder})`,
          }}
        />
      </>
    );
  }


  return (
    <>
      {ProfileCoverImage}
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
            {UserImageDiv}
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
            <Wrapper>
              <Label>
            Name
              </Label>
              <DisplayName>
                {displayName}
              </DisplayName>
              {/* <Label>
            Github Profile
              </Label>
              <DisplayName>
                {profileUrl}
              </DisplayName> */}
            </Wrapper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
