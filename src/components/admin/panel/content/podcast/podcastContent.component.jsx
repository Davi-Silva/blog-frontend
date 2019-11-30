/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';

// import {
//   FaSpinner,
// } from 'react-icons/fa';
import List from './podcastList.component';

import BitcoinDoddle from '../../../../../static/img/no-content-img.png';

import {
  // LoadingAllContent,
  NoContentDiv,
  NoContentImg,
  NoContentP,
} from '../../../../../styled-components/admin.styled-components';

export default class PodcastContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podcasts: [],
      found: false,
    };
    this.componentDidMount = this.componentDidMount(this);
  }

  async componentDidMount() {
    const podcastsList = await this.getAllPodcasts();
    console.log('podcastsList:', podcastsList);
    if (!podcastsList.found) {
      this.setStateAsync({
        found: false,
      });
    }
    if (podcastsList.length > 0) {
      await this.setStateAsync({
        podcasts: podcastsList,
        found: true,
      });
    }
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  async getAllPodcasts() {
    this.response = await fetch(
      // 'https://cryptic-activist-backend.herokuapp.com/podcasts/',
      'http://localhost:5000/podcasts/',
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

  render() {
    let list;
    const {
      podcasts,
      found,
    } = this.state;
    if (!found) {
      list = (
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
      list = (
        <ul>
          {podcasts.map((podcast, key) => (
            <List
              key={podcast.id}
              type={podcast.type}
              category={podcast.category}
              title={podcast.title}
              date={podcast.uploadedOn}
              description={podcast.description}
              path={podcast.audioFile.url}
              slug={podcast.slug}
              liID={`p-${key}`}
              audioFileId={podcast.audioFile._id}
              coverFileId={podcast.cover._id}
            />
          ))}
        </ul>
      );
    }
    return <div style={{ height: '100%' }}>{list}</div>;
  }
}
