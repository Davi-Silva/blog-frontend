import React from 'react';
import { Helmet } from 'react-helmet';

import SubNavBarCategories from '../../components/UI/navbar/SubNavBarCategory';
import CurrentTimeDate from '../section/blog/CurrentTimeDate.component';
import MostRecentVideos from '../section/blog/MostRecentVideos.component';
import MainBlogPost from '../section/blog/MainBlogPost.component';
import News from '../section/blog/News.component';
import Tutorials from '../section/blog/Tutorials.component';
import Article from '../section/blog/Articles.component';
import TopAuthor from '../section/blog/TopAuthors.component';
import Newsletter from '../section/blog/Newsletter.component';

const Blog = (props) => {
  const {
    location,
  } = props;


  return (
    <>
      <Helmet>
        <title>Home - Blog | Cryptic Activist</title>
        <meta
          name="description"
          content="Blog Posts"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="es_GB" />
        <meta property="og:site_name" content="CrypticActivist" />
        <meta property="og:description" content="Meta description" />
        <meta property="og:title" content="Home - Blog | Cryptic Activist" />
        <meta property="og:url" content={`https://hardcore-tesla-e87eac.netlify.com${location.pathname}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:site" content="CrypticActivist" />
        <meta name="twitter:title" content="Home - Blog | Cryptic Activist" />
        <meta name="twitter:description" content="metaDescription" />
        <meta name="twitter:card" content="article" />
      </Helmet>
      <SubNavBarCategories />
      <CurrentTimeDate />
      <MainBlogPost />
      <MostRecentVideos />
      <News />
      <Article />
      <TopAuthor />
      <Tutorials />
      <Newsletter />
    </>
  );
};

export default Blog;
