import React, { useContext, useState } from 'react';

import UserProvider from '../contexts/UserProvider';

import TopCover from './section/courses-home/TopCover.component';
import UnderTopCoverStrap from './section/courses-home/UnderTopCoverStrap.component';
import RecentlyPublishedCourses from './section/courses-home/RecentlyPublished.component';
import MostViewedCourses from './section/courses-home/MostViewed.component';
import RecentCategories from './section/courses-home/RecentCategories.component';
import Statements from './section/courses-home/Statements.component';
import NewsletterSection from './section/courses-home/NewsletterSection.component';


import Blockchain from '../static/img/blockchain.png';

const CoursesHome = () => {
  const userInfo = useContext(UserProvider.context);

  return (
    <>
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
