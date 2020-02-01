import React, { useState } from 'react';
import {
  Form,
  TextArea,
  SendButton,
} from '../../../styled-components/components/add-comment.styled-components';


const AddComment = (props) => {
  const [comment, setComment] = useState('');
  const { user, post } = props;

  const postComment = async () => {
    const res = await fetch('http://localhost:5000/blog/contributor/post/comment',
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user, post, comment }),
      });
    const data = await res.json(res);
    return data;
  };


  const handleSendComment = async (e) => {
    e.preventDefault();
    postComment();
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
        />
        <SendButton>Send</SendButton>
      </Form>
    </>
  );
};

export default AddComment;
