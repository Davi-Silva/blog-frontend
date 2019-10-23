import React, { Component } from "react";

import {
  Wrapper,
  Cover,
  Description,
  UploadedOn,
  Category
} from "../../../styled-components/podcasts.styled-components";

export default class PodcastsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      category: "",
      title: "",
      date: null,
      description: "",
      short_description: "",
      slug: "",
      cover: "",
      audio_file_url: "",
      liID: "",
      editTo: ""
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async parseDate(input) {
    var parts = input.match(/(\d+)/g);
    // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
    return new Date(parts[0], parts[1] - 1, parts[2]); // months are 0-based
  }

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  async componentDidMount() {
    const type = this.props.type.toLowerCase();
    const title = this.props.title
      .toLowerCase()
      .split(" ")
      .join("-");
    const editTo = `/edit/${type}/${title}`;

    let dateFormatted = await this.parseDate(this.props.date);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "may",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let formattedDate =
      months[dateFormatted.getMonth()] +
      " " +
      dateFormatted.getDate() +
      " " +
      dateFormatted.getFullYear();

    const short_desc = this.props.description.split("\n");

    await this.setStateAsync({
      type: this.props.type,
      category: this.props.category,
      title: this.props.title,
      date: formattedDate,
      description: this.props.description,
      short_description: short_desc[0],
      slug: this.props.slug,
      cover: this.props.cover,
      audio_file_url: this.props.path,
      liID: this.props.liID,
      editTo: editTo
    });
    console.log("short_desc:", short_desc[0]);
  }

  render() {
    return (
      <React.Fragment>
        <Wrapper to={`/podcast/${this.state.slug}`}>
          <Cover
            style={{
              background: `url(${this.state.cover}) no-repeat`
            }}
          ></Cover>
          <div style={{ padding: "5px 25px 0px 25px" }}>
            <Category>{`${this.state.type} > ${this.state.category}`}</Category>
            <br />
            <h5
              style={{
                color: "#0058e4",
                marginBottom: "0px",
                float: "left"
              }}
            >
              {this.state.title}
            </h5>
            <br />
            <UploadedOn>
              Uploaded on&nbsp;
              <span style={{ color: "#0058e4" }}>{this.state.date}</span>
            </UploadedOn>
            <Description
              dangerouslySetInnerHTML={{ __html: this.state.short_description }}
            ></Description>
          </div>
        </Wrapper>
      </React.Fragment>
    );
  }
}
