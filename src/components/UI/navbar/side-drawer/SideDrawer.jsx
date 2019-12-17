
import React, { useContext } from 'react';
import _ from 'lodash';

import {
  FaPlus,
  // FaUser,
} from 'react-icons/fa';
import UserProvider from '../../../../contexts/UserProvider';

import {
  BackgroundDrawer,
  Drawer,
  ProfileImage,
  ProfileName,
  SideDrawerUl,
  SideDrawerLi,
  SideDrawerLinkTo,
  SideDrawerLinkToAdmin,
  Button,
} from '../../../../styled-components/side-drawer.styled-components';

import ProfilePlaceholder from '../../../../static/img/profile-placeholder.png';

const SideDrawer = (props) => {
  const userInfo = useContext(UserProvider.context);

  const handleClose = () => {
    const {
      HandleSideDrawer,
    } = props;
    const closeDrawer = HandleSideDrawer;
    closeDrawer();
  };

  let ProfileImageDiv;
  let profileName;

  if (!_.isEmpty(userInfo)) {
    const {
      name: displayName,
      profileImage,
    } = userInfo[0];
    ProfileImageDiv = (
      <>
        <ProfileImage
          onClick={handleClose}
          src={profileImage}
        />
      </>
    );
    profileName = (
      <>
        <ProfileName>
          {displayName}
        </ProfileName>
      </>
    );
  } else {
    ProfileImageDiv = (
      <>
        <ProfileImage
          src={ProfilePlaceholder}
        />
      </>
    );
    profileName = (
      <>
        <ProfileName>
            Signup
        </ProfileName>
      </>
    );
  }
  return (
    <>
      <BackgroundDrawer onClick={handleClose} />
      <Drawer>
        <SideDrawerLinkToAdmin to="/profile">
          <ul>
            <li
              style={{
                listStyle: 'none',
                display: 'inline',
              }}
            >
              {ProfileImageDiv}
            </li>
            <li
              style={{
                listStyle: 'none',
                display: 'inline',
              }}
            >
              {profileName}
            </li>
          </ul>
        </SideDrawerLinkToAdmin>
        <Button
          onClick={handleClose}
        >
          <FaPlus
            className="closeDrawer"
          />
        </Button>
        <SideDrawerUl>
          <SideDrawerLi>
            <SideDrawerLinkTo
              onClick={handleClose}
              to="/blog"
            >
                  Blog
            </SideDrawerLinkTo>
          </SideDrawerLi>
          <SideDrawerLi>
            <SideDrawerLinkTo
              onClick={handleClose}
              to="/podcasts"
            >
                  Podcasts
            </SideDrawerLinkTo>
          </SideDrawerLi>
          <SideDrawerLi>
            <SideDrawerLinkTo
              onClick={handleClose}
              to="/courses"
            >
                  Courses
            </SideDrawerLinkTo>
          </SideDrawerLi>
        </SideDrawerUl>
      </Drawer>
    </>
  );
};

export default SideDrawer;
