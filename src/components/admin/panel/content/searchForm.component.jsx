
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  FaSearch,
} from 'react-icons/fa';
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
    const {
      media,
    } = this.props;
    this.response = await fetch(
      `http://52.70.19.141:5000/${media}/`,
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
      if (podcast.slug === slug) {
        if (medias.length === 0) {
          medias.push(podcast);
        }
        if (medias.length > 1) {
          if (!medias[0].slug.includes(slug)) {
            medias.pop();
          }
        }
      }
    });
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
            autoComplete="off"
            onChange={this.onChangeSearchInput}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </Form>
      </>
    );
  }
}

SearchForm.propTypes = {
  media: PropTypes.string.isRequired,
};
