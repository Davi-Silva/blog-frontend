import React, { Component } from "react";

import {
  ToggleButton,
  Expand,
  Edit,
  Delete,
  AudioPlayer
} from "../../../../styled-components/admin.styled-components";
// import { format } from "date-fns";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      category: "",
      title: "",
      date: "",
      description: "",
      audio_file_url: "",
      liID: "",
      editTo: ""
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const type = this.props.type.toLowerCase();
    const title = this.props.title
      .toLowerCase()
      .split(" ")
      .join("-");
    const editTo = `/edit/${type}/${title}`;

    // const date = date;

    this.setState({
      type: this.props.type,
      category: this.props.category,
      title: this.props.title,
      date: this.props.date,
      description: this.props.description,
      audio_file_url: this.props.path,
      liID: this.props.liID,
      editTo: editTo
    });
  }

  render() {
    return (
      <li style={{ margin: "0px 15px 6px 0px" }}>
        <ToggleButton
          type="button"
          data-toggle="collapse"
          data-target={`#${this.props.liID}`}
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <div className="row">
            <div className="col-10">
              <b
                style={{
                  color: "#999",
                  marginBottom: "0px",
                  float: "left",
                  fontSize: "12px",
                  lineHeight: "24px"
                }}
              >{`${this.state.type} > ${this.state.category}`}</b>
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
              <span
                style={{
                  color: "#999",
                  fontSize: "14px",
                  float: "left"
                }}
              >
                {this.state.date}
              </span>
            </div>
            <div className="col-2">
              <Expand to={`/admin/course/${this.state.path}`}>
                <i className="fas fa-sort-down"></i>
              </Expand>
            </div>
          </div>
        </ToggleButton>
        <div
          className="collapse"
          id={this.state.liID}
          style={{ padding: "10px 10px 40px 10px" }}
        >
          <strong style={{ color: "#666" }}>Description</strong>
          <p style={{ color: "#999" }}>{this.state.description}</p>
          <AudioPlayer controls name="media">
            <source src={this.state.audio_file_url} type="audio/mp3" />
          </AudioPlayer>
          <Delete>Delete</Delete>
          <Edit to={this.state.editTo}>Edit</Edit>
        </div>
      </li>
    );
  }
}
