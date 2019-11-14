/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import {
  Wrapper,
  Cover,
  UploadedOn,
  Category,
  Title,
} from '../../../styled-components/podcasts.styled-components';

export default class PodcastsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      title: '',
      date: null,
      slug: '',
      cover: '',
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    const {
      title, date, category, slug, cover,
    } = this.props;

    console.log('date:', date);

    const dateFormatted = await this.parseDate(date);
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
      category,
      title,
      date: formattedDate,
      slug,
      cover,
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
      slug, cover, category, title, date,
    } = this.state;
    return (
      <>
        <Wrapper to={`/podcast/${slug}`}>
          <div className="row">
            <div className="col-3">
              <Cover src={cover} />
            </div>
            <div className="col-9 p-0">
              <UploadedOn>
                <b style={{ color: '#333' }}>{date}</b>
              </UploadedOn>
              <Title>
                {title}
              </Title>
              <Category>
                {category}
              </Category>
            </div>
          </div>
        </Wrapper>
      </>
    );
  }
}
