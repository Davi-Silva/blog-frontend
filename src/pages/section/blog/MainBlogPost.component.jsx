import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import BlogPostListMain from '../../../components/UI/lists/blog-home/BlogPostListMain.component';

import * as MainBlogPosts from '../../../store/actions/blog/mainBlogPosts';


import {
  ColumnLeft,
  ColumnRight,
  BlogTopPost,
} from '../../../styled-components/blog-posts.styled-components';

const MainBlogPost = () => {
  const postsList = useSelector((state) => state.mainBlogPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(MainBlogPosts.getMainBlogPost());
  }, []);

  let posts;
  let postsSmall;

  if (postsList.loading) {
    posts = (
      <>
        <p>
          Loading
        </p>
      </>
    );
  } else if (postsList.fetched) {
    posts = (
      <>
        {postsList.data.map((post, index) => {
          if (index === 0) {
            return (
              <BlogPostListMain
                key={post.id}
                type="Blog"
                slug={post.slug}
                imgSrc={post.cover.url}
                title={post.title}
                category={post.category}
                publishedOn={post.publishedOn}
                index={index}
              />
            );
          }
          return (
            <>
            </>
          );
        })}
      </>
    );
    postsSmall = (
      <>
        {postsList.data.map((post, index) => {
          if (index > 0) {
            if (index === 1 || index === 3) {
              return (
                <ColumnLeft
                  className="col-lg-6 col-md-6 col-sm-6 col-12"
                  key={post.id}
                >
                  <BlogPostListMain
                    categoryColor="yellow"
                    type="Blog"
                    slug={post.slug}
                    imgSrc={post.cover.url}
                    title={post.title}
                    category={post.category}
                    publishedOn={post.publishedOn}
                    index={index}
                  />
                </ColumnLeft>
              );
            }
            if (index === 2 || index === 4) {
              return (
                <ColumnRight
                  className="col-lg-6 col-md-6 col-sm-6 col-12"
                  key={post.id}
                >
                  <BlogPostListMain
                    categoryColor="black"
                    type="Blog"
                    slug={post.slug}
                    imgSrc={post.cover.url}
                    title={post.title}
                    category={post.category}
                    publishedOn={post.publishedOn}
                    index={index}
                  />
                </ColumnRight>
              );
            }
          }
          return (
            <>
            </>
          );
        })}
      </>
    );
  }

  return (
    <>
      <BlogTopPost className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            {posts}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="row">
              {postsSmall}
            </div>
          </div>
        </div>
      </BlogTopPost>
    </>
  );
};

export default MainBlogPost;
