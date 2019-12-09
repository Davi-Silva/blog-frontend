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
    this.concatNewPodcastsList = this.concatNewPodcastsList.bind(this);
  }

  async componentDidMount() {
    const podcastsList = await this.getAllPodcasts();
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

  async concatNewPodcastsList(podcast) {
    const {
      podcasts,
    } = this.state;
    // podcasts.forEach((p) => {
    //   if (p.id === podcast[0].id) {
    //     console.log('id found');
    //     p.inde
    //   }
    // });
    const index = podcasts.findIndex((x) => x.id === podcast[0].id);
    if (index > -1) {
      podcasts.splice(index, 1);
    }
    console.log('index:', index);
    console.log('podcasts:', podcasts);
    this.setStateAsync({
      podcasts,
    });
    if (podcasts.length === 0) {
      this.setStateAsync({
        found: false,
      });
    }
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
              ConcatNewPodcastsList={this.concatNewPodcastsList}
            />
          ))}
        </ul>
      );
    }
    return <div style={{ height: '100%' }}>{list}</div>;
  }
}
