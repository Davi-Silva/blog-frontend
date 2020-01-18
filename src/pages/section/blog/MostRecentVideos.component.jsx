import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MostRecentVideosList from '../../../components/UI/lists/blog-home/BlogPostListMostRecentVideos.component';

import * as MostRecentVideosAction from '../../../store/actions/blog/mostRecentVideos';

import {
  ColumnLeft,
  ColumnCenterLeft,
  ColumnCenterRight,
  ColumnRight,
  PostListTitleDiv,
  PostListTitle,
  SeeAll,
  CoverLoading,
} from '../../../styled-components/blog-posts-most-recent-videos.styled-components';


const MostRecentVideos = () => {
  const mostRecentVideos = useSelector((state) => state.mostRecentVideos);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(MostRecentVideosAction.getMostRecentVideos());
  }, []);

  let posts;
  if (mostRecentVideos.loading) {
    posts = (
      <>
        <ColumnLeft className="col-lg-3 col-md-3 col-sm-6 col-12">
          <CoverLoading
            style={{
              animationDelay: '0s',
            }}
          />
        </ColumnLeft>
        <ColumnCenterLeft className="col-lg-3 col-md-3 col-sm-6 col-12">
          <CoverLoading
            style={{
              animationDelay: '.25s',
            }}
          />
        </ColumnCenterLeft>
        <ColumnCenterRight className="col-lg-3 col-md-3 col-sm-6 col-12">
          <CoverLoading
            style={{
              animationDelay: '.5s',
            }}
          />
        </ColumnCenterRight>
        <ColumnRight className="col-lg-3 col-md-3 col-sm-6 col-12">
          <CoverLoading
            style={{
              animationDelay: '.75s',
            }}
          />
        </ColumnRight>
      </>
    );
  } else if (mostRecentVideos.fetched) {
    posts = (
      <>
        {mostRecentVideos.data.map((post, index) => (
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
                Most Recent Videos
              </PostListTitle>
            </PostListTitleDiv>
          </div>
          {posts}
        </div>
      </div>
    </>
  );
};

export default MostRecentVideos;
