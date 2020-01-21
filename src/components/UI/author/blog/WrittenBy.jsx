/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

import {
  WrittenByDiv,
  WrittenByUl,
  WrittenByAuthorInfoUl,
  WrittenByAuthorLinkTop,
  FollowButton,
} from '../../../../styled-components/components/post-written-by.styled-components';

import * as UserActions from '../../../../store/actions/user/user';

const WrittenBy = ({ author }) => {
  const {
    username,
    name,
    profileImage,
    quote,
  } = author;
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log('user written by:', user);

  const handleVerifiyFollow = async (userId, authorId) => {
    const res = await fetch('http://34.205.75.176:5000/users/verify/following/author',
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
    const res = await handleVerifiyFollow(author._id, user.data._id);
    if (res.following === -1 && res.followers === -1) {
      dispatch(UserActions.setFollowAuthor(author._id, user.data._id));
    } else {
      console.log('already following...');
    }
  };

  const handleUnfollowAuthor = async () => {
    const res = await handleVerifiyFollow(author._id, user.data._id);
    if (res.following === -1 && res.followers === -1) {
      dispatch(UserActions.setUnfollowAuthor(author._id, user.data._id));
    } else {
      console.log('already following...');
    }
  };

  let FollowBtn;

  if (!user.loading) {
    if (!_.isEmpty(user.data)) {
      if (author._id === user.data._id) {
        FollowBtn = (
          <>
          </>
        );
      } else if (user.data.following.indexOf(author._id) !== -1) {
        FollowBtn = (
          <>
            <li>
              <FollowButton
                type="button"
                onClick={handleUnfollowAuthor}
              >
                Following
              </FollowButton>
            </li>
          </>
        );
      } else if (user.data.following.indexOf(author._id) === -1) {
        FollowBtn = (
          <>
            <li>
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
