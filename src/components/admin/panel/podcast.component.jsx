import React, { Component } from "react";

import PodcastContent from "./content/podcast/podcastContent.component";
import SearcForm from "./content/searchForm.component";

import { Add } from "../../../styled-components/admin.styled-components";

import {
  H6,
  Panel,
  Main
} from "../../../styled-components/admin.styled-components";

export default class PodcastPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadPodcast: null,
      editPodcast: null,
      others: null
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.setState({
      uploadPodcast: true,
      editPodcast: false,
      others: false
    });
  }

  render() {
    return (
      <Panel style={{ marginLeft: "13px" }}>
        <header style={{ paddingBottom: "10px" }}>
          <H6>PODCAST</H6>
          <div className="row">
            <div className="col-10">
              <SearcForm media="podcasts" />
            </div>
            <div className="col-2">
              <Add to="/add/podcast">
                <i className="fas fa-plus"></i>
              </Add>
            </div>
          </div>
        </header>
        <section>
          <Main>
            <PodcastContent />
          </Main>
        </section>
      </Panel>
    );
  }
}
