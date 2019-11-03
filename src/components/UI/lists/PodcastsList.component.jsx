/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import {
  Wrapper,
  Cover,
  Description,
  UploadedOn,
  Category,
} from '../../../styled-components/podcasts.styled-components';

export default class PodcastsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      category: '',
      title: '',
      date: null,
      description: '',
      shortDescription: '',
      slug: '',
      cover: '',
      audioFileUrl: '',
      liID: '',
      editTo: '',
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    const {
      type, title, date, description, category, slug, cover, path, liID,
    } = this.props;
    const typeLower = type.toLowerCase();
    const titleLower = title
      .toLowerCase()
      .split(' ')
      .join('-');
    const editTo = `/edit/${typeLower}/${titleLower}`;

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

    const shortDesc = description.split('\n');

    await this.setStateAsync({
      type,
      category,
      title,
      date: formattedDate,
      description,
      shortDescription: shortDesc[0],
      slug,
      cover,
      audioFileUrl: path,
      liID,
      editTo,
    });
    console.log('shortDesc:', shortDesc[0]);
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
      slug, cover, type, category, title, date, shortDescription,
    } = this.state;
    return (
      <>
        <Wrapper to={`/podcast/${slug}`}>
          <Cover
            style={{
              background: `url(${cover}) no-repeat`,
            }}
          />
          <div style={{ padding: '5px 25px 0px 25px' }}>
            <Category>{`${type} > ${category}`}</Category>
            <br />
            <h5
              style={{
                color: '#0058e4',
                marginBottom: '0px',
                float: 'left',
              }}
            >
              {title}
            </h5>
            <br />
            <UploadedOn>
              Uploaded on&nbsp;
              <span style={{ color: '#0058e4' }}>{date}</span>
            </UploadedOn>
            <Description
              dangerouslySetInnerHTML={{ __html: shortDescription }}
            />
          </div>
        </Wrapper>
      </>
    );
  }
}
