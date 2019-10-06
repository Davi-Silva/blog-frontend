import React, { Component } from "react";

import CourseContent from "./content/course/courseContent.component";
import SearcForm from "./content/searchForm.component";

import { Add } from "../../../styled-components/admin.styled-components";

import {
  H6,
  Panel,
  Main
} from "../../../styled-components/admin.styled-components";

export default class CoursePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createCourse: null,
      editCourse: null,
      others: null
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.setState({
      createCourse: true,
      editCourse: false,
      others: false
    });
  }

  render() {
    return (
      <Panel style={{ marginRight: "13px" }}>
        <header style={{ paddingBottom: "10px" }}>
          <H6>COURSE</H6>
          <div className="row">
            <div className="col-10">
              <SearcForm />
            </div>
            <div className="col-2">
              <Add to="/add/course">
                <i className="fas fa-plus"></i>
              </Add>
            </div>
          </div>
        </header>
        <section>
          <Main>
            <CourseContent />
          </Main>
        </section>
      </Panel>
    );
  }
}
