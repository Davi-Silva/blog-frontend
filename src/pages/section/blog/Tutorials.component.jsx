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
