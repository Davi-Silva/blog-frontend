import React, { Component } from "react";

import { Form } from "../../../../styled-components/admin.styled-components";

export default class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };

    this.onChangeSearchInput = this.onChangeSearchInput.bind(this);
    this.searchPodcast = this.searchPodcast.bind(this);
    this.getAllPodcasts = this.getAllPodcasts.bind(this);
  }

  async onChangeSearchInput(e) {
    this.setStateAsync({
      query: e.target.value
    });
    setTimeout(() => {
      this.getAllPodcasts();
    }, 0);
  }

  async searchPodcast() {
    console.log("search form");
    let podcasts_list = await this.getAllPodcasts();
    console.log("podcast_list:", podcasts_list);
  }

  async getAllPodcasts() {
    let response = await fetch(
      // "https://course-backend.herokuapp.com/podcasts/",
      "http://localhost:5000/podcasts/",
      {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    let data = await response.json();
    return data;
  }

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  render() {
    return (
      <React.Fragment>
        <Form>
          <input
            type="text"
            name="course"
            id=""
            placeholder="Search"
            onChange={this.onChangeSearchInput}
          />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </Form>
      </React.Fragment>
    );
  }
}
