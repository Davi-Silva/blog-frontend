import React, { useEffect, useState } from 'react';

import TutorialsList from '../../../components/UI/lists/blog-home/BlogPostListTutorials.component';


import {
  PostListTitleDiv,
  PostListTitle,
  SeeAll,
} from '../../../styled-components/blog-posts-tutorials.styled-components';


const Tutorials = () => {
  const [tutorialsState, setTutorialsState] = useState([]);

  useEffect(() => {
    const getTutorials = async () => {
      const response = await fetch('https://cryptic-activist-backend.herokuapp.com/blog/home/tutorials', {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setTutorialsState(data);
    };
    getTutorials();
  }, []);


  return (
    <>
      <div
        className="container"
        style={{
          paddingTop: '30px',
        }}
      >
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-9 col-6">
            <PostListTitleDiv>
              <PostListTitle>
                Tutorials
              </PostListTitle>
            </PostListTitleDiv>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-6">
            <SeeAll to="/blog/tutorials">
                See More
            </SeeAll>
          </div>
          {tutorialsState.map((post, index) => (
            <>
              <TutorialsList
                key={index}
                type="Blog"
                slug={post.slug}
                imgSrc={post.cover.url}
                title={post.title}
                category={post.category}
                publishedOn={post.publishedOn}
                index={index}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tutorials;
