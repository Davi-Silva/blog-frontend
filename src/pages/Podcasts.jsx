import React, { Component } from 'react';

import PodcastsList from '../components/UI/lists/PodcastsList.component';
import AdvertisementSquare from '../components/UI/ads/AdvertisementSquare.component';

import SubNavBar from '../components/UI/navbar/SubNavBar.component';

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
    // this.response = await fetch('http://localhost:5000/podcasts', {
      this.response = await fetch('https://course-backend.herokuapp.com/podcasts', {
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

    return (
      <>
        <SubNavBar media="Podcasts" category="" title="" />
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-12">
              <ul>
                {podcasts.reverse().map((podcast, key) => (
                  <PodcastsList
                    key={key}
                    type={podcast.type}
                    category={podcast.category}
                    title={podcast.title}
                    date={podcast.uploadedOn}
                    description={podcast.description}
                    slug={podcast.slug}
                    cover={podcast.cover.url}
                    path={podcast.audioFile.url}
                    liID={`p-${key}`}
                  />
                ))}
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
              <aside style={{ marginTop: '20px' }}>
                <AdvertisementSquare />
              </aside>
            </div>
          </div>
        </div>
      </>
    );
  }
}
