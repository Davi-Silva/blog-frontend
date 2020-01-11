import React, { useEffect, useState } from 'react';

import MostRecentVideosList from '../../../components/UI/lists/blog-home/BlogPostListMostRecentVideos.component';


import {
  PostListTitleDiv,
  PostListTitle,
  SeeAll,
} from '../../../styled-components/blog-posts-most-recent-videos.styled-components';


const MostRecentVideos = () => {
  const [mostRecentVideosState, setMostRecentVideosState] = useState([]);

  useEffect(() => {
    const getTutorials = async () => {
      const response = await fetch('http://localhost:5000/blog/home/most-recent-videos', {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setMostRecentVideosState(data);
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
                Most Recent Videos
              </PostListTitle>
            </PostListTitleDiv>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-6">
            <SeeAll to="/blog/tutorials">
                See More
            </SeeAll>
          </div>
          {mostRecentVideosState.map((post, index) => (
            <>
              <MostRecentVideosList
                key={post.id}
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

export default MostRecentVideos;
