import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  CardTopMain,
  Card,
  Cover,
  CoverMain,
  PublishedOn,
  PostInfoDiv,
  Title,
  CategoryDiv,
  Category,
} from '../../../styled-components/blog-posts-top-main.styled-components';

export default class BlogPostListMain extends Component {
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
      type,
      imgSrc,
      title,
      category,
      publishedOn,
      slug,
    } = this.props;
    const typeLower = type.toLowerCase();
    const titleLower = title
      .toLowerCase()
      .split(' ')
      .join('-');
    const editTo = `/edit/${typeLower}/${titleLower}`;

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
      type,
      title: tempTitle,
      category,
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

    let allPosts;

    if (index === 0) {
      allPosts = (
        <>
          <CardTopMain
            to={`/blog/${slug}`}
            style={{ border: 'none' }}
          >
            <CoverMain
              className="card-img-top img-fluid"
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
              <CategoryDiv>
                <Category>
                  {category}
                </Category>
              </CategoryDiv>
            </CoverMain>
            <PostInfoDiv>
              <PublishedOn>
                {publishedOn}
              </PublishedOn>
              <Title>{title}</Title>
            </PostInfoDiv>
          </CardTopMain>
        </>
      );
    } else if (index > 0) {
      allPosts = (
        <>
          <>
            <Card
              to={`/blog/${slug}`}
              className="col-sm-6 col-12 p-0"
              style={{ border: 'none' }}
            >
              <Cover
                className="card-img-top img-fluid"
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
          </>
        </>
      );
    }

    return (
      <>
        {allPosts}
      </>
    );
  }
}

BlogPostListMain.propTypes = {
  type: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  publishedOn: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
