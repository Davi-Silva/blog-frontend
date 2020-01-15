/* eslint react/prop-types: 0 */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Helmet } from 'react-helmet';
import _ from 'lodash';
import slugify from 'slugify';

import {
  FaSpinner,
} from 'react-icons/fa';

import ShareButtons from '../../components/UI/buttons/ShareButtons';
import AudioPlayer from '../../components/UI/player/AudioPlayer';

import ListenOnGooglePodcast from '../../static/img/listen-on-google-podcasts.svg';
import ListenOnSpotifyPodcast from '../../static/img/listen-on-spotify.svg';
import ListenOnITunesPodcast from '../../static/img/listen-on-apple.svg';

import * as PodcastActions from '../../store/actions/podcast';
import * as RelatedPodcasts from '../../store/actions/relatedPodcast';

import {
  Wrapper,
  Aside,
  ShareButtonsDiv,
  Title,
  Category,
  Description,
  TagsUl,
  TagLi,
  Tag,
  UploadedOn,
  MoreEpisodes,
  RelatedPodcast,
  RelatedPodcastLabel,
  ExternalEpisodeLabel,
  ExternalEpisodeUl,
  RelatedPodcastList,
  RelatedPodcastLi,
  RelatedPodcastH6,
  LoadingAllContent,
} from '../../styled-components/podcast.styled-components';

import SubNavBar from '../../components/UI/navbar/SubNavBar';
import CoverImage from '../../components/UI/podcast/cover.component';

let count = 0;

const Podcast = (props) => {
  const podcast = useSelector((state) => state.podcast);
  const relatedPodcast = useSelector((state) => state.relatedPodcast);
  const dispatch = useDispatch();

  const parseDate = (input) => {
    const parts = input.match(/(\d+)/g);
    return new Date(parts[0], parts[1] - 1, parts[2]);
  };

  const formatDate = (uploadedOn) => {
    const dateFormatted = parseDate(uploadedOn);
    const months = [
      'January',
      'February',
      'March',
      'April',
      'may',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    return `${months[dateFormatted.getMonth()]} ${dateFormatted.getDate()} ${dateFormatted.getFullYear()}`;
  };

  useEffect(() => {
    const { match } = props;
    const fullSlug = match.url.slice(9, match.url.length);
    dispatch(PodcastActions.getPodcast(fullSlug));
  }, []);


  const {
    location,
  } = props;

  let helmet;
  let allContentPodcast;
  let podcastUpdated;
  let podcastRelatedPodcast;


  if (!_.isEmpty(relatedPodcast.data)) {
    podcastRelatedPodcast = (
      <RelatedPodcastLabel>
      Related Blog Posts
        <br />
        <RelatedPodcastList>
          {
         relatedPodcast.data.map((podcast, key) => (
           <RelatedPodcastLi
             key={key}
           >
             <RelatedPodcast to={`/podcast/${podcast.slug}`}>
               <img
                 src={podcast.cover.url}
                 alt={podcast.cover.name}
                 style={{
                   borderRadius: '5px',
                 }}
               />
               <br />
               <RelatedPodcastH6>
                 {podcast.title}
               </RelatedPodcastH6>
             </RelatedPodcast>
           </RelatedPodcastLi>
         ))
       }
        </RelatedPodcastList>
      </RelatedPodcastLabel>
    );
  }

  let content;
  let subMenu;
  let audio;

  if (podcast.loading) {
    subMenu = (
      <SubNavBar media="Podcast" category="" title="" />
    );
    content = (
      <>
        <LoadingAllContent>
          <FaSpinner />
        </LoadingAllContent>
      </>
    );
    helmet = (
      <>
        <Helmet title="Loading..." media="Podcasts" />
      </>
    );
  } else if (podcast.fetched) {
    if (!_.isEmpty(podcast.data) && !relatedPodcast.fetch) {
      if (count === 0) {
        dispatch(RelatedPodcasts.getGetRelatedPodcasts(podcast.data[0].category, podcast.data[0].slug));
        count += 1;
      }
    }

    if (podcast.data[0].updatedOn === null) {
      podcastUpdated = (
        <UploadedOn>
     Uploaded on&nbsp;
          <span style={{ color: '#333', fontWeight: '700' }}>{formatDate(podcast.data[0].uploadedOn)}</span>
        </UploadedOn>
      );
    } else {
      podcastUpdated = (
        <UploadedOn>
       Updated on&nbsp;
          <span style={{ color: '#333', fontWeight: '700' }}>{formatDate(podcast.data[0].updatedOn)}</span>
        </UploadedOn>
      );
    }

    if (!_.isEmpty(podcast.data[0].audioFile)) {
      audio = (
        <>
          <AudioPlayer
            audioFileUrl={podcast.data[0].audioFile.url}
          />
        </>
      );
    } else {
      audio = (
        <>
        </>
      );
    }

    helmet = (
      <>
        <Helmet>
          <title>{`${podcast.data[0].title} - Podcast | Cryptic Activist`}</title>
          <meta
            name="description"
            content="Meta Description"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:locale:alternate" content="en_CA" />
          <meta property="og:locale:alternate" content="es_GB" />
          <meta property="og:site_name" content="CrypticActivist" />
          <meta property="og:description" content="Meta Description" />
          <meta property="og:title" content={podcast.data[0].title} />
          <meta property="og:image" content={`${podcast.data[0].cover}`} />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:type" content="image/jpg" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="600" />
          <meta property="og:url" content={`https://hardcore-tesla-e87eac.netlify.com${location.pathname}`} />

          <meta name="twitter:site" content="CrypticActivist" />
          <meta name="twitter:title" content={podcast.data[0].title} />
          <meta name="twitter:description" content="Meta Description" />
          <meta name="twitter:image" content={podcast.data[0].cover} />

          <meta property="og:music:duration" content="" />
          <meta property="og:type" content="music.song" />
          <meta property="og:image:alt" content={podcast.data[0].coverAlt} />
          <meta property="og:audio:type" content="audio/mpeg" />
          <meta property="og:audio:type" content="audio/mp3" />
          <meta property="og:audio" content={podcast.data[0].audioFile.url} />
          <meta property="og:audio:secure_url" content={podcast.data[0].audioFile.url} />

          <meta name="twitter:card" content="music.song" />
          <meta name="twitter:image:alt" content="Podcast cover" />
          <meta name="twitter:player" content={podcast.data[0].audioFile.url} />
          <meta name="twitter:width" content="100" />
          <meta name="twitter:height" content="200" />
          <meta name="twitter:player:stream" content={podcast.data[0].audioFile.url} />
        </Helmet>
      </>
    );
    subMenu = (
      <SubNavBar media="Podcast" category={podcast.data[0].category} title={podcast.data[0].title} />
    );
    content = (
      <>
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
          <Aside>
            <CoverImage cover={podcast.data[0].cover.url} coverAlt={podcast.data[0].coverAlt} />
            <ShareButtonsDiv>
              <ShareButtons path={`https://hardcore-tesla-e87eac.netlify.com${location.pathname}`} />
            </ShareButtonsDiv>
          </Aside>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
          <Wrapper>
            {podcastUpdated}
            <Title>{podcast.data[0].title}</Title>
            <Category
              to={`/podcasts/category/${slugify(podcast.data[0].category.toLowerCase())}`}
            >
              {podcast.data[0].category}
            </Category>
            {audio}
            <Description
              dangerouslySetInnerHTML={{ __html: podcast.data[0].description }}
            />
            <ExternalEpisodeLabel>
              Also available on
            </ExternalEpisodeLabel>
            <br />
            <ExternalEpisodeUl>
              <li>
                <a href={podcast.data[0].googleEpisodeUrl} target="_blank" rel="noopener noreferrer">
                  <img src={ListenOnGooglePodcast} alt="Listen on Google Podcasts" />
                </a>
              </li>
              <li>
                <a href={podcast.data[0].spotifyEpisodeUrl} target="_blank" rel="noopener noreferrer">
                  <img src={ListenOnSpotifyPodcast} alt="Listen on Google Podcasts" />
                </a>
              </li>
              <li>
                <a href={podcast.data[0].itunesEpisodeUrl} target="_blank" rel="noopener noreferrer">
                  <img src={ListenOnITunesPodcast} alt="Listen on Google Podcasts" />
                </a>
              </li>
            </ExternalEpisodeUl>
            <TagsUl>
              {
              podcast.data[0].tags.map((tag, key) => (
                <>
                  <TagLi key={key}>
                    <Tag to={`/podcasts/tags/${slugify(tag.toLowerCase())}`}>
                      {tag}
                    </Tag>
                  </TagLi>
                </>
              ))
            }
            </TagsUl>
            <MoreEpisodes to="/podcasts">More Episodes</MoreEpisodes>
            {podcastRelatedPodcast}
          </Wrapper>
        </div>
      </>
    );
  }

  return (
    <>
      {subMenu}
      <div className="container">
        <div className="row">
          {content}
        </div>
      </div>
    </>
  );
};

export default Podcast;
