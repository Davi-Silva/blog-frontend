/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import {
  Card, Cover, PublishedOn, Title, ShortDescription,
} from '../../../styled-components/blog-posts.styled-components';

export default class BlogPostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      publishedOn: null,
      slug: '',
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    const {
      type, imgSrc, title, publishedOn, slug,
    } = this.props;
    const typeLower = type.toLowerCase();
    const titleLower = title
      .toLowerCase()
      .split(' ')
      .join('-');
    const editTo = `/edit/${typeLower}/${titleLower}`;

    console.log('date:', publishedOn);

    const dateFormatted = await this.parseDate(publishedOn);
    const months = [
      'January',
      'February',
      'March',
      'April',
      'may',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const formattedDate = `${months[dateFormatted.getMonth()]
    } ${
      dateFormatted.getDate()
    } ${
      dateFormatted.getFullYear()}`;

    await this.setStateAsync({
      type,
      title,
      publishedOn: formattedDate,
      slug,
      imgSrc,
      // audioFileUrl: path,
      // liID,
      editTo,
    });
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  async parseDate(input) {
    this.parts = input.match(/(\d+)/g);
    return new Date(this.parts[0], this.parts[1] - 1, this.parts[2]);
  }

  render() {
    const {
      title, imgSrc, slug, publishedOn,
    } = this.state;

    return (
      <>
        <Card to={`/blog/${slug}`} className="card" style={{ border: 'none' }}>
          <Cover
            className="card-img-top img-fluid"
            // src={imgSrc}
            src="http://res.cloudinary.com/simpleview/image/upload/v1486505969/clients/vancouverbc/Aerial_Sunset_Vancouver_d3_copy_1bb86ed0-1edc-4cda-841d-0b033ca0bb72.jpg"
            alt="React.js"
            width="100%"
          />
          <PublishedOn>
            {publishedOn}
          </PublishedOn>
          <Title>{title}</Title>

        </Card>
      </>
    );
  }
}
