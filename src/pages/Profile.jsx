import React, {
// useState,
} from 'react';

import { useSelector } from 'react-redux';

import _ from 'lodash';

import {
  Cover,
  Wrapper,
  ProfileImage,
  Label,
  DisplayName,
  LoadingProfileImage,
} from '../styled-components/profile.styled.components';

const Profile = (props) => {
  const userInfo = useSelector((state) => state.user.userInfo);
  console.log('userInfo:', userInfo);
  let UserImageDiv;
  let ProfileCoverImage;
  let displayName = '';
  if (!_.isEmpty(userInfo)) {
    const { name, profileImage } = userInfo[0];
    displayName = name;
    UserImageDiv = (
      <>
        <ProfileImage src={profileImage.url} alt="Profile Placeholder" />
      </>
    );
    ProfileCoverImage = (
      <>
        <Cover
          alt="Profile Placeholder"
          style={{
            backgroundImage: `url(${profileImage.url})`,
          }}
        />
      </>
    );
  } else {
    UserImageDiv = (
      <>
        <LoadingProfileImage
          style={{
            backgroundColor: '#eee',
          }}
        />
      </>
    );
    ProfileCoverImage = (
      <>
        <Cover
          alt="Profile Placeholder"
          style={{
            backgroundColor: '#eee',
          }}
        />
      </>
    );
    const {
      history,
    } = props;
    history.push('/login');
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
              <Label>Name</Label>
              <DisplayName>{displayName}</DisplayName>
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
