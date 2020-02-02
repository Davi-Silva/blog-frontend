import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import NewsList from '../../../components/UI/lists/blog-home/BlogPostListNews.component';
import Ads from '../../../components/UI/ads/AdvertisementSquare.component';

import * as NewsAction from '../../../store/actions/blog/blog';

import {
  PostListTitleDiv,
  PostListTitle,
  StickyWrapper,
  CoverLoading,
  ColumnRight,
  ColumnLeft,
  ColumnCenter,
} from '../../../styled-components/blog-posts-news.styled-components';

const News = () => {
  const blog = useSelector((state) => state.blog);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(NewsAction.getNews());
  }, []);

  let newsVar;
  if (blog.news.loading) {
    newsVar = (
      <>
        <ColumnLeft className="col-lg-4 col-md-4 col-sm-6 col-12">
          <CoverLoading
            style={{
              animationDelay: '0s',
            }}
          />
        </ColumnLeft>
        <ColumnCenter className="col-lg-4 col-md-4 col-sm-6 col-12">
          <CoverLoading
            style={{
              animationDelay: '0.16s',
            }}
          />
        </ColumnCenter>
        <ColumnRight className="col-lg-4 col-md-4 col-sm-6 col-12">
          <CoverLoading
            style={{
              animationDelay: '0.32s',
            }}
          />
        </ColumnRight>
        <ColumnLeft className="col-lg-4 col-md-4 col-sm-6 col-12">
          <CoverLoading
            style={{
              animationDelay: '0.48s',
            }}
          />
        </ColumnLeft>
        <ColumnCenter className="col-lg-4 col-md-4 col-sm-6 col-12">
          <CoverLoading
            style={{
              animationDelay: '0.64s',
            }}
          />
        </ColumnCenter>
        <ColumnRight className="col-lg-4 col-md-4 col-sm-6 col-12">
          <CoverLoading
            style={{
              animationDelay: '0.8s',
            }}
          />
        </ColumnRight>
      </>
    );
  } else if (blog.news.fetched) {
    newsVar = (
      <>
        {blog.news.data.map((post, index) => (
          <NewsList
            key={post.id}
            type="Blog"
            slug={post.slug}
            imgSrc={post.cover.url}
            title={post.title}
            category={post.category}
            publishedOn={post.publishedOn}
            index={index}
          />
        ))}
      </>
    );
  }


  return (
    <>
      <div
        className="container"
        style={{
          paddingTop: '30px',
        }}
      >
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <PostListTitleDiv>
              <PostListTitle>
                News
              </PostListTitle>
            </PostListTitleDiv>
          </div>
          <div className="col-lg-9">
            <div className="row">
              {newsVar}
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
