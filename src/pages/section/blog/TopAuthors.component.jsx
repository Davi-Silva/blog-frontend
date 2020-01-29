import React, { useEffect, useState } from 'react';
import _ from 'lodash';

import ProfilePlaceholder from '../../../static/img/profile-placeholder.png';

import {
  TopAuthorDiv,
  Title,
  ProfileLink,
  ProfileImage,
  AuthorName,
  AuthorNumberOfPosts,
} from '../../../styled-components/blog-posts-top-authors.styled-components';

const TopAuthors = () => {
  const [
    authorState,
    setAuthorState,
  ] = useState([]);

  useEffect(() => {
    const getAuthors = async () => {
      const response = await fetch('http://localhost:5000/blog/get/top-authors', {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log('authors:', data);
      setAuthorState(data);
    };
    getAuthors();
  }, []);

  let authors;

  if (!_.isEmpty(authorState)) {
    authors = (
      <>
        {authorState.map((author) => (
          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
            <ProfileLink to={`/user/${author.username}`}>
              <ProfileImage
                src={author.profileImage.url}
                alt={author.profileImage.name}
              />
              <AuthorName>
                {author.name}
              </AuthorName>
              <AuthorNumberOfPosts>
                {`${author.posts.length} Posts`}
              </AuthorNumberOfPosts>
            </ProfileLink>
          </div>
        ))}
      </>
    );
  } else {
    authors = (
      <>
      </>
    );
  }

  return (
    <>
      <TopAuthorDiv>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Title>
                Top Authors
              </Title>
            </div>
            {authors}
          </div>
        </div>
      </TopAuthorDiv>
    </>
  );
};

export default TopAuthors;
