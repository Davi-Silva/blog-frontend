import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  CourseCoverLink,
  CourseCover,
  Content,
  Title,
  Author,
  Li,
  // PulbishedOnDate,
  Price,
} from '../../../../styled-components/components/most-viewed-courses.styled-components';

import Cover from '../../../../static/img/course-img.jpg';

const CoursesHomeListRecentlyPublished = (props) => {
  const {
    title,
    author,
    // publishedOn,
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

export default CoursesHomeListRecentlyPublished;

CoursesHomeListRecentlyPublished.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  // publishedOn: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
