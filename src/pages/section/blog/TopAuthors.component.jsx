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
      const response = await fetch('http://34.196.97.115:5000/blog/get/top-authors', {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setAuthorState(data);
    };
    getAuthors();
  }, []);

  let authors;

  if (!_.isEmpty(authorState)) {
    authors = (
      <>
        {authorState[0].name}
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
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <ProfileLink to="/profile">
                <ProfileImage
                  src={ProfilePlaceholder}
                  alt="Author"
                />
                <AuthorName>
                  {authors}
                </AuthorName>
                <AuthorNumberOfPosts>
                  {`${12} Posts`}
                </AuthorNumberOfPosts>
              </ProfileLink>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <ProfileLink to="/profile">
                <ProfileImage
                  src={ProfilePlaceholder}
                  alt="Author"
                />
                <AuthorName>
                  Author Name
                </AuthorName>
                <AuthorNumberOfPosts>
                  {`${7} Posts`}
                </AuthorNumberOfPosts>
              </ProfileLink>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <ProfileLink to="/profile">
                <ProfileImage
                  src={ProfilePlaceholder}
                  alt="Author"
                />
                <AuthorName>
                  Author Name
                </AuthorName>
                <AuthorNumberOfPosts>
                  {`${3} Posts`}
                </AuthorNumberOfPosts>
              </ProfileLink>
            </div>
          </div>
        </div>
      </TopAuthorDiv>
    </>
  );
};

export default TopAuthors;
