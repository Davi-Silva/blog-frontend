import React, { Component } from "react";

import {
  CourseButton,
  Expand
} from "../../../../../styled-components/admin.styled-components";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      date: "",
      description: "",
      path: "",
      liID: ""
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.setState({
      title: this.props.title,
      date: this.props.date,
      description: this.props.description,
      path: this.props.path,
      liID: this.props.liID
    });
  }

  render() {
    return (
      <li style={{ margin: "15px 15px 15px 0" }}>
        <CourseButton
          type="button"
          data-toggle="collapse"
          data-target={`#${this.props.liID}`}
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <div className="row">
            <div className="col-10">
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
        </CourseButton>
        <div
          className="collapse"
          id={this.state.liID}
          style={{ padding: "10px 10px 40px 10px" }}
        >
          <strong style={{ color: "#666" }}>Description</strong>
          <p style={{ color: "#999" }}>{this.state.description}</p>
          <button
            style={{
              marginLeft: "5px",
              float: "right",
              border: "none",
              padding: "7px 14px",
              backgroundColor: "#cc2222",
              borderRadius: "3px",
              color: "#fff"
            }}
          >
            Delete
          </button>
          <button
            style={{
              marginRight: "5px",
              float: "right",
              border: "none",
              padding: "7px 14px",
              backgroundColor: "#0058e4",
              borderRadius: "3px",
              color: "#fff"
            }}
          >
            Edit
          </button>
        </div>
      </li>
    );
  }
}
