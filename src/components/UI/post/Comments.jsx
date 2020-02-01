/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import slugify from 'slugify';
import _ from 'lodash';

import {
  CommentsWrapper,
  Wrapper,
  LinkToProfile,
  AuthorPicture,
  AuthorName,
  PostedOn,
  Content,
  UserInfoWrapper,
  CommentsTitle,
} from '../../../styled-components/components/post-comment.styled-components';

import AddComment from './AddComment';

import * as PostAction from '../../../store/actions/blog/post';

const Comments = (props) => {
  const comments = useSelector((state) => state.post.comments);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {
    postId,
  } = props;

  useEffect(() => {
    dispatch(PostAction.getCommentsPost(comments));
  }, []);

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

    return `${months[dateFormatted.getMonth()]} ${dateFormatted.getDate()} ${dateFormatted.getFullYear()}`;
  };

  let commentTitle;


  if (comments.fetched) {
    commentTitle = (
      <CommentsTitle>
        Comments:
      </CommentsTitle>
    );
  }

  return (
    <>
      <CommentsWrapper>
        {commentTitle}
        {!_.isEmpty(user.data) ? (
          <AddComment
            user={user.data}
            post={postId}
          />
        ) : (
          <></>
        )}


        {comments.loading === true ? (
          <h2>Loading...</h2>
        ) : (
          comments.fetched === true ? (
            comments.data.map((comment) => (
              <Wrapper key={comment.id}>
                <UserInfoWrapper>
                  <ul>
                    <li className="img-li">
                      <LinkToProfile to={`/user/${comment.author.username}`}>
                        <AuthorPicture
                          src={comment.author.profileImage.url}
                        />
                      </LinkToProfile>
                    </li>
                    <li className="user-info">
                      <LinkToProfile to={`/user/${comment.author.username}`}>
                        <AuthorName>
                          {comment.author.name}
                        </AuthorName>
                      </LinkToProfile>
                      <PostedOn>
                        {formatDate(comment.publishedOn)}
                      </PostedOn>
                    </li>
                  </ul>
                </UserInfoWrapper>
                <Content>{comment.content}</Content>
              </Wrapper>
            ))
          ) : (
            <h2>Error</h2>
          )
        )}
      </CommentsWrapper>
    </>
  );
};

export default Comments;
