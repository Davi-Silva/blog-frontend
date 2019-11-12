/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class BlogPostList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { title, imgSrc } = this.props;
    return (
      <>
        <div className="card" style={{ border: 'none' }}>
          <img
            className="card-img-top img-fluid"
            src={imgSrc}
            alt="React.js"
            width="100%"
          />
          <h5>{title}</h5>
        </div>
      </>
    );
  }
}
