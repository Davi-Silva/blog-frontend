import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import _ from 'lodash';

import {
  BackgroundDrawer,
  Drawer,
  ProfileDrawerUl,
  SideDrawerSubUl,
  ProfileImage,
  AdminLink,
  ProfileName,
  ProfileRanking,
  SideDrawerUl,
  SideDrawerLi,
  SideDrawerButtonTo,
  SideDrawerLinkTo,
  SideDrawerLinkToAdmin,
  Separator,
  LogoutDiv,
  Logout,
  LoginLinkDiv,
  LoginLink,
} from '../../../../styled-components/side-drawer.styled-components';

import ProfilePlaceholder from '../../../../static/img/profile-placeholder.png';

const SideDrawer = (props) => {
  const user = useSelector((state) => state.user);


  const handleClose = () => {
    const {
      HandleSideDrawer,
    } = props;
    const closeDrawer = HandleSideDrawer;
    closeDrawer();
  };

  const handleLogout = async () => {
    handleClose();
    await fetch('http://localhost:5000/auth/logout', {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  let ProfileDiv;
  let logoutVar;

  if (!_.isEmpty(user.data)) {
    console.log('Side Drawer user:', user);
    const {
      name: displayName,
      profileImage,
    } = user.data;
    ProfileDiv = (
      <>
        <SideDrawerLinkToAdmin
          to="/profile"
          onClick={handleClose}
        >
          <ProfileDrawerUl>
            <li
              style={{
                width: '33%',
                transform: 'translateY(-8px)',
              }}
            >
              <ProfileImage
                onClick={handleClose}
                src={profileImage.url}
              />
            </li>
            <li
              style={{
                width: '67%',
                top: '8px',
              }}
            >
              <ProfileName>
                {displayName}
              </ProfileName>
              <ProfileRanking>
                Newbie
              </ProfileRanking>
            </li>
          </ProfileDrawerUl>
        </SideDrawerLinkToAdmin>
        <Separator />
      </>
    );
    logoutVar = (
      <>
        <LogoutDiv>
          <Logout
            onClick={handleLogout}
          >
            Log out
          </Logout>
        </LogoutDiv>
      </>
    );
  } else {
    ProfileDiv = (
      <>
        <LoginLinkDiv>
          <LoginLink
            to="/login"
            onClick={handleClose}
          >
          Login
          </LoginLink>
        </LoginLinkDiv>
      </>
    );
    logoutVar = (
      <>
      </>
    );
  }

  return (
    <>
      <BackgroundDrawer onClick={handleClose} />
      <Drawer className="side-drawer">
        {ProfileDiv}
        <SideDrawerUl>
          <SideDrawerLi>
            <SideDrawerButtonTo
              className="navbar-toggler"
              type="button"
              aria-expanded="false"
              aria-label="Toggle navigation"
              data-target="#expand-blog"
              aria-controls="expand-blog"
              data-toggle="collapse"
            >
              Blog
            </SideDrawerButtonTo>
            <SideDrawerSubUl className="collapse navbar-collapse" id="expand-blog">
              <SideDrawerLi>
                <SideDrawerLinkTo
                  to="/blog"
                  onClick={handleClose}
                >
                  All Posts
                </SideDrawerLinkTo>
              </SideDrawerLi>
              <SideDrawerLi>
                <SideDrawerButtonTo
                  className="navbar-toggler"
                  type="button"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  data-target="#expand-blog-categories"
                  aria-controls="expand-blog-categories"
                  data-toggle="collapse"
                >
                  Categories
                </SideDrawerButtonTo>
                <SideDrawerSubUl className="collapse navbar-collapse" id="expand-blog-categories">
                  <SideDrawerLi>
                    <SideDrawerLinkTo
                      to="/blog"
                      onClick={handleClose}
                    >
                      Test 1
                    </SideDrawerLinkTo>
                  </SideDrawerLi>
                  <SideDrawerLi>
                    <SideDrawerLinkTo
                      to="/blog"
                      onClick={handleClose}
                    >
                      Test 2
                    </SideDrawerLinkTo>
                  </SideDrawerLi>
                  <SideDrawerLi>
                    <SideDrawerLinkTo
                      to="/blog"
                      onClick={handleClose}
                    >
                  All Categories
                    </SideDrawerLinkTo>
                  </SideDrawerLi>
                </SideDrawerSubUl>
              </SideDrawerLi>
              <SideDrawerLi>
                <SideDrawerLinkTo
                  to="/blog"
                  onClick={handleClose}
                >
                  All Posts
                </SideDrawerLinkTo>
              </SideDrawerLi>
              <SideDrawerLi>
                <SideDrawerLinkTo
                  to="/blog"
                  onClick={handleClose}
                >
                  All Posts
                </SideDrawerLinkTo>
              </SideDrawerLi>
            </SideDrawerSubUl>
          </SideDrawerLi>
          <SideDrawerLi>
            <SideDrawerButtonTo
              className="navbar-toggler"
              type="button"
              aria-expanded="false"
              aria-label="Toggle navigation"
              data-target="#expand-podcasts"
              aria-controls="expand-podcasts"
              data-toggle="collapse"
            >
              Podcasts
            </SideDrawerButtonTo>
            <SideDrawerSubUl className="collapse navbar-collapse" id="expand-podcasts">
              <SideDrawerLi>
                <SideDrawerLinkTo
                  to="/podcasts"
                  onClick={handleClose}
                >
                  All Podcasts
                </SideDrawerLinkTo>
              </SideDrawerLi>
              <SideDrawerLi>
                <SideDrawerLinkTo
                  to="/podcasts"
                  onClick={handleClose}
                >
                  All Podcasts
                </SideDrawerLinkTo>
              </SideDrawerLi>
              <SideDrawerButtonTo
                className="navbar-toggler"
                type="button"
                aria-expanded="false"
                aria-label="Toggle navigation"
                data-target="#expand-podcasts-categories"
                aria-controls="expand-podcasts-categories"
                data-toggle="collapse"
              >
                  Categories
              </SideDrawerButtonTo>
              <SideDrawerSubUl className="collapse navbar-collapse" id="expand-podcasts-categories">
                <SideDrawerLi>
                  <SideDrawerLinkTo
                    to="/podcasts"
                    onClick={handleClose}
                  >
                      Test 1
                  </SideDrawerLinkTo>
                </SideDrawerLi>
                <SideDrawerLi>
                  <SideDrawerLinkTo
                    to="/podcasts"
                    onClick={handleClose}
                  >
                      Test 2
                  </SideDrawerLinkTo>
                </SideDrawerLi>
                <SideDrawerLi>
                  <SideDrawerLinkTo
                    to="/podcasts"
                    onClick={handleClose}
                  >
                  All Categories
                  </SideDrawerLinkTo>
                </SideDrawerLi>
              </SideDrawerSubUl>
              <SideDrawerLi>
                <SideDrawerLinkTo
                  to="/podcasts"
                  onClick={handleClose}
                >
                  All Podcasts
                </SideDrawerLinkTo>
              </SideDrawerLi>
            </SideDrawerSubUl>
          </SideDrawerLi>
          <SideDrawerLi>
            <SideDrawerButtonTo
              className="navbar-toggler"
              type="button"
              aria-expanded="false"
              aria-label="Toggle navigation"
              data-target="#expand-courses"
              aria-controls="expand-courses"
              data-toggle="collapse"
            >
              Station
            </SideDrawerButtonTo>
            <SideDrawerSubUl className="collapse navbar-collapse" id="expand-courses">
              <SideDrawerLi>
                <SideDrawerLinkTo
                  to="/courses"
                  onClick={handleClose}
                >
                  All Courses
                </SideDrawerLinkTo>
              </SideDrawerLi>
              <SideDrawerLi>
                <SideDrawerLinkTo
                  to="/courses"
                  onClick={handleClose}
                >
                  All Courses
                </SideDrawerLinkTo>
              </SideDrawerLi>
              <SideDrawerButtonTo
                className="navbar-toggler"
                type="button"
                aria-expanded="false"
                aria-label="Toggle navigation"
                data-target="#expand-courses-categories"
                aria-controls="expand-courses-categories"
                data-toggle="collapse"
              >
                  Categories
              </SideDrawerButtonTo>
              <SideDrawerSubUl className="collapse navbar-collapse" id="expand-courses-categories">
                <SideDrawerLi>
                  <SideDrawerLinkTo
                    to="/courses"
                    onClick={handleClose}
                  >
                      Test 1
                  </SideDrawerLinkTo>
                </SideDrawerLi>
                <SideDrawerLi>
                  <SideDrawerLinkTo
                    to="/courses"
                    onClick={handleClose}
                  >
                      Test 2
                  </SideDrawerLinkTo>
                </SideDrawerLi>
                <SideDrawerLi>
                  <SideDrawerLinkTo
                    to="/courses"
                    onClick={handleClose}
                  >
                  All Categories
                  </SideDrawerLinkTo>
                </SideDrawerLi>
              </SideDrawerSubUl>
              <SideDrawerLi>
                <SideDrawerLinkTo
                  to="/courses"
                  onClick={handleClose}
                >
                  All Courses
                </SideDrawerLinkTo>
              </SideDrawerLi>
            </SideDrawerSubUl>
          </SideDrawerLi>
        </SideDrawerUl>
        <AdminLink
          to="/admin"
          onClick={handleClose}
        >
          Admin
        </AdminLink>
        {logoutVar}
      </Drawer>
    </>
  );
};

export default SideDrawer;

SideDrawer.propTypes = {
  HandleSideDrawer: PropTypes.func.isRequired,
  UserData: PropTypes.objectOf(PropTypes.any),
};

SideDrawer.defaultProps = {
  UserData: {},
};
