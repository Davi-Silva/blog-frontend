
import React from 'react';
// import slugify from 'slugify';
import PropTypes from 'prop-types';

import {
  Wrapper,
  CourseCoverLink,
  CourseCover,
  Content,
  Title,
  Author,
} from '../../../styled-components/my-courses-list.styled-components';

import Cover from '../../../static/img/course-img.jpg';

import ShareButtonsCouse from '../buttons/ShareButtonCourse';

const CoursesRelatedProgramList = (props) => {
  const {
    // cover,
    title,
    author,
    publishedOn,
    // relatedProgram,
  } = props;

  return (
    <Wrapper className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4 col-12 p-0">
          <CourseCoverLink
            to="/course/test"
          >
            <CourseCover
              style={{
                backgroundImage: `url(${Cover})`,
              }}
            />
          </CourseCoverLink>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-8 col-12 p-0">
          <Content>
            <Title
              to="/course/test"
            >
              {title}
            </Title>
            <Author
              to="/profile"
            >
              {author}
            </Author>
            <p>{publishedOn}</p>
            <ShareButtonsCouse />
          </Content>
        </div>
      </div>
    </Wrapper>
  );
};

export default CoursesRelatedProgramList;

CoursesRelatedProgramList.propTypes = {
  // cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publishedOn: PropTypes.string.isRequired,
  // relatedProgram: PropTypes.string.isRequired,
};
