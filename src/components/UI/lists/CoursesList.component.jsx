/* eslint-disable react/prop-types */
import React from 'react';

import {
  Wrapper,
} from '../../../styled-components/courses-list.styled-components';

import Cover from '../../../static/img/course-img.jpg';

const CoursesList = (props) => {
  const {
    cover,
    title,
    author,
    deadline,
  } = props;

  return (
    <Wrapper>
      <img
        src={Cover}
        alt={title}
      />
      <h2>{title}</h2>
    </Wrapper>
  );
};

export default CoursesList;
