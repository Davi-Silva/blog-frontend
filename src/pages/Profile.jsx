import React, {
  useContext,
  // useState,
} from 'react';
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
  console.log('UserInfo:', userInfo);
  let profielImageUrl;
  let UserImageDiv;
  const {
    photos,
    displayName,
    profileUrl,
  } = userInfo;
  if (userInfo.photos !== undefined) {
    profielImageUrl = photos[0].value;
    UserImageDiv = (
      <>
        <ProfileImage
          src={profielImageUrl}
          alt="Profile Placeholder"
        />
      </>
    );
  } else {
    profielImageUrl = ProfilePlaceholder;
    UserImageDiv = (
      <>
        <ProfileImage
          src={profielImageUrl}
          alt="Profile Placeholder"
        />
      </>
    );
  }

  return (
  // <div className="page">
  //   <p className="page-title" style={{ textAlign: 'center' }}>
  //     {text}
  //   </p>

  //   <Col className="col-12" style={{ verticalAlign: 'top' }}>
  //     <DataTags
  //       options={options}
  //       onClick={(option) => setSelected(option)}
  //       selected={selected}
  //     />
  //   </Col>

  //   <Col className="col-12">
  //     <Terminal userData={userData} selected={selected} />
  //   </Col>
  //   <div style={{ marginBottom: 20 }} />
  // </div>

    <>
      <Cover
        style={{
          backgroundImage: `url(${profielImageUrl})`,
        }}
      />
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
              <Label>
            Github Profile
              </Label>
              <DisplayName>
                {profileUrl}
              </DisplayName>
            </Wrapper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
