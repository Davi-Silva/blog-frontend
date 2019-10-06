import React, { Component } from "react";

import { Form } from "../../../../styled-components/admin.styled-components";

export default class SearchForm extends Component {
  render() {
    return (
      <React.Fragment>
        <Form>
          <input type="text" name="course" id="" placeholder="Search" />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </Form>
      </React.Fragment>
    );
  }
}
