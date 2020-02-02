import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Form,
  TextArea,
  SendButton,
} from '../../../styled-components/components/add-comment.styled-components';

import * as PostAction from '../../../store/actions/blog/post';

const AddComment = (props) => {
  const comments = useSelector((state) => state.post.comments);
  const [comment, setComment] = useState('');
  const { user, post } = props;
  const dispatch = useDispatch();

  const handleSendComment = async (e) => {
    e.preventDefault();
    dispatch(PostAction.postComment(user._id, post, comment));
    setComment('');
  };

  const handleTextArea = (e) => {
    setComment(e.target.value);
  };

  return (
    <>
      <Form onSubmit={handleSendComment}>
        <TextArea
          placeholder="Comment..."
          onChange={handleTextArea}
          id="comment-textarea"
          value={comment}
        />
        <SendButton>Send</SendButton>
      </Form>
    </>
  );
};

export default AddComment;
