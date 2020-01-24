/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

import {
  WrittenByDiv,
  WrittenByUl,
  WrittenByAuthorInfoUl,
  WrittenByAuthorLinkTop,
  FollowButton,
  UnfollowButton,
} from '../../../../styled-components/components/post-written-by.styled-components';

import * as UserActions from '../../../../store/actions/user/user';

const WrittenBy = ({ author }) => {
  const [isFollowing, setIsFollowing] = useState(null);
  const {
    username,
    name,
    profileImage,
    quote,
  } = author;
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

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
    const res = await handleVerifyFollow(author._id, user.data._id);
    console.log('res.following:', res.following);
    console.log('res.followers:', res.followers);
    if (res.following === -1) {
      dispatch(UserActions.setFollowAuthor(author._id, user.data._id));
    } else {
      console.log('already following...');
    }
  };

  const handleUnfollowAuthor = async () => {
    const res = await handleVerifyFollow(author._id, user.data._id);
    if (res.following === -1 && res.followers === -1) {
      dispatch(UserActions.setUnfollowAuthor(author._id, user.data._id));
    } else {
      console.log('already following...');
    }
  };

  // useEffect(() => {

  // }, []);

  const handleVerify = async () => {
    const res = await handleVerifyFollow(author._id, user.data._id);
    console.log('res:', res);
    if (res.following !== -1) {
      setIsFollowing(true);
    }
  };
  handleVerify();

  let FollowBtn;

  if (user.fetched) {
    if (author._id === user.data._id) {
      FollowBtn = (
        <>
        </>
      );
    } else if (!_.isEmpty(user.data)) {
      if (isFollowing) {
        FollowBtn = (
          <>
            <li className="followBtn">
              <UnfollowButton
                type="button"
                onClick={handleUnfollowAuthor}
              >
                    Following
              </UnfollowButton>
            </li>
          </>
        );
      }

      if (!isFollowing) {
        FollowBtn = (
          <>
            <li className="followBtn">
              <FollowButton
                type="button"
                onClick={handleFollowAuthor}
              >
                    Follow +
              </FollowButton>
            </li>
          </>
        );
      }
    }
  }

  console.log('written by user:', user);

  return (
    <>
      <WrittenByDiv>
        <WrittenByUl>
          <li className="authorProfileImageLi">
            <WrittenByAuthorLinkTop to={`/user/${username}`}>
              <img src={profileImage.url} alt="" />
            </WrittenByAuthorLinkTop>
          </li>
          <li className="userInfoDiv">
            <WrittenByAuthorInfoUl>
              <li>
                <p>
              WRITTEN BY
                </p>
                <WrittenByAuthorLinkTop to={`/user/${username}`}>
                  <b>
                    {name}
                  </b>
                </WrittenByAuthorLinkTop>
                <p className="author-quote">{quote}</p>
              </li>
              {FollowBtn}
            </WrittenByAuthorInfoUl>
          </li>
        </WrittenByUl>
      </WrittenByDiv>
    </>
  );
};

export default WrittenBy;
