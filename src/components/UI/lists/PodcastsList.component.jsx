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

    let tempTitle = title;
    if (title.length > 50) {
      tempTitle = `${title.substring(0, 50).trim()}...`;
    }

    await this.setStateAsync({
      category,
      title: tempTitle,
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
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <Wrapper to={`/podcast/${slug}`}>
            {/* <div className="row">
              <div className="col-md-5 col-sm-3 col-5">
                <Cover src={cover} />
              </div>
              <div className="col-md-7 col-sm-9 col-7 p-0">
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
            </div> */}
            <ul
              style={{
                height: '100px',
                // display: 'block',
              }}
            >
              <li
                style={{
                  display: 'inline-block',
                  marginRight: '8px',
                }}
              >
                <Cover src={cover} />
              </li>
              <li
                style={{
                  display: 'inline-block',
                }}
              >
                <div
                  style={{
                    top: '18px',
                    position: 'absolute',
                  }}
                >
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
              </li>
            </ul>
          </Wrapper>
        </div>
      </>
    );
  }
}
