import React, { Component } from "react";

import {
  H6,
  Panel,
  Li,
  Span
} from "../../../styled-components/admin.styled-components";

export default class PodcastPanel extends Component {
  render() {
    return (
      <Panel style={{ marginLeft: "13px" }}>
        <header>
          <H6>PODCAST</H6>
        </header>
        <section>
          <header>
            <ul>
              <Li>CREATE</Li>
              <Span>|</Span>
              <Li>EDIT</Li>
              <Span>|</Span>
              <Li>OTHERS</Li>
            </ul>
          </header>
          <main></main>
        </section>
      </Panel>
    );
  }
}
