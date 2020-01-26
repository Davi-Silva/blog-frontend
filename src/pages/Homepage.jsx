import React from 'react';

import { Helmet } from 'react-helmet';

function Homepage(props) {
  const {
    location,
  } = props;
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
            <h1>Homepage</h1>
            <h2>Dashboard</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
