import React, { Component } from "react";

import { Form } from "../../../../styled-components/admin.styled-components";

export default class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      medias: []
    };

    this.onChangeSearchInput = this.onChangeSearchInput.bind(this);
    this.searchMedia = this.searchMedia.bind(this);
    this.getAllMedias = this.getAllMedias.bind(this);
  }

  async onChangeSearchInput(e) {
    this.setStateAsync({
      query: e.target.value
    });
    setTimeout(() => {
      this.searchMedia();
    }, 0);
  }

  async searchMedia() {
    let podcasts_list = await this.getAllMedias();
    podcasts_list.map(podcast => {
      const slug = `${this.state.query}`
        .toLowerCase()
        .split(" ")
        .join("-");
      console.log("slug:", slug)
      if (podcast.slug === slug) {
        console.log("Slug is equal")
        if (this.state.medias.length == 0) {
          console.log("this.state.medias.length:", this.state.medias.length)
          this.state.medias.push(podcast)
          console.log("this.state.medias.length:", this.state.medias.length)
        }
        if (this.state.medias.length == 1) {
          if (!this.state.medias[0].slug.includes(slug)) {
            console.log("DIFFERENT this.state.medias.length:", this.state.medias.length)
            this.state.medias.pop()
            console.log("ATER EQUAL this.state.medias.length:", this.state.medias.length)
          }
        }
      }
    })
    console.log("this.state.medias:", this.state.medias)

  }

  async getAllMedias() {
    let response = await fetch(
      // "https://course-backend.herokuapp.com/podcasts/",
      `http://localhost:5000/${this.props.media}/`,
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
