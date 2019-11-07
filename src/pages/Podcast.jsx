/* eslint react/prop-types: 0 */
import React, { Component } from 'react';

import { AudioPlayer } from '../styled-components/media_players.styled-component';
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
      uploadedOn: null,
      updatedOn: null,
      audioFileUrl: null,
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
        slug, category, title, description, uploadedOn, updatedOn, audioFile, cover,
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
      // `https://course-backend.herokuapp.com/podcasts/get/${slug}`,
      `https://course-backend.herokuapp.com/podcasts/get/${slug}`,
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
      cover, coverAlt, uploadedOn, updatedOn, category, title, audioFileUrl, description, documentHeight,
    } = this.state;
    const { match } = this.props;
    const { slug } = match.params;
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
                <CoverImage cover={cover} coverAlt={coverAlt} documentHeight={documentHeight}/>
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
                <AudioPlayer
                  controls
                  name="podcast"
                  style={{ width: '100%' }}
                  src={audioFileUrl}
                  type="audio/mp3"
                />
                <Description
                  dangerouslySetInnerHTML={{ __html: description }}
                />
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
