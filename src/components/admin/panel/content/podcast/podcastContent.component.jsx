/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';

import List from './podcastList.component';

export default class PodcastContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podcasts: [],
    };
    this.componentDidMount = this.componentDidMount(this);
  }

  async componentDidMount() {
    const podcastsList = await this.getAllPodcasts();
    console.log('podcast:', podcastsList);
    await this.setStateAsync({ podcasts: podcastsList });
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  async getAllPodcasts() {
    this.response = await fetch(
      'https://cryptic-activist-backend.herokuapp.com/podcasts/',
      // 'https://cryptic-activist-backend.herokuapp.com/podcasts/',
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
    const { podcasts } = this.state;
    if (podcasts.length === 0) {
      list = (
        <h6 style={{ color: '#999', textAlign: 'center' }}>
          No Podcasts yet...
        </h6>
      );
    } else {
      list = (
        <ul>
          {podcasts.reverse().map((podcast, key) => (
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
