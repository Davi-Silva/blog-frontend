import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TutorialsList from '../../../components/UI/lists/blog-home/BlogPostListTutorials.component';


import {
  ColumnLeft,
  PostListTitleDiv,
  PostListTitle,
  CoverLoading,
} from '../../../styled-components/blog-posts-tutorials.styled-components';

import * as TutorialsAction from '../../../store/actions/blog/tutorials';

const Tutorials = () => {
  const blog = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TutorialsAction.getTutorials());
  }, []);

  let tutorials;

  if (blog.tutorials.loading) {
    tutorials = (
      <>
        <ColumnLeft className="col-lg-4 col-md-4 col-sm-6 col-12">
          <CoverLoading
            style={{
              animationDelay: '0s',
            }}
          />
        </ColumnLeft>
        <ColumnLeft className="col-lg-4 col-md-4 col-sm-6 col-12">
          <CoverLoading
            style={{
              animationDelay: '0.16s',
            }}
          />
        </ColumnLeft>
        <ColumnLeft className="col-lg-4 col-md-4 col-sm-6 col-12">
          <CoverLoading
            style={{
              animationDelay: '0.32s',
            }}
          />
        </ColumnLeft>
        <ColumnLeft className="col-lg-4 col-md-4 col-sm-6 col-12">
          <CoverLoading
            style={{
              animationDelay: '0.48s',
            }}
          />
        </ColumnLeft>
        <ColumnLeft className="col-lg-4 col-md-4 col-sm-6 col-12">
          <CoverLoading
            style={{
              animationDelay: '0.64s',
            }}
          />
        </ColumnLeft>
        <ColumnLeft className="col-lg-4 col-md-4 col-sm-6 col-12">
          <CoverLoading
            style={{
              animationDelay: '0.8s',
            }}
          />
        </ColumnLeft>
      </>
    );
  } else if (blog.tutorials.fetched) {
    tutorials = (
      <>
        {blog.tutorials.data.map((post, index) => (
          <TutorialsList
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
                Tutorials
              </PostListTitle>
            </PostListTitleDiv>
          </div>
          {tutorials}
        </div>
      </div>
    </>
  );
};

export default Tutorials;
