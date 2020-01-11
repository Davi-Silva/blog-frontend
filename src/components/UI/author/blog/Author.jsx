/* eslint-disable no-underscore-dangle */
import React, {
// useEffect,
} from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {
  Author,
  FollowButton,
  AuthorPictureLink,
} from '../../../../styled-components/post-author.styled-components';

const PostAuthor = ({ author, postPublished }) => {
  const userInfo = useSelector((state) => state.user.userInfo);
  console.log('userInfo in PostAuthor component:', userInfo);

  let followButton;
  if (!_.isEmpty(userInfo)) {
    if (author._id === userInfo[0]._id) {
      console.log('user is the same as the author');
      followButton = (
        <>
        </>
      );
    } else {
      followButton = (
        <>
          <FollowButton type="submit">
            Follow +
          </FollowButton>
        </>
      );
    }
  } else {
    followButton = (
      <>
        <FollowButton type="submit">
          Follow +
        </FollowButton>
      </>
    );
  }

  return (
    <>
      <Author>
        <ul>
          <li>
            <AuthorPictureLink to={`/user/${author.username}`}>
              <img src={author.profileImage.url} alt="Author" />
            </AuthorPictureLink>
          </li>
          <li>
            <div>
              <span>{author.name}</span>
              <span>
                {followButton}
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
