/* eslint-disable react/prop-types */
import React from 'react';

import {
  Wrapper,
  WrapperArrow,
  ProfileDiv,
  Profile,
  MenuOpitionUl,
  MenuOpitionLi,
  LinkTo,
} from '../../../../styled-components/user-menu.styled-components';

const UserMenu = (props) => {
  const {
    displayName,
    CloseUserMenuOnClick,
  } = props;

  const handleCloseOnClick = () => {
    const handleClick = CloseUserMenuOnClick;
    handleClick();
  };

  return (
    <>
      <WrapperArrow />
      <Wrapper>
        <ProfileDiv>
          <Profile
            onClick={handleCloseOnClick}
            to="/profile"
          >
            <p>
          Signed in as
              <br />
              <strong>
                {displayName}
              </strong>
            </p>
          </Profile>
        </ProfileDiv>
        <hr />
        <MenuOpitionUl>
          <MenuOpitionLi>
            <LinkTo
              to="/admin"
              onClick={handleCloseOnClick}
            >
              Admin
            </LinkTo>
          </MenuOpitionLi>
          <MenuOpitionLi>
            <LinkTo
              to="/my-courses"
              onClick={handleCloseOnClick}
            >
              My Courses
            </LinkTo>
          </MenuOpitionLi>
        </MenuOpitionUl>
      </Wrapper>
    </>
  );
};

export default UserMenu;
