import React, { useEffect, useState } from 'react';

import NewsList from '../../../components/UI/lists/blog-home/BlogPostListNews.component';

import Ads from '../../../components/UI/ads/AdvertisementSquare.component';

import {
  PostListTitleDiv,
  PostListTitle,
  StickyWrapper,
} from '../../../styled-components/blog-posts-news.styled-components';


const News = () => {
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
          paddingTop: '10px',
        }}
      >
        <div className="row">
          <div className="col-12">
            <PostListTitleDiv>
              <PostListTitle>
                News
              </PostListTitle>
            </PostListTitleDiv>
          </div>
          <div className="col-lg-9">
            <div className="row">
              {tutorialsState.map((post, index) => (
                <>
                  <NewsList
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
          <div className="col-lg-3">
            <StickyWrapper>
              <Ads />
            </StickyWrapper>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
