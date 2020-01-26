/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
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
  Quote,
  EmptyQuote,
  FollowButton,
  UnfollowButton,
  MemberSince,
  SocialMediaUser,
  SocialMediaUserLink,
  LoadingAllContent,
  LoadingAllContentFollow,
  LoadingAllContentUnfollow,
  FollowUl,
  FollowDivUl,
} from '../styled-components/public-profile.styled.components';

import RecentActivities from './section/profile/RecentActivities';

import * as UserActions from '../store/actions/user/user';

const PublicProfile = (props) => {
  const [isFollowing, setIsFollowing] = useState(null);
  const publicProfile = useSelector((state) => state.publicProfile);
  const user = useSelector((state) => state.user);
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


  const handleVerifyFollow = async (userId, authorId) => {
    const res = await fetch('http://localhost:5000/users/verify/following/author',
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          authorId,
        }),
      });
    const data = await res.json(res);
    return data;
  };

  const handleFollowAuthor = async () => {
    const res = await handleVerifyFollow(publicProfile.data._id, user.data._id);
    if (res.following === -1) {
      dispatch(UserActions.setFollowAuthor(user.data._id, publicProfile.data._id));
    } else {
      console.log('already following...');
    }
  };

  const handleUnfollowAuthor = async () => {
    const res = await handleVerifyFollow(publicProfile.data._id, user.data._id);
    if (res.following >= 0) {
      dispatch(UserActions.setUnfollowAuthor(publicProfile.data._id, user.data._id));
    } else {
      console.log('already following...');
    }
  };

  const handleVerify = async () => {
    const res = await handleVerifyFollow(publicProfile.data._id, user.data._id);
    console.log('handleVerify res:', res);
    if (res.following >= 0) {
      setIsFollowing(true);
    } else if (res.following === -1) {
      setIsFollowing(false);
    }
  };
  handleVerify();

  let FollowBtn;

  if (user.fetched) {
    if (publicProfile.data._id === user.data._id) {
      FollowBtn = (
        <>
        </>
      );
    } else if (!_.isEmpty(user.data)) {
      if (isFollowing) {
        // if (user.loading) {
        //   FollowBtn = (
        //     <>
        //       <UnfollowButton>
        //         <LoadingAllContentUnfollow>
        //           <FaSpinner />
        //         </LoadingAllContentUnfollow>
        //       </UnfollowButton>
        //     </>
        //   );
        // } else
        if (user.fetched) {
          FollowBtn = (
            <>
              <UnfollowButton
                onClick={handleUnfollowAuthor}
              >
                Following
              </UnfollowButton>
            </>
          );
        }
      }

      if (!isFollowing) {
        // if (user.loading) {
        //   FollowBtn = (
        //     <>
        //       <FollowButton>
        //         <LoadingAllContentFollow>
        //           <FaSpinner />
        //         </LoadingAllContentFollow>
        //       </FollowButton>
        //     </>
        //   );
        // } else
        if (user.fetched) {
          FollowBtn = (
            <>
              <FollowButton
                onClick={handleFollowAuthor}
              >
                  Follow +
              </FollowButton>
            </>
          );
        }
      }
    }
  }


  let User;
  let github;
  let linkedin;
  let twitter;
  let quote;

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
      if (publicProfile.data.quote === '') {
        quote = (
          <>
            <Quote>{publicProfile.data.quote}</Quote>
          </>
        );
      } else {
        quote = (
          <>
            <EmptyQuote>{publicProfile.data.quote}</EmptyQuote>
          </>
        );
      }

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
                {FollowBtn}
                {/* <Quote>{publicProfile.data.quote}</Quote> */}
                {publicProfile.data.quote === '' ? (
                  <EmptyQuote>{publicProfile.data.quote}</EmptyQuote>
                ) : (
                  <Quote>{publicProfile.data.quote}</Quote>
                )}
                <MemberSince>
                  Since
                  {' '}
                  {formatDate(publicProfile.data.createdOn)}
                </MemberSince>
              </UserInfoDiv>
              <FollowUl>
                <li>
                  <FollowDivUl>
                    <li>
                      <b>
                    Posts
                      </b>
                    </li>
                    <li
                      className="number"
                    >
                      <span>{publicProfile.data.posts.length}</span>
                    </li>
                  </FollowDivUl>
                </li>
                <li>
                  <FollowDivUl>
                    <li>
                      <b>
                    Following
                      </b>
                    </li>
                    <li
                      className="number"
                    >
                      <span>{publicProfile.data.following.length}</span>
                    </li>
                  </FollowDivUl>
                </li>
                <li>
                  <FollowDivUl>
                    <li>
                      <b>
                    Follower
                      </b>
                    </li>
                    <li
                      className="number"
                    >
                      <span>{publicProfile.data.followers.length}</span>
                    </li>
                  </FollowDivUl>
                </li>
              </FollowUl>
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
