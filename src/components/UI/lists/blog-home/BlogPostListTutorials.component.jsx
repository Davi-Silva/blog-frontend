import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  ColumnRight,
  ColumnLeft,
  ColumnCenter,
  Card,
  Cover,
  BackgroundWrapper,
  PublishedOn,
  PostInfoDiv,
  Title,
  CategoryDiv,
  Category,
} from '../../../../styled-components/blog-posts-tutorials.styled-components';

export default class BlogPostListTutorials extends Component {
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
      title,
      imgSrc,
      category,
      publishedOn,
      slug,
    } = this.props;

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

    let tempTitle = title;
    if (title.length > 50) {
      tempTitle = `${title.substring(0, 50).trim()}...`;
    }

    await this.setStateAsync({
      title: tempTitle,
      category,
      publishedOn: formattedDate,
      slug,
      imgSrc,
      // audioFileUrl: path,
      // liID,
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
      title,
      category,
      imgSrc,
      slug,
      publishedOn,
      // content
    } = this.state;

    const {
      index,
    } = this.props;

    let card;

    if (index === 0 || index === 3) {
      card = (
        <>
          <ColumnLeft className="col-lg-4 col-md-4 col-sm-6 col-12">
            <Card
              to={`/blog/${slug}`}
              className="col-sm-6 col-12 p-0"
              style={{ border: 'none' }}
            >
              <Cover
                src={imgSrc}
                alt="React.js"
                width="100%"
                style={{
                  backgroundImage: `url(${imgSrc})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              >
                <BackgroundWrapper />
                <CategoryDiv>
                  <Category>
                    {category}
                  </Category>
                </CategoryDiv>
                <PostInfoDiv>
                  <PublishedOn>
                    {publishedOn}
                  </PublishedOn>
                  <Title>{title}</Title>
                </PostInfoDiv>
              </Cover>
            </Card>
          </ColumnLeft>
        </>
      );
    } else if (index === 1 || index === 4) {
      card = (
        <>
          <ColumnCenter className="col-lg-4 col-md-4 col-sm-6 col-12">
            <Card
              to={`/blog/${slug}`}
              className="col-sm-6 col-12 p-0"
              style={{ border: 'none' }}
            >
              <Cover
                src={imgSrc}
                alt="React.js"
                width="100%"
                style={{
                  backgroundImage: `url(${imgSrc})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              >
                <BackgroundWrapper />
                <CategoryDiv>
                  <Category>
                    {category}
                  </Category>
                </CategoryDiv>
                <PostInfoDiv>
                  <PublishedOn>
                    {publishedOn}
                  </PublishedOn>
                  <Title>{title}</Title>
                </PostInfoDiv>
              </Cover>
            </Card>
          </ColumnCenter>
        </>
      );
    } else if (index === 2 || index === 5) {
      card = (
        <>
          <ColumnRight className="col-lg-4 col-md-4 col-sm-6 col-12">
            <Card
              to={`/blog/${slug}`}
              className="col-sm-6 col-12 p-0"
              style={{ border: 'none' }}
            >
              <Cover
                src={imgSrc}
                alt="React.js"
                width="100%"
                style={{
                  backgroundImage: `url(${imgSrc})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              >
                <BackgroundWrapper />
                <CategoryDiv>
                  <Category>
                    {category}
                  </Category>
                </CategoryDiv>
                <PostInfoDiv>
                  <PublishedOn>
                    {publishedOn}
                  </PublishedOn>
                  <Title>{title}</Title>
                </PostInfoDiv>
              </Cover>
            </Card>
          </ColumnRight>
        </>
      );
    }

    return (
      <>
        {card}
      </>
    );
  }
}

BlogPostListTutorials.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  publishedOn: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
