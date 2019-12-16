/* eslint-disable react/prop-types */
import React from 'react';
import slugify from 'slugify';

import {
  Wrapper,
  CourseCoverLink,
  CourseCover,
  Content,
  Title,
  Li,
  Author,
  Price,
  // PulbishedOnDate,
} from '../../../../styled-components/components/recently-published.styled-components';

import Cover from '../../../../static/img/course-img.jpg';

// import ShareButtonsCouse from '../../buttons/ShareButtonCourse';

const CoursesHomeListMostViewed = (props) => {
  const {
    cover,
    title,
    author,
    publishedOn,
    relatedProgram,
    price,
  } = props;

  let tempTitle = title;
  if (title.length > 35) {
    tempTitle = `${title.substring(0, 35).trim()}...`;
  }

  return (
    <>
      <Li>
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
              <p>
                {tempTitle}
              </p>
            </Title>
            {/* <PulbishedOnDate>
              {publishedOn}
            </PulbishedOnDate> */}
            <Price>
              US$
              {' '}
              {price}
            </Price>
            <p>
              <Author
                to="/profile"
              >
                {author}
              </Author>
            </p>
          </Content>
        </Wrapper>
      </Li>
    </>
  );
};

export default CoursesHomeListMostViewed;
