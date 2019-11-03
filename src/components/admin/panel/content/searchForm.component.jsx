/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import { Form } from '../../../../styled-components/admin.styled-components';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      medias: [],
    };

    this.onChangeSearchInput = this.onChangeSearchInput.bind(this);
    this.searchMedia = this.searchMedia.bind(this);
    this.getAllMedias = this.getAllMedias.bind(this);
  }


  async onChangeSearchInput(e) {
    this.setStateAsync({
      query: e.target.value,
    });
    setTimeout(() => {
      this.searchMedia();
    }, 0);
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  async getAllMedias() {
    const { media } = this.props;
    this.response = await fetch(
      // "https://course-backend.herokuapp.com/podcasts/",
      `http://localhost:5000/${media}/`,
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

  async searchMedia() {
    const { query, medias } = this.state;
    const podcastsList = await this.getAllMedias();
    podcastsList.forEach((podcast) => {
      const slug = `${query}`
        .toLowerCase()
        .split(' ')
        .join('-');
      console.log('slug:', slug);
      if (podcast.slug === slug) {
        console.log('Slug is equal');
        if (medias.length === 0) {
          console.log('this.state.medias.length:', medias.length);
          medias.push(podcast);
          console.log('medias:', medias);
          console.log('this.state.medias.length:', medias.length);
        }
        if (medias.length > 1) {
          if (!medias[0].slug.includes(slug)) {
            console.log('DIFFERENT this.state.medias.length:', medias.length);
            console.log('medias:', medias);
            medias.pop();
            console.log('ATER EQUAL this.state.medias.length:', medias.length);
          }
        }
      }
    });
    console.log('this.state.medias:', medias);
  }

  render() {
    return (
      <>
        <Form>
          <input
            type="text"
            name="course"
            id=""
            placeholder="Search"
            onChange={this.onChangeSearchInput}
          />
          <button type="submit">
            <i className="fas fa-search" />
          </button>
        </Form>
      </>
    );
  }
}
