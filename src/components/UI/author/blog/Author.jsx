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
  const user = useSelector((state) => state.user);

  let followButton;
  if (!_.isEmpty(user.data)) {
    if (author._id === user.data._id) {
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
