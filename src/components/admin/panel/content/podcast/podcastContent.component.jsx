import React, { Component } from "react";

import List from "../list.component";

export default class PodcastContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podcasts: [],
      formSubmitted: false
    };

    this.componentDidMount = this.componentDidMount(this);
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

  async componentDidMount() {
    const podcastsList = await this.getAllPodcasts();
    console.log("podcast:", podcastsList);
    await this.setStateAsync({ podcasts: podcastsList });
  }

  render() {
    let list;
    if (this.state.podcasts.length == 0) {
      list = (
        <h6 style={{ color: "#999", textAlign: "center" }}>
          No Podcasts yet...
        </h6>
      );
    } else {
      list = (
        <ul>
          {this.state.podcasts.map((podcast, key) => {
            return (
              <List
                key={key}
                type={podcast.type}
                category={podcast.category}
                title={podcast.title}
                date={podcast.uploaded_on}
                description={podcast.description}
                slug={podcast.slug}
                path={podcast.audio_file.url}
                liID={`p-${key}`}
              />
            );
          })}
        </ul>
      );
    }
    return <div style={{ height: "100%" }}>{list}</div>;
  }
}
