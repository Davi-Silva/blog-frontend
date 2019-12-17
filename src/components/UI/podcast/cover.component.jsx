import React from 'react';
import PropTypes from 'prop-types';

import {
  Cover,
} from '../../../styled-components/podcast.styled-components';

const CoverImage = (props) => {
  const { cover, coverAlt } = props;
  return (
    <>
      <Cover
        src={cover}
        alt={coverAlt}
      />
    </>
  );
};

export default CoverImage;

CoverImage.propTypes = {
  cover: PropTypes.string,
  coverAlt: PropTypes.string,
};

CoverImage.defaultProps = {
  cover: '',
  coverAlt: '',
};
