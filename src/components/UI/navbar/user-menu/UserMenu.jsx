
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Wrapper,
  WrapperArrow,
  ProfileDiv,
  Profile,
  MenuOpitionUl,
  MenuOpitionLi,
  LinkTo,
} from '../../../../styled-components/user-menu.styled-components';

import * as UserActions from '../../../../store/actions/user/user';

const UserMenu = (props) => {
  const {
    displayName,
    CloseUserMenuOnClick,
  } = props;

  const dispatch = useDispatch();

  const handleCloseOnClick = () => {
    const handleClick = CloseUserMenuOnClick;
    handleClick();
  };

  const handleLogout = async () => {
    dispatch(UserActions.logoutUser());
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
          <MenuOpitionLi>
            <LinkTo
              to="/"
              onClick={handleLogout}
              className="last"
            >
              Sign out
            </LinkTo>
          </MenuOpitionLi>
        </MenuOpitionUl>
      </Wrapper>
    </>
  );
};

export default UserMenu;
