import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

import { Helmet } from 'react-helmet';

import * as HomepageActions from '../store/actions/homepage/homepage';

function Homepage(props) {
  const mostReadPost = useSelector((state) => state.homepage.mostReadPost);
  const {
    location,
  } = props;
  const dispatch = useDispatch();

  console.log('mostReadPost:', mostReadPost);

  useEffect(() => {
    dispatch(HomepageActions.getMostReadPost());
  }, []);

  let mostRead;

  if (mostReadPost.loading) {
    mostRead = (
      <h1>Loading</h1>
    );
  } else if (mostReadPost.fetched) {
    if (!_.isEmpty(mostReadPost.data)) {
      const {
        title,
      } = mostReadPost.data;
      mostRead = (
        <h1>{title}</h1>
      );
    }
  }

  return (
    <>
      <Helmet>
        <title>Home | Cryptic Activist</title>
        <meta
          name="description"
          content="Meta Description"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="es_GB" />
        <meta property="og:site_name" content="Cryptic Activist" />
        <meta property="og:description" content="Meta Description" />
        <meta property="og:title" content="Home | Cryptic Activist" />
        <meta property="og:url" content={`https://crypticactivist.com${location.pathname}`} />

        <meta name="twitter:site" content="Cryptic Activist" />
        <meta name="twitter:title" content="Home | Cryptic Activist" />
        <meta name="twitter:description" content="Meta Description" />

        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="article" />
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {mostRead}
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
