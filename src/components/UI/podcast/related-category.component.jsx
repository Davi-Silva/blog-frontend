
import React, { Component } from 'react';

import {
  RelatedPodcast,
  RelatedPodcastLabel,
  LoadingRelatedPodcastLabel,
  RelatedPodcastList,
  RelatedPodcastLi,
  RelatedPodcastH6,
} from '../../../styled-components/podcast.styled-components';

export default class RelatedCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedCategoryPodcast: [],
      categoryPodcast: '',
    };
    this.setStateAsync = this.setStateAsync.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getPodcastByCategory = this.getPodcastByCategory.bind(this);
  }

  componentDidMount() {
    const { category, slug } = this.props;
    this.setState({
      categoryPodcast: category,
    });
    const { categoryPodcast } = this.state;
    const relatedCategoryPodcast = this.getPodcastByCategory(categoryPodcast);
    let count = 0;
    relatedCategoryPodcast.forEach((podcast) => {
      if (podcast.slug === slug) {
        relatedCategoryPodcast.splice(count, count + 1);
      }
      count += 1;
    });
    this.setState({
      relatedCategoryPodcast,
    });
  }

  async getPodcastByCategory(category) {
    this.response = await fetch(
      `http://localhost:5000/podcasts/get/category/${category}`,
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

  render() {
    const { relatedCategoryPodcast } = this.state;
    let podcastRelatedPodcast;


    if (relatedCategoryPodcast.length === 0) {
      podcastRelatedPodcast = (
        <LoadingRelatedPodcastLabel />
      );
    } else {
      podcastRelatedPodcast = (
        <RelatedPodcastLabel>
          Related Blog Posts
          <br />
          <RelatedPodcastList>
            {
              relatedCategoryPodcast.map((podcast) => (
                <RelatedPodcastLi
                  key={podcast.id}
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

    return (
      <>
        {podcastRelatedPodcast}
      </>
    );
  }
}
