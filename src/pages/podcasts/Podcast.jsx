/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { createMuiTheme, makeStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import AudioPlayer from 'material-ui-audio-player';
import slugify from 'slugify';

import {
  FaSpinner,
} from 'react-icons/fa';

import ShareButtons from '../../components/UI/buttons/ShareButtons';

import ListenOnGooglePodcast from '../../static/img/listen-on-google-podcasts.svg';
import ListenOnSpotifyPodcast from '../../static/img/listen-on-spotify.svg';
import ListenOnITunesPodcast from '../../static/img/listen-on-apple.svg';

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
  // LoadingTitle,
  // LoadingCategory,
  // LoadingAudio,
  // LoadingDescription,
  // LoadingTags,
  RelatedPodcast,
  RelatedPodcastLabel,
  ExternalEpisodeLabel,
  ExternalEpisodeUl,
  // LoadingRelatedPodcastLabel,
  RelatedPodcastList,
  RelatedPodcastLi,
  RelatedPodcastH6,
  LoadingAllContent,
} from '../../styled-components/podcast.styled-components';

import SubNavBar from '../../components/UI/navbar/SubNavBar';
import CoverImage from '../../components/UI/podcast/cover.component';

export default class Podcast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      title: '',
      description: '',
      googleEpisodeUrl: '',
      spotifyEpisodeUrl: '',
      itunesEpisodeUrl: '',
      tags: [],
      uploadedOn: null,
      updatedOn: null,
      audioFileUrl: '',
      cover: null,
      coverAlt: '',
      documentHeight: null,
      relatedCategoryPodcast: [],
    };

    this.muiTheme = createMuiTheme({});
    this.useStyles = makeStyles(() => ({
      playIcon: {
        color: '#0058e4',
        height: '25px',
        width: '25px',
        transition: 'all .2s ease-in-out',
        '&:hover': {
          color: '#333',
        },
        '&:active': {
          color: '#333',
        },
        '&:focus': {
          color: '#333',
        },
      },
      pauseIcon: {
        color: '#0058e4',
        height: '25px',
        width: '25px',
        transition: 'all .2s ease-in-out',
        '&:hover': {
          color: '#333',
        },
        '&:active': {
          color: '#333',
        },
        '&:focus': {
          color: '#333',
        },
      },
      volumeIcon: {
        color: '#0058e4',
        height: '25px',
        width: '25px',
        '&:hover': {
          color: '#333',
        },
        '&:active': {
          color: '#333',
        },
        '&:focus': {
          color: '#333',
        },
      },
      volumeSlider: {
        color: '#0058e4',
        height: '25px',
        width: '25px',
      },
      progressTime: {
        color: '#0058e4',
        lineHeight: '50px',
      },
      mainSlider: {
        color: '#0058e4',
        '& .MuiSlider-rail': {
          color: '#999',
          marginTop: '13px',
        },
        '& .MuiSlider-track': {
          color: '#0058e4',
          marginTop: '13px',
        },
        '& .MuiSlider-thumb': {
          color: '#0058e4',
          top: '10px',
          marginTop: '10px',
        },
      },
    }));

    this.getPodcastBySlug = this.getPodcastBySlug.bind(this);
    this.setStateAsync = this.setStateAsync.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getPodcastByCategory = this.getPodcastByCategory.bind(this);
    // this.covertAllTags = this.covertAllTags.bind(this);
  }

  async componentDidMount() {
    const podcast = await this.getPodcastBySlug();
    if (podcast.length > 0) {
      const {
        slug,
        category,
        title,
        tags,
        description,
        googleEpisodeUrl,
        spotifyEpisodeUrl,
        itunesEpisodeUrl,
        uploadedOn,
        updatedOn,
        audioFile,
        cover,
      } = podcast[0];
      const relatedCategoryPodcast = await this.getPodcastByCategory(category, slug);
      const dateFormatted = this.parseDate(uploadedOn);
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

      const formattedDate = `${months[dateFormatted.getMonth()]} ${dateFormatted.getDate()} ${dateFormatted.getFullYear()}`;
      if (updatedOn === null) {
        await this.setStateAsync({
          slug,
          category,
          title,
          description,
          googleEpisodeUrl,
          spotifyEpisodeUrl,
          itunesEpisodeUrl,
          tags,
          uploadedOn: formattedDate,
          audioFileUrl: audioFile.url,
          cover: cover.url,
          coverAlt: cover.name,
          relatedCategoryPodcast,
        });
      }
      if (updatedOn !== null) {
        const dateFormattedUpdated = this.parseDate(updatedOn);
        const formattedDateUpdated = `${months[dateFormattedUpdated.getMonth()]} ${dateFormattedUpdated.getDate()} ${dateFormattedUpdated.getFullYear()}`;
        await this.setStateAsync({
          slug,
          category,
          title,
          description,
          googleEpisodeUrl,
          spotifyEpisodeUrl,
          itunesEpisodeUrl,
          tags,
          uploadedOn: formattedDate,
          updatedOn: formattedDateUpdated,
          audioFileUrl: audioFile.url,
          cover: cover.url,
          coverAlt: cover.name,
          relatedCategoryPodcast,
        });
      }
    } else {
      const { history } = this.props;
      history.push('/404');
    }
  }

  async getPodcastBySlug() {
    const { match } = this.props;
    const { slug } = match.params;
    this.response = await fetch(
      `https://cryptic-activist-backend.herokuapp.com/podcasts/get/slug/${slug}`,
      {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await this.response.json();
    return data;
  }

  async getPodcastByCategory(category, slug) {
    this.response = await fetch(
      `https://cryptic-activist-backend.herokuapp.com/podcasts/get/category/newest/${slug}/${category}`,
      {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await this.response.json();
    return data;
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  parseDate(input) {
    this.parts = input.match(/(\d+)/g);
    return new Date(this.parts[0], this.parts[1] - 1, this.parts[2]);
  }

  render() {
    const {
      cover,
      coverAlt,
      uploadedOn,
      updatedOn,
      category,
      title,
      audioFileUrl,
      description,
      googleEpisodeUrl,
      spotifyEpisodeUrl,
      itunesEpisodeUrl,
      tags,
      documentHeight,
      relatedCategoryPodcast,
    } = this.state;
    const {
      location,
    } = this.props;

    let helmet;
    let allContentPodcast;
    let podcastUpdated;
    let externalEpisodeUrlLabel;
    let externalGoogleEpisodeUrl;
    let externalSpotifyEpisodeUrl;
    let externalItunesEpisodeUrl;
    let podcastRelatedPodcast;

    if (title === '') {
      helmet = (
        <>
          <Helmet title="Loading..." media="Podcasts" />
        </>
      );
    } else {
      helmet = (
        <>
          <Helmet>
            <title>{`${title} - Podcast | Cryptic Activist`}</title>
            <meta
              name="description"
              content="Meta Description"
            />
            <meta property="og:locale" content="en_US" />
            <meta property="og:locale:alternate" content="en_CA" />
            <meta property="og:locale:alternate" content="es_GB" />
            <meta property="og:site_name" content="CrypticActivist" />
            <meta property="og:description" content="Meta Description" />
            <meta property="og:title" content={title} />
            <meta property="og:image" content={`${cover}`} />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="800" />
            <meta property="og:image:height" content="600" />
            <meta property="og:url" content={`https://hardcore-tesla-e87eac.netlify.com${location.pathname}`} />

            <meta name="twitter:site" content="CrypticActivist" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content="Meta Description" />
            <meta name="twitter:image" content={cover} />

            <meta property="og:music:duration" content="" />
            <meta property="og:type" content="music.song" />
            <meta property="og:image:alt" content={coverAlt} />
            <meta property="og:audio:type" content="audio/mpeg" />
            <meta property="og:audio:type" content="audio/mp3" />
            <meta property="og:audio" content={audioFileUrl} />
            <meta property="og:audio:secure_url" content={audioFileUrl} />

            <meta name="twitter:card" content="music.song" />
            <meta name="twitter:image:alt" content="Podcast cover" />
            <meta name="twitter:player" content={audioFileUrl} />
            <meta name="twitter:width" content="100" />
            <meta name="twitter:height" content="200" />
            <meta name="twitter:player:stream" content={audioFileUrl} />
          </Helmet>
        </>
      );
    }

    if (title === ''
    || cover === ''
    || coverAlt === ''
    || description === ''
    || category === ''
    || tags === '') {
      allContentPodcast = (
        <LoadingAllContent>
          <FaSpinner />
        </LoadingAllContent>
      );
    } else {
      if (updatedOn === null) {
        podcastUpdated = (
          <UploadedOn>
       Uploaded on&nbsp;
            <span style={{ color: '#333', fontWeight: '700' }}>{uploadedOn}</span>
          </UploadedOn>
        );
      } else {
        podcastUpdated = (
          <UploadedOn>
         Updated on&nbsp;
            <span style={{ color: '#333', fontWeight: '700' }}>{updatedOn}</span>
          </UploadedOn>
        );
      }

      if (googleEpisodeUrl !== '' || spotifyEpisodeUrl !== '' || itunesEpisodeUrl !== '') {
        externalEpisodeUrlLabel = (
          <>
            <ExternalEpisodeLabel>
              Also available on
            </ExternalEpisodeLabel>
          </>
        );
      }

      if (googleEpisodeUrl === '') {
        externalGoogleEpisodeUrl = (
          <>
          </>
        );
      } else {
        externalGoogleEpisodeUrl = (
          <>
            <li>
              <a href={googleEpisodeUrl} target="_blank" rel="noopener noreferrer">
                <img src={ListenOnGooglePodcast} alt="Listen on Google Podcasts" />
              </a>
            </li>
          </>
        );
      }

      if (spotifyEpisodeUrl === '') {
        externalSpotifyEpisodeUrl = (
          <>
          </>
        );
      } else {
        externalSpotifyEpisodeUrl = (
          <>
            <li>
              <a href={spotifyEpisodeUrl} target="_blank" rel="noopener noreferrer">
                <img src={ListenOnSpotifyPodcast} alt="Listen on Google Podcasts" />
              </a>
            </li>
          </>
        );
      }

      if (itunesEpisodeUrl === '') {
        externalItunesEpisodeUrl = (
          <>
          </>
        );
      } else {
        externalItunesEpisodeUrl = (
          <>
            <li>
              <a href={itunesEpisodeUrl} target="_blank" rel="noopener noreferrer">
                <img src={ListenOnITunesPodcast} alt="Listen on Google Podcasts" />
              </a>
            </li>
          </>
        );
      }

      if (relatedCategoryPodcast.length !== 0) {
        podcastRelatedPodcast = (
          <RelatedPodcastLabel>
            Related Blog Posts
            <br />
            <RelatedPodcastList>
              {
               relatedCategoryPodcast.map((podcast, key) => (
                 <RelatedPodcastLi
                   key={key}
                 >
                   <RelatedPodcast to={podcast.slug}>
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
      allContentPodcast = (
        <>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <Aside>
              <CoverImage cover={cover} coverAlt={coverAlt} documentHeight={documentHeight} />
              <ShareButtonsDiv>
                <ShareButtons path={`https://hardcore-tesla-e87eac.netlify.com${location.pathname}`} />
              </ShareButtonsDiv>
            </Aside>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <Wrapper>
              {podcastUpdated}
              <Title>{title}</Title>
              <Category>
                {category}
              </Category>
              <ThemeProvider theme={this.muiTheme}>
                <AudioPlayer
                  elevation={0}
                  width="100%"
                  variation="default"
                  spacing={1}
                  height="55px"
                  order="standart"
                  preload="auto"
                  useStyles={this.useStyles}
                  src={audioFileUrl}
                  debug
                />
              </ThemeProvider>
              <Description
                dangerouslySetInnerHTML={{ __html: description }}
              />
              {externalEpisodeUrlLabel}
              <br />
              <ExternalEpisodeUl>
                {externalGoogleEpisodeUrl}
                {externalSpotifyEpisodeUrl}
                {externalItunesEpisodeUrl}
              </ExternalEpisodeUl>
              <TagsUl>
                {
                tags.map((tag, key) => (
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
          {' '}
        </>
      );
    }


    return (
      <>
        {helmet}
        <SubNavBar media="Podcast" category={category} title={title} />
        <div className="container">
          <div className="row">
            {allContentPodcast}
          </div>
        </div>
      </>
    );
  }
}
