import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

const HelmetWrapper = (props) => {
  const {
    title,
    metaDescription,
    media,
    cover,
    coverAlt,
    contentUrl,
    audioUrl,
    podcastAudioDuration,
    blogPostPublishedOn,
    blogPostAuthor,
    tagsArray,
    author,
  } = props;


  let metas;

  if (media === 'Podcast') {
    metas = (
      <>
        <meta property="og:music:duration" content={podcastAudioDuration} />
        <meta property="og:type" content="music.song" />
        <meta property="og:image:alt" content={coverAlt} />
        <meta property="og:audio:type" content="audio/mpeg" />
        <meta property="og:audio:type" content="audio/mp3" />
        <meta property="og:audio" content={audioUrl} />
        <meta property="og:audio:secure_url" content={audioUrl} />

        <meta name="twitter:card" content="music.song" />
        <meta name="twitter:image:alt" content="Podcast cover" />
        <meta name="twitter:player" content={audioUrl} />
        <meta name="twitter:width" content="100" />
        <meta name="twitter:height" content="200" />
        <meta name="twitter:player:stream" content={audioUrl} />
      </>
    );
  } else if (media === 'Blog') {
    metas = (
      <>
        <meta property="og:type" content="article" />
        <meta property="og:type:article:published_time" content={blogPostPublishedOn} />
        <meta property="og:type:article:author" content={blogPostAuthor} />
        <meta property="og:type:article:tags" content={tagsArray} />
        <meta property="og:image:alt" content={coverAlt} />

        <meta name="twitter:card" content="article" />
        <meta name="twitter:image:alt" content="Podcast cover" />
      </>
    );
  } else if (media === 'Course') {
    metas = (
      <>
        <meta property="og:type" content="article" />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${title} - ${media} | Cryptic Activist`}</title>
        <meta
          name="description"
          content={metaDescription}
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="es_GB" />
        <meta property="og:site_name" content="CrypticActivist" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={`${cover}`} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:url" content={`${contentUrl}`} />
        <meta name="twitter:site" content="CrypticActivist" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={cover} />
        <meta name="twitter:creator" content={author} />
        {metas}
      </Helmet>
    </>
  );
};

export default HelmetWrapper;

HelmetWrapper.propTypes = {
  title: PropTypes.string,
  metaDescription: PropTypes.string,
  media: PropTypes.string.isRequired,
  cover: PropTypes.string,
  coverAlt: PropTypes.string,
  contentUrl: PropTypes.string.isRequired,
  audioUrl: PropTypes.string,
  podcastAudioDuration: PropTypes.string,
  blogPostPublishedOn: PropTypes.string,
  blogPostAuthor: PropTypes.string,
  tagsArray: PropTypes.shape,
  author: PropTypes.string,
};

HelmetWrapper.defaultProps = {
  title: 'CrypticActivist',
  metaDescription: 'A place where the technology meets freedom.',
  cover: '',
  coverAlt: '',
  audioUrl: '',
  podcastAudioDuration: '',
  blogPostPublishedOn: '',
  blogPostAuthor: '',
  tagsArray: [],
  author: '',
};
