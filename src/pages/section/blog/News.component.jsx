import React, { useEffect, useState } from 'react';

import NewsList from '../../../components/UI/lists/blog-home/BlogPostListNews.component';

import Ads from '../../../components/UI/ads/AdvertisementSquare.component';

import {
  PostListTitleDiv,
  PostListTitle,
  StickyWrapper,
  SeeAll,
} from '../../../styled-components/blog-posts-news.styled-components';


const News = () => {
  const [tutorialsState, setTutorialsState] = useState([]);

  useEffect(() => {
    const getTutorials = async () => {
      const response = await fetch('https://cryptic-activist-backend.herokuapp.com/blog/home/news', {
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

  // const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max));


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
                News
              </PostListTitle>
            </PostListTitleDiv>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-6">
            <SeeAll to="/blog/news">
                See More
            </SeeAll>
          </div>
          <div className="col-lg-9">
            <div className="row">
              {tutorialsState.map((post, index) => {
                console.log('post.id:', post.id);
                return (
                  <>
                    <NewsList
                      key={post.slug}
                      type="Blog"
                      slug={post.slug}
                      imgSrc={post.cover.url}
                      title={post.title}
                      category={post.category}
                      publishedOn={post.publishedOn}
                      index={index}
                    />
                  </>
                );
              })}
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
