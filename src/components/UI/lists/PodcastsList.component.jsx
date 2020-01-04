
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  Cover,
  InfoDiv,
  Ul,
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
      title,
      date,
      category,
      slug,
      cover,
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
    if (title.length > 60) {
      tempTitle = `${title.substring(0, 60).trim()}...`;
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
            <Ul>
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
                <InfoDiv>
                  <UploadedOn>
                    <b style={{ color: '#333' }}>{date}</b>
                  </UploadedOn>
                  <Title>
                    {title}
                  </Title>
                  <Category>
                    {category}
                  </Category>
                </InfoDiv>
              </li>
            </Ul>
          </Wrapper>
        </div>
      </>
    );
  }
}

PodcastsList.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};
