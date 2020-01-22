import React, { useEffect, useState } from 'react';
import _ from 'lodash';

import {
  MostRecentPostH6,
  LinkTo,
  Wrapper,
  BackgroundWrapper,
  Title,
} from '../../../../../styled-components/components/most-recent-post-aside.styled-components';

const MostRecentPost = () => {
  const [post, setPost] = useState();

  useEffect(() => {
    const getMostRecentPost = async () => {
      const response = await fetch('http://34.196.97.115:5000/blog/most/recent/post', {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setPost(data);
    };
    getMostRecentPost();
  }, []);
  let postDiv;

  if (!_.isEmpty(post)) {
    postDiv = (
      <>
        <MostRecentPostH6>
          Most Recent Post
        </MostRecentPostH6>
        <LinkTo to={`/blog/${post[0].slug}`}>
          <Wrapper
            style={{
              backgroundImage: `url(${post[0].cover.url})`,
            }}
          >
            <BackgroundWrapper />
            <Title>
              {post[0].title}
            </Title>
          </Wrapper>
        </LinkTo>
      </>
    );
  } else {
    postDiv = (
      <>
      </>
    );
  }

  return (
    <>
      {postDiv}
    </>
  );
};

export default MostRecentPost;
