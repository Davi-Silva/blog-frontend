import React, { Component } from 'react';

import {
  FaSpinner,
} from 'react-icons/fa';
import PodcastsList from '../components/UI/lists/PodcastsList.component';
import AdvertisementSquare from '../components/UI/ads/AdvertisementSquare.component';

import SubNavBar from '../components/UI/navbar/SubNavBar';

import { LoadingAllContent } from '../styled-components/podcast.styled-components';

export default class Podcasts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      podcasts: [],
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.getAllPodcasts = this.getAllPodcasts.bind(this);
  }

  async componentDidMount() {
    const podcastsList = await this.getAllPodcasts();
    await this.setStateAsync({ podcasts: podcastsList });
  }

  async getAllPodcasts() {
    // this.response = await fetch('https://cryptic-activist-backend.herokuapp.com/podcasts', {
    this.response = await fetch('http://localhost:5000/podcasts/short', {
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

  render() {
    const { podcasts } = this.state;
    let allPodcasts;
    if (podcasts.length === 0) {
      allPodcasts = (
        <LoadingAllContent>
          <FaSpinner />
        </LoadingAllContent>
      );
    } else {
      allPodcasts = (
        <>
          <div className="col-lg-7 col-md-9 col-sm-12 col-12">
            <ul>
              {podcasts.reverse().map((podcast, key) => (
                <PodcastsList
                  key={key}
                  category={podcast.category}
                  title={podcast.title}
                  date={podcast.uploadedOn}
                  slug={podcast.slug}
                  cover={podcast.cover.url}
                  liID={`p-${key}`}
                />
              ))}
            </ul>
          </div>
          <div className="col-lg-5 col-md-3 col-sm-12 col-12">
            <aside style={{ marginTop: '20px' }}>
              {/* <AdvertisementSquare /> */}
            </aside>
          </div>
        </>
      );
    }
    return (
      <>
        <SubNavBar media="Podcasts" category="" title="" />
        <div className="container">
          <div className="row">
            {allPodcasts}
          </div>
        </div>
      </>
    );
  }
}
