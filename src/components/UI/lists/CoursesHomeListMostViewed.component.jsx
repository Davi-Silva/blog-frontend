/* eslint-disable react/prop-types */
import React from 'react';

import {
  WrapperMostViewed,
  CourseCoverLink,
  CourseCover,
  RelatedProgramDiv,
  ReplatedProgram,
  Content,
  Title,
  AuthorMostViewed,
  PulbishedOnDate,
} from '../../../styled-components/courses-home-list.styled-components';

import Cover from '../../../static/img/course-img.jpg';

import ShareButtonsCouse from '../buttons/ShareButtonCourse';

const CoursesHomeListRecentlyPublished = (props) => {
  const {
    cover,
    title,
    author,
    publishedOn,
    relatedProgram,
  } = props;

  return (
    <>
      <li
        style={{
          display: 'inline-block',
          marginRight: '25px',
        }}
      >
        <WrapperMostViewed>
          <CourseCoverLink
            to="/course/test"
          >
            <CourseCover
              style={{
                backgroundImage: `url(${Cover})`,
              }}
            />
          </CourseCoverLink>
          <Content>
            <Title
              to="/course/test"
            >
              {title}
            </Title>
            <PulbishedOnDate>
              {publishedOn}
            </PulbishedOnDate>
            <AuthorMostViewed
              to="/profile"
            >
              {author}
            </AuthorMostViewed>
          </Content>
        </WrapperMostViewed>
      </li>
    </>
  );
};

export default CoursesHomeListRecentlyPublished;
