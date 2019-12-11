/* eslint-disable react/prop-types */
import React from 'react';

import {
  Wrapper,
  WrapperArrow,
  ProfileDiv,
  Profile,
  MenuOpitionUl,
  // MenuOpitionLi,
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
        {/* <BioDiv>
          <Bio>
            Bio test. dfgdfg gfh
          </Bio>
        </BioDiv>
        <hr /> */}
        <MenuOpitionUl />
      </Wrapper>
    </>
  );
};

export default UserMenu;
