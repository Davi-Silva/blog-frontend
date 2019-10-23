import React, { Component } from "react";

import PodcastsList from "../components/UI/lists/PodcastsList.component";

export default class Podcasts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      podcasts: []
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.getAllPodcasts = this.getAllPodcasts.bind(this);
  }

  async getAllPodcasts() {
    const response = await fetch("http://localhost:5000/podcasts", {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      }
    });
    let data = await response.json();
    return data;
  }

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  async componentDidMount() {
    let podcastsList = await this.getAllPodcasts();
    console.log("Podcasts:", podcastsList);
    await this.setStateAsync({ podcasts: podcastsList });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul>
                {this.state.podcasts.map((podcast, key) => {
                  return (
                    <PodcastsList
                      key={key}
                      type={podcast.type}
                      category={podcast.category}
                      title={podcast.title}
                      date={podcast.uploaded_on}
                      description={podcast.description}
                      slug={podcast.slug}
                      cover={podcast.cover.url}
                      path={podcast.audio_file.url}
                      liID={`p-${key}`}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
