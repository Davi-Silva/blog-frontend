import React, { Component } from "react";

import {
  H6,
  Panel,
  Li,
  Span
} from "../../../styled-components/admin.styled-components";

export default class BlogPanel extends Component {
  render() {
    return (
      <Panel style={{ marginRight: "13px", marginTop: "3px" }}>
        <header>
          <H6>BLOG</H6>
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
