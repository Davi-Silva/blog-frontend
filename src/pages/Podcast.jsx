/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import { createMuiTheme, makeStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import AudioPlayer from 'material-ui-audio-player';

import {
  Wrapper,
  Title,
  Category,
  Description,
  UploadedOn,
  Update,
  MoreEpisodes,
} from '../styled-components/podcast.styled-components';

import AdvertisementSquare from '../components/UI/ads/AdvertisementSquare.component';
import SubNavBar from '../components/UI/navbar/SubNavBar.component';
import CoverImage from '../components/UI/pdocast/cover.component';


export default class Podcast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      title: '',
      description: '',
      tags: '',
      uploadedOn: null,
      updatedOn: null,
      audioFileUrl: '',
      cover: null,
      coverAlt: '',
      documentHeight: null,
    };

    this.getPodcastBySlug = this.getPodcastBySlug.bind(this);
    this.setStateAsync = this.setStateAsync.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    const podcast = await this.getPodcastBySlug();
    if (podcast.length > 0) {
      const {
        slug, category, title, tags, description, uploadedOn, updatedOn, audioFile, cover,
      } = podcast[0];
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
          tags,
          uploadedOn: formattedDate,
          audioFileUrl: audioFile.url,
          cover: cover.url,
          coverAlt: cover.name,
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
          tags,
          uploadedOn: formattedDate,
          updatedOn: formattedDateUpdated,
          audioFileUrl: audioFile.url,
          cover: cover.url,
          coverAlt: cover.name,
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
      `https://course-backend.herokuapp.com/podcasts/get/${slug}`,
      // `http://localhost:5000/podcasts/get/${slug}`,
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
      cover, coverAlt, uploadedOn, updatedOn, category, title, audioFileUrl, description, tags, documentHeight,
    } = this.state;
    const { match } = this.props;
    const { slug } = match.params;
    const muiTheme = createMuiTheme({});
    const src = [
      `${audioFileUrl}`,
    ];
    console.log('audioFileUrl:', audioFileUrl);
    console.log('src:', src);
    const useStyles = makeStyles((theme) => ({
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
    let podcastUpdated;
    if (updatedOn === null) {
      podcastUpdated = (
        <UploadedOn>
      Uploaded on&nbsp;
          <span style={{ color: '#333', fontWeight: '700' }}>{uploadedOn}</span>
        </UploadedOn>
      );
    } else if (updatedOn !== null) {
      podcastUpdated = (
        <UploadedOn>
        Updated on&nbsp;
          <span style={{ color: '#333', fontWeight: '700' }}>{updatedOn}</span>
        </UploadedOn>
      );
    }
    return (
      <>
        <SubNavBar media="Podcast" category={category} title={title} />
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <aside style={{ marginTop: '20px' }}>
                <CoverImage cover={cover} coverAlt={coverAlt} documentHeight={documentHeight} />
              </aside>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-12">
              <Wrapper>
                {/* <Update to={`/edit/podcast/${slug}`}>
                <i className="fas fa-edit" />
              </Update> */}
                {podcastUpdated}
                <Title>{title}</Title>
                <Category>
                  {category}
                </Category>
                <ThemeProvider theme={muiTheme}>
                  <AudioPlayer
                    elevation={0}
                    width="100%"
                    variation="default"
                    spacing={1}
                    height="55px"
                    order="standart"
                    preload="auto"
                    useStyles={useStyles}
                    src={audioFileUrl}
                    debug
                  />
                </ThemeProvider>
                <Description
                  dangerouslySetInnerHTML={{ __html: description }}
                />
                <p style={{ fontSize: '14px' }}>
Tags:&nbsp;
                  <b style={{ fontSize: '16px' }}>{tags}</b>
                </p>
                <hr />
                <MoreEpisodes to="/podcasts">More Episodes</MoreEpisodes>
              </Wrapper>
            </div>
          </div>
        </div>
      </>
    );
  }
}
