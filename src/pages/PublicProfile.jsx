import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import UserProvider from '../contexts/UserProvider';

import {
  Wrapper,
  UserInfoDiv,
  ProfileImage,
  DisplayName,
  FollowButton,
  MemberSince,
} from '../styled-components/public-profile.styled.components';


const PublicProfile = (props) => {
  const [publicProfile, setPublicProfile] = useState({});

  const userInfo = useContext(UserProvider.context);

  useEffect(() => {
    const {
      user,
    } = props.match.params;
    const getPublicUser = async (userData) => {
      const response = await fetch(`https://cryptic-activist-backend.herokuapp.com/users/public-profile/${userData}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setPublicProfile(data);
    };

    getPublicUser(user);
  }, []);

  let User;

  if (!_.isEmpty(publicProfile)) {
    User = (
      <>
        <Wrapper>
          <li>
            <ProfileImage src={publicProfile.profileImage.url} alt="Profile Placeholder" />
          </li>
          <li>
            <UserInfoDiv>
              <DisplayName>
                {publicProfile.name}
              </DisplayName>
              <FollowButton>
                <button
                  type="button"
                  onClick={() => {
                    console.log('Clicked');
                  }}
                >
                  Follow +
                </button>
              </FollowButton>
              <p>This is just long statement</p>
              <MemberSince>
                Since May 2019
              </MemberSince>
            </UserInfoDiv>
          </li>
        </Wrapper>
      </>
    );
  } else {
    User = (
      <>
      </>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {User}
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicProfile;

PublicProfile.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      user: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
