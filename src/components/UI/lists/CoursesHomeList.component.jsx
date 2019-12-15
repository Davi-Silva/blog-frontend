/* eslint-disable react/prop-types */
import React from 'react';

import {
  Wrapper,
  CourseCoverLink,
  CourseCover,
  RelatedProgramDiv,
  ReplatedProgram,
  Content,
  Title,
  Author,
  PulbishedOnDate,
} from '../../../styled-components/courses-home-list.styled-components';

import Cover from '../../../static/img/course-img.jpg';

import ShareButtonsCouse from '../buttons/ShareButtonCourse';

const CoursesHomeList = (props) => {
  const {
    cover,
    title,
    author,
    publishedOn,
    relatedProgram,
  } = props;

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
      <Wrapper>
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
          <Author
            to="/profile"
          >
            {author}
          </Author>
        </Content>
      </Wrapper>
    </div>
  );
};

export default CoursesHomeList;
