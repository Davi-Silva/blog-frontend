import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

const HelmetWrapper = (props) => {
  const {
    title,
    metaDescription,
    media,
  } = props;

  return (
    <>
      <Helmet>
        <title>{`${title} | ${media} | Cryptic Activist`}</title>
        <meta
          name="description"
          content={metaDescription}
        />
      </Helmet>
    </>
  );
};

export default HelmetWrapper;

HelmetWrapper.propTypes = {
  title: PropTypes.string,
  metaDescription: PropTypes.string,
  media: PropTypes.string.isRequired,
};

HelmetWrapper.defaultProps = {
  title: 'CrypticActivist',
  metaDescription: 'A place where the technology meets freedom.',
};
