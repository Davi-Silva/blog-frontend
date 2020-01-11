import React from 'react';
import PropTypes from 'prop-types';

import {
  ProgramCover,
  ProgramTitle,
} from '../../styled-components/courses-related-program.styled-component';

import Cover from '../../static/img/circuit.jpg';
// import CoursesRelatedProgram from './CoursesRelatedProgram';

const CoursesRelatedPrograms = (props) => {
  const {
    match,
  } = props;
  const { params } = match;


  return (
    <>
      <ProgramCover
        style={{
          backgroundImage: `url(${Cover})`,
        }}
      >
        <ProgramTitle>
          {params.slug}
        </ProgramTitle>
      </ProgramCover>
    </>
  );
};

export default CoursesRelatedPrograms;

CoursesRelatedPrograms.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
