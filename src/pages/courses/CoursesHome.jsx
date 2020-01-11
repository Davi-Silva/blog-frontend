import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

import TopCover from '../section/courses-home/TopCover.component';
import UnderTopCoverStrap from '../section/courses-home/UnderTopCoverStrap.component';
import RecentlyPublishedCourses from '../section/courses-home/RecentlyPublished.component';
import MostViewedCourses from '../section/courses-home/MostViewed.component';
import RecentCategories from '../section/courses-home/RecentCategories.component';
import Statements from '../section/courses-home/Statements.component';
import NewsletterSection from '../section/courses-home/NewsletterSection.component';


// import Blockchain from '../../static/img/blockchain.png';

const CoursesHome = (props) => {
  let helmet;
  const {
    location,
  } = props;

  if (false) {
    helmet = (
      <>
        <Helmet title="Loading..." media="Podcasts" />
      </>
    );
  } else {
    helmet = (
      <>
        <Helmet>
          <title>Home - Station | Cryptic Activist</title>
          <meta
            name="description"
            content="Meta Description"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:locale:alternate" content="en_CA" />
          <meta property="og:locale:alternate" content="es_GB" />
          <meta property="og:site_name" content="CrypticActivist" />
          <meta property="og:description" content="Meta Description" />
          <meta property="og:title" content="Home - Podcast | Cryptic Activist" />
          <meta property="og:url" content={`https://hardcore-tesla-e87eac.netlify.com${location.pathname}`} />

          <meta name="twitter:site" content="CrypticActivist" />
          <meta name="twitter:title" content="Home - Station | Cryptic Activist" />
          <meta name="twitter:description" content="Meta Description" />

          <meta property="og:type" content="article" />
          <meta name="twitter:card" content="article" />
        </Helmet>
      </>
    );
  }

  return (
    <>
      {helmet}
      <TopCover />
      <UnderTopCoverStrap />
      <RecentlyPublishedCourses />
      <Statements />
      <MostViewedCourses />
      <NewsletterSection />
      <RecentCategories />
    </>
  );
};

export default CoursesHome;

CoursesHome.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

CoursesHome.defaultProps = {
  location: {
    pathname: '/',
  },
};
