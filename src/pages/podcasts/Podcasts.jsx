/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import InfiniteScroll from 'react-infinite-scroll-component';


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
// import AdvertisementSquare from '../components/UI/ads/AdvertisementSquare.component';

import SubNavBar from '../../components/UI/navbar/SubNavBar';
import NewsletterSide from '../../components/UI/newsletter/NewsletterSide.component';
import RecentCategories from '../../components/UI/categories/RecentCategoriesPodcast';

import {
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

export default class Podcasts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      podcasts: [],
      page: 1,
      hasMore: null,
      found: false,
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.getFirstPodcasts = this.getFirstPodcasts.bind(this);
    this.getMorePodcasts = this.getMorePodcasts.bind(this);
  }

  async componentDidMount() {
    const podcastsList = await this.getFirstPodcasts();
    console.log('podcasts:', podcastsList);
    let more = true;
    if (!podcastsList.found) {
      this.setStateAsync({
        found: false,
      });
    }
    if (podcastsList.length > 0) {
      if (podcastsList.length < 10) {
        more = false;
      }
      await this.setStateAsync({
        podcasts: podcastsList,
        hasMore: more,
        found: true,
      });
    }
  }

  async getFirstPodcasts() {
    const { page } = this.state;
    this.response = await fetch(`https://cryptic-activist-backend.herokuapp.com/podcasts/short?page=${page}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await this.response.json();
    return data;
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  async getMorePodcasts() {
    const { page, podcasts } = this.state;
    this.setStateAsync({
      page: page + 1,
    });
    const tempPage = page + 1;
    this.response = await fetch(`https://cryptic-activist-backend.herokuapp.com/podcasts/short?page=${tempPage}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await this.response.json();
    if (data.length < 10) {
      this.setStateAsync({
        podcasts: podcasts.concat(data),
      });
      setTimeout(() => {
        this.setStateAsync({
          hasMore: false,
        });
      }, 10);
    } else {
      this.setStateAsync({
        podcasts: podcasts.concat(data),
      });
    }
  }

  render() {
    const {
      podcasts,
      hasMore,
      found,
    } = this.state;
    const {
      location,
    } = this.props;

    let allPodcasts;
    let helmet;

    if (podcasts.length === 0) {
      helmet = (
        <>
          <Helmet title="Loading..." media="Podcasts" />
        </>
      );
    } else {
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
            <meta property="og:site_name" content="CrypticActivist" />
            <meta property="og:description" content="Meta Description" />
            <meta property="og:title" content="Home - Podcast | Cryptic Activist" />
            <meta property="og:url" content={`https://hardcore-tesla-e87eac.netlify.com${location.pathname}`} />

            <meta name="twitter:site" content="CrypticActivist" />
            <meta name="twitter:title" content="Home - Podcast | Cryptic Activist" />
            <meta name="twitter:description" content="Meta Description" />

            <meta property="og:type" content="article" />
            <meta name="twitter:card" content="music.song" />
          </Helmet>
        </>
      );
    }


    if (!found) {
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
    } else {
      allPodcasts = (
        <>
          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
            <InfinitePodcastList>
              <InfiniteScroll
                dataLength={podcasts.length}
                next={this.getMorePodcasts}
                hasMore={hasMore}
                loader={(
                  <LoadingAllContent>
                    <FaSpinner />
                  </LoadingAllContent>
                )}
                endMessage={(
                  <div />
                )}
              >
                <div className="row">
                  {podcasts.map((podcast, key) => (
                    <PodcastsList
                      key={key}
                      category={podcast.category}
                      title={podcast.title}
                      date={podcast.uploadedOn}
                      slug={podcast.slug}
                      cover={podcast.cover.url}
                      liID={`p-${podcast.id}`}
                    />
                  ))}
                </div>
              </InfiniteScroll>
            </InfinitePodcastList>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
            <StickyWrapper>
              <Ads />
            </StickyWrapper>
          </div>
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
                      <p className="desc">Host of CrypticActivist</p>
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
        {/* <SubNavBar media="Podcasts" category="" title="" /> */}
        <div className="container" style={{ marginTop: '25px' }}>
          <div className="row">
            {allPodcasts}
          </div>
        </div>
      </>
    );
  }
}
