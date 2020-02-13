/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import _ from 'lodash';

import {
  FaSpinner,
} from 'react-icons/fa';

import { Helmet } from 'react-helmet';

import BitcoinDoddle from '../../static/img/no-content-img.png';
import GooglePodcast from '../../static/img/google-podcasts.svg';
import SpotifyPodcast from '../../static/img/spotify.svg';
import ITunesPodcast from '../../static/img/itunes.svg';
import HostPicture from '../../static/img/davi-silva.png';

import Ads from '../../components/UI/ads/AdvertisementSquare.component';

import PodcastsList from '../../components/UI/lists/PodcastsList.component';

import * as PodcastsAction from '../../store/actions/podcasts/podcasts';

import {
  Container,
  Logo,
  Host,
  AvailableOn,
  LoadingAllContent,
  InfinitePodcastList,
  NoContentDiv,
  NoContentImg,
  NoContentP,
  StickyWrapper,
} from '../../styled-components/podcasts.styled-components';

const Podcasts = (props) => {
  const podcasts = useSelector((state) => state.podcasts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(PodcastsAction.getPodcasts());
  }, []);


  const {
    location,
  } = props;

  let allPodcasts;
  let helmet;

  if (podcasts.loading) {
    helmet = (
      <>
        <Helmet title="Loading..." media="Podcasts" />
      </>
    );
  } else if (podcasts.fetched) {
    helmet = (
      <>
        <Helmet>
          <title>Home - Podcast | Cryptic Activist</title>
          <meta
            name="description"
            content="Meta Description"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:locale:alternate" content="en_CA" />
          <meta property="og:locale:alternate" content="es_GB" />
          <meta property="og:site_name" content="Cryptic Activist" />
          <meta property="og:description" content="Meta Description" />
          <meta property="og:title" content="Home - Podcast | Cryptic Activist" />
          <meta property="og:url" content={`https://crypticactivist.com${location.pathname}`} />

          <meta name="twitter:site" content="Cryptic Activist" />
          <meta name="twitter:title" content="Home - Podcast | Cryptic Activist" />
          <meta name="twitter:description" content="Meta Description" />

          <meta property="og:type" content="article" />
          <meta name="twitter:card" content="music.song" />
        </Helmet>
      </>
    );
  }


  if (podcasts.loading) {
    allPodcasts = (
      <>
        <LoadingAllContent>
          <FaSpinner />
        </LoadingAllContent>
      </>
    );
  } else if (podcasts.fetched && !_.isEmpty(podcasts.data)) {
    if (podcasts.data.length > 0) {
      allPodcasts = (
        <>
          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
            <div className="row">
              {podcasts.data.map((podcast) => (
                <PodcastsList
                  key={podcast.id}
                  category={podcast.category}
                  title={podcast.title}
                  date={podcast.uploadedOn}
                  slug={podcast.slug}
                  cover={podcast.cover.url}
                  liID={`p-${podcast.id}`}
                />
              ))}
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
            <StickyWrapper>
              <Ads />
            </StickyWrapper>
          </div>
        </>
      );
    }
  }

  if (podcasts.data.length === 0 && podcasts.fetched) {
    allPodcasts = (
      <>
        <NoContentDiv>
          <NoContentImg src={BitcoinDoddle} />
          <NoContentP>
            No Podcast has been found.
          </NoContentP>
        </NoContentDiv>
      </>
    );
  }
  return (
    <>
      {helmet}
      <div
        className="container"
        style={{
          marginTop: '15px',
          marginBottom: '50px',
        }}
      >
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <Logo className="podcast-logo" src={BitcoinDoddle} alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <Host>
              <Link to="//twitter.com/" target="_blank">
                <ul>
                  <li>
                    <img src={HostPicture} alt="" />
                  </li>
                  <li className="hostInfo">
                    <p>Davi Silva</p>
                    <p className="twitter">@thecrypticdavid</p>
                    <p className="desc">Host of Cryptic Activist</p>
                  </li>
                </ul>
              </Link>
            </Host>
          </div>
          <AvailableOn className="col-12">
            <h6>Also Available on</h6>
            <ul>
              <li>
                <Link to="//www.google.ca/" target="_blank">
                  <img src={GooglePodcast} alt="" />
                </Link>
              </li>
              <li>
                <Link to="//podcasters.spotify.com/" target="_blank">
                  <img src={SpotifyPodcast} alt="" />
                </Link>
              </li>
              <li>
                <Link to="//www.apple.com/ca/itunes/podcasts/discover/" target="_blank">
                  <img src={ITunesPodcast} alt="" />
                </Link>
              </li>
            </ul>
          </AvailableOn>

        </div>
      </div>
      <Container className="container" style={{ marginTop: '25px', marginBottom: '25px' }}>
        <div className="row">
          {allPodcasts}
        </div>
      </Container>
    </>
  );
};

export default Podcasts;
