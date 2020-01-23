import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {
  FaSpinner,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';

import {
  Wrapper,
  UserInfoDiv,
  ProfileImage,
  DisplayName,
  FollowButton,
  MemberSince,
  SocialMediaUser,
  SocialMediaUserLink,
  LoadingAllContent,
} from '../styled-components/public-profile.styled.components';

import RecentActivities from './section/profile/RecentActivities';

import * as UserActions from '../store/actions/user/user';

const PublicProfile = (props) => {
  const publicProfile = useSelector((state) => state.publicProfile);
  console.log('publicProfile:', publicProfile);
  const dispatch = useDispatch();

  const parseDate = (input) => {
    const parts = input.match(/(\d+)/g);
    return new Date(parts[0], parts[1] - 1, parts[2]);
  };

  const formatDate = (uploadedOn) => {
    const dateFormatted = parseDate(uploadedOn);
    const months = [
      'January',
      'February',
      'March',
      'April',
      'may',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    return `${months[dateFormatted.getMonth()]} ${dateFormatted.getFullYear()}`;
  };

  let User;
  let github;
  let linkedin;
  let twitter;

  useEffect(() => {
    const {
      user,
    } = props.match.params;
    dispatch(UserActions.getPublicProfile(user));
  }, []);

  if (publicProfile.loading) {
    User = (
      <>
        <LoadingAllContent>
          <FaSpinner />
        </LoadingAllContent>
      </>
    );
  } else if (publicProfile.fetched) {
    if (!_.isEmpty(publicProfile.data)) {
      if (publicProfile.data.socialMedia.github === '') {
        github = (
          <>
          </>
        );
      } else {
        github = (
          <>
            <li>
              <SocialMediaUserLink
                href={publicProfile.data.socialMedia.github}
                target="_blank"
              >
                <FaGithub />
              </SocialMediaUserLink>
            </li>
          </>
        );
      }
      if (publicProfile.data.socialMedia.linkedin === '') {
        linkedin = (
          <>
          </>
        );
      } else {
        linkedin = (
          <>
            <li>
              <SocialMediaUserLink
                href={publicProfile.data.socialMedia.linkedin}
                target="_blank"
              >
                <FaLinkedinIn />
              </SocialMediaUserLink>
            </li>
          </>
        );
      }
      if (publicProfile.data.socialMedia.twitter === '') {
        twitter = (
          <>
          </>
        );
      } else {
        twitter = (
          <>
            <li>
              <SocialMediaUserLink
                href={publicProfile.data.socialMedia.twitter}
                target="_blank"
              >
                <FaTwitter />
              </SocialMediaUserLink>
            </li>
          </>
        );
      }


      User = (
        <>
          <Wrapper>
            <li className="user-cover">
              <ProfileImage src={publicProfile.data.profileImage.url} alt="Profile Placeholder" />
              <SocialMediaUser>
                {github}
                {linkedin}
                {twitter}
              </SocialMediaUser>
            </li>
            <li className="user-info">
              <UserInfoDiv>
                <DisplayName>
                  {publicProfile.data.name}
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
                <p>{publicProfile.data.quote}</p>
                <MemberSince>
                  Since
                  {' '}
                  {formatDate(publicProfile.data.createdOn)}
                </MemberSince>
              </UserInfoDiv>
            </li>
          </Wrapper>
          <div className="container">
            <div className="row">
              <RecentActivities
                activities={publicProfile.data.posts}
                authorPicture={publicProfile.data.profileImage.url}
              />
            </div>
          </div>
        </>
      );
    }
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
