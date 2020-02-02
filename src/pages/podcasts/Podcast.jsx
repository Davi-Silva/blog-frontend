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

import * as PodcastActions from '../../store/actions/podcasts/podcast';
import * as RelatedPodcasts from '../../store/actions/podcasts/relatedPodcast';

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
  const podcast = useSelector((state) => state.podcast.podcast);
  const relatedPodcast = useSelector((state) => state.podcast.relatedPodcasts);
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
         relatedPodcast.data.map((related) => (
           <RelatedPodcastLi
             key={related.id}
           >
             <RelatedPodcast to={`/podcast/${podcast.data.slug}`}>
               <img
                 src={related.cover.url}
                 alt={related.cover.name}
                 style={{
                   borderRadius: '5px',
                 }}
               />
               <br />
               <RelatedPodcastH6>
                 {related.title}
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
  let googleExternalPodcast;
  let spotifyExternalPodcast;
  let itunesExternalPodcast;


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
        dispatch(RelatedPodcasts.getGetRelatedPodcasts(podcast.data.category, podcast.data.slug));
        count += 1;
      }
    }

    if (podcast.data.updatedOn === null) {
      podcastUpdated = (
        <UploadedOn>
     Uploaded on&nbsp;
          <span style={{ color: '#333', fontWeight: '700' }}>{formatDate(podcast.data.uploadedOn)}</span>
        </UploadedOn>
      );
    } else {
      podcastUpdated = (
        <UploadedOn>
       Updated on&nbsp;
          <span style={{ color: '#333', fontWeight: '700' }}>{formatDate(podcast.data.updatedOn)}</span>
        </UploadedOn>
      );
    }

    if (!_.isEmpty(podcast.data.audioFile)) {
      audio = (
        <>
          <AudioPlayer
            audioFileUrl={podcast.data.audioFile.url}
          />
        </>
      );
    } else {
      audio = (
        <>
        </>
      );
    }

    if (podcast.data.googleEpisodeUrl !== '') {
      googleExternalPodcast = (
        <>
          <li>
            <a href={podcast.data.googleEpisodeUrl} target="_blank" rel="noopener noreferrer">
              <img src={ListenOnGooglePodcast} alt="Listen on Google Podcasts" />
            </a>
          </li>
        </>
      );
    } else {
      googleExternalPodcast = (
        <>
        </>
      );
    }
    if (podcast.data.spotifyEpisodeUrl !== '') {
      spotifyExternalPodcast = (
        <>
          <li>
            <a href={podcast.data.spotifyEpisodeUrl} target="_blank" rel="noopener noreferrer">
              <img src={ListenOnSpotifyPodcast} alt="Listen on Spotify Podcasts" />
            </a>
          </li>
        </>
      );
    } else {
      spotifyExternalPodcast = (
        <>
        </>
      );
    }
    if (podcast.data.itunesEpisodeUrl !== '') {
      itunesExternalPodcast = (
        <>
          <li>
            <a href={podcast.data.itunesEpisodeUrl} target="_blank" rel="noopener noreferrer">
              <img src={ListenOnITunesPodcast} alt="Listen on iTunes Podcasts" />
            </a>
          </li>
        </>
      );
    } else {
      itunesExternalPodcast = (
        <>
        </>
      );
    }


    helmet = (
      <>
        <Helmet>
          <title>{`${podcast.data.title} - Podcast | Cryptic Activist`}</title>
          <meta
            name="description"
            content="Meta Description"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:locale:alternate" content="en_CA" />
          <meta property="og:locale:alternate" content="es_GB" />
          <meta property="og:site_name" content="Cryptic Activist" />
          <meta property="og:description" content="Meta Description" />
          <meta property="og:title" content={podcast.data.title} />
          <meta property="og:image" content={`${podcast.data.cover}`} />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:type" content="image/jpg" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="600" />
          <meta property="og:url" content={`https://crypticactivist.com${location.pathname}`} />

          <meta name="twitter:site" content="Cryptic Activist" />
          <meta name="twitter:title" content={podcast.data.title} />
          <meta name="twitter:description" content="Meta Description" />
          <meta name="twitter:image" content={podcast.data.cover} />

          <meta property="og:music:duration" content="" />
          <meta property="og:type" content="music.song" />
          <meta property="og:image:alt" content={podcast.data.coverAlt} />
          <meta property="og:audio:type" content="audio/mpeg" />
          <meta property="og:audio:type" content="audio/mp3" />
          <meta property="og:audio" content={podcast.data.audioFile.url} />
          <meta property="og:audio:secure_url" content={podcast.data.audioFile.url} />

          <meta name="twitter:card" content="music.song" />
          <meta name="twitter:image:alt" content="Podcast cover" />
          <meta name="twitter:player" content={podcast.data.audioFile.url} />
          <meta name="twitter:width" content="100" />
          <meta name="twitter:height" content="200" />
          <meta name="twitter:player:stream" content={podcast.data.audioFile.url} />
        </Helmet>
      </>
    );
    subMenu = (
      <SubNavBar media="Podcast" category={podcast.data.category} title={podcast.data.title} />
    );
    content = (
      <>
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
          <Aside>
            <CoverImage cover={podcast.data.cover.url} coverAlt={podcast.data.coverAlt} />
            <ShareButtonsDiv>
              <ShareButtons
                path={`https://crypticactivist.com${location.pathname}`}
                size={30}
              />
            </ShareButtonsDiv>
          </Aside>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
          <Wrapper>
            {podcastUpdated}
            <Title>{podcast.data.title}</Title>
            <Category
              to={`/podcasts/category/${slugify(podcast.data.category.toLowerCase())}`}
            >
              {podcast.data.category}
            </Category>
            {audio}
            <Description
              dangerouslySetInnerHTML={{ __html: podcast.data.description }}
            />
            <ExternalEpisodeLabel>
              Also available on
            </ExternalEpisodeLabel>
            <br />
            <ExternalEpisodeUl>
              {googleExternalPodcast}
              {spotifyExternalPodcast}
              {itunesExternalPodcast}
            </ExternalEpisodeUl>
            <TagsUl>
              {
              podcast.data.tags.map((tag) => (

                <TagLi
                  key={tag.id}
                >
                  <Tag to={`/podcasts/tags/${slugify(tag.toLowerCase())}`}>
                    {tag}
                  </Tag>
                </TagLi>

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
