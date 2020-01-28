/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';


import {
  FaSpinner,
} from 'react-icons/fa';

import {
  Author,
  FollowButton,
  UnfollowButton,
  AuthorLink,
  LoadingAllContentFollow,
  LoadingAllContentUnfollow,
} from '../../../../styled-components/post-author.styled-components';

import * as UserActions from '../../../../store/actions/user/user';

const PostAuthor = ({ author, postPublished }) => {
  const [isFollowing, setIsFollowing] = useState(null);
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
    if (res.following === -1) {
      dispatch(UserActions.setFollowAuthor(user.data._id, author._id));
    } else {
      console.log('already following...');
    }
  };

  const handleUnfollowAuthor = async () => {
    const res = await handleVerifyFollow(author._id, user.data._id);
    if (res.following >= 0) {
      dispatch(UserActions.setUnfollowAuthor(author._id, user.data._id));
    } else {
      console.log('already following...');
    }
  };

  const handleVerify = async () => {
    const res = await handleVerifyFollow(author._id, user.data._id);
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
    if (author._id === user.data._id) {
      FollowBtn = (
        <>
        </>
      );
    } else if (!_.isEmpty(user.data)) {
      if (isFollowing) {
        if (user.fetched) {
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
      }

      if (!isFollowing) {
        if (user.fetched) {
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
  }

  return (
    <>
      <Author>
        <ul>
          <li>
            <AuthorLink to={`/user/${author.username}`}>
              <img src={author.profileImage.url} alt="Author" />
            </AuthorLink>
          </li>
          <li>
            <div>
              <AuthorLink to={`/user/${author.username}`}>
                <span>{author.name}</span>
              </AuthorLink>
              <span>
                {FollowBtn}
              </span>
              {postPublished}
            </div>
          </li>
        </ul>
      </Author>
    </>
  );
};

export default PostAuthor;

PostAuthor.propTypes = {
  author: PropTypes.shape.isRequired,
  postPublished: PropTypes.string.isRequired,
};
