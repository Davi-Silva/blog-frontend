import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TutorialsList from '../../../components/UI/lists/blog-home/BlogPostListTutorials.component';


import {
  PostListTitleDiv,
  PostListTitle,
  SeeAll,
} from '../../../styled-components/blog-posts-tutorials.styled-components';

import * as TutorialsAction from '../../../store/actions/blog/tutorials';

const Tutorials = () => {
  const tutorialsList = useSelector((state) => state.tutorials);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TutorialsAction.getTutorials());
  }, []);

  let tutorials;

  if (tutorialsList.loading) {
    tutorials = (
      <>
        <p>
          Loading
        </p>
      </>
    );
  } else if (tutorialsList.fetched) {
    tutorials = (
      <>
        {tutorialsList.data.map((post, index) => (
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
          {tutorials}
        </div>
      </div>
    </>
  );
};

export default Tutorials;
