import React, { useEffect, useState } from 'react';

import TutorialsList from '../../../components/UI/lists/BlogPostListTutorials.component';


import {
  PostListTitleDiv,
  PostListTitle,
} from '../../../styled-components/blog-posts-tutorials.styled-components';


const Tutorials = () => {
  const [tutorialsState, setTutorialsState] = useState([]);

  useEffect(() => {
    const getTutorials = async () => {
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
      console.log('data tiutorials:', data);
      setTutorialsState(data);
    };
    getTutorials();
  }, []);


  return (
    <>
      <div
        className="container"
        style={{
          paddingTop: '25px',
        }}
      >
        <div className="row">
          <div className="col-12">
            <PostListTitleDiv>
              <PostListTitle>
                Tutorials
              </PostListTitle>
            </PostListTitleDiv>
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
