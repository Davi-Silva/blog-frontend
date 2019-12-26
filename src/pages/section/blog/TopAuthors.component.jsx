import React, { useEffect, useState } from 'react';

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
  const [authorState, setAuthorState] = useState([]);

  useEffect(() => {
    const getAuthors = async () => {
      const response = await fetch(`http://localhost:5000/blog/?page=${1}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log('data tutorials:', data);
      setAuthorState(data);
    };
    getAuthors();
  }, []);


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
                  Author Name
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
