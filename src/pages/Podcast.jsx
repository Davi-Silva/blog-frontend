import React, { Component } from "react";

import { AudioPlayer } from "../styled-components/media_players.styled-component";

export default class Podcast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: "",
      title: "",
      description: "",
      audio_file_url: null
    };

    this.getPodcastBySlug = this.getPodcastBySlug.bind(this);
    this.setStateAsync = this.setStateAsync.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async getPodcastBySlug() {
    const response = await fetch(
      `http://localhost:5000/podcasts/get/${this.props.match.params.slug}`,
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
    let podcast = await this.getPodcastBySlug();
    if (podcast.length > 0) {
      podcast = podcast[0];
      console.log("podcast:", podcast.audio_file.url);
      await this.setStateAsync({
        slug: podcast.slug,
        title: podcast.title,
        description: podcast.description,
        audio_file_url: podcast.audio_file.url
      });
    } else {
      this.props.history.push("/404");
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.state.title}</h1>
        {this.state.description}
        <AudioPlayer autoPlay controls name="podcast">
          <source src={this.state.audio_file_url} type="audio/mp3" />
          Your browser does not support this feature.
        </AudioPlayer>
        <AudioPlayer controls name="media">
          <source src={this.state.audio_file_url} type="audio/mp3" />
        </AudioPlayer>
        <p>{this.state.audio_file_url}</p>
      </React.Fragment>
    );
  }
}
