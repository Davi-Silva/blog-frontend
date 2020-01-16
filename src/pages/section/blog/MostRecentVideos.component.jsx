import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MostRecentVideosList from '../../../components/UI/lists/blog-home/BlogPostListMostRecentVideos.component';

import * as MostRecentVideosAction from '../../../store/actions/blog/mostRecentVideos';

import {
  PostListTitleDiv,
  PostListTitle,
  SeeAll,
} from '../../../styled-components/blog-posts-most-recent-videos.styled-components';


const MostRecentVideos = () => {
  const mostRecentVideos = useSelector((state) => state.mainBlogPosts);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(MostRecentVideosAction.getMostRecentVideos());
  }, []);

  let posts;
  if (mostRecentVideos.loading) {
    posts = (
      <>
        <p>
          Loading
        </p>
      </>
    );
  } else if (mostRecentVideos.fetched) {
    posts = (
      <>
        {mostRecentVideos.data.map((post, index) => (
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
