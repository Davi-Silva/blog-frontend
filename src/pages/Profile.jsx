import React, {
  useContext,
  // useState,
  lazy,
  Suspense,
} from 'react';

import _ from 'lodash';

import {
  FaSpinner,
} from 'react-icons/fa';

import UserProvider from '../contexts/UserProvider';

import ProfilePlaceholder from '../static/img/profile-placeholder.png';

import {
  Cover,
  Wrapper,
  ProfileImage,
  Label,
  DisplayName,
  LoadingProfileImage,
} from '../styled-components/profile.styled.components';

import {
  LoadingAllContent,
} from '../styled-components/podcasts.styled-components';

const Profile = (props) => {
  const userInfo = useContext(UserProvider.context);
  console.log('userInfo profile:', userInfo);
  let UserImageDiv;
  let ProfileCoverImage;
  let displayName = '';

  console.log('props:', props);


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
        <LoadingProfileImage
          style={{
            backgroundColor: '#eee',
          }}
        >
          <LoadingAllContent>
            <FaSpinner />
          </LoadingAllContent>
        </LoadingProfileImage>
      </>
    );
    ProfileCoverImage = (
      <>
        <Cover
          alt="Profile Placeholder"
          style={{
            backgroundColor: '#eee',
          }}
        >
          <LoadingAllContent>
            <FaSpinner />
          </LoadingAllContent>
        </Cover>
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
