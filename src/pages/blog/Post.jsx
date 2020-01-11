/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import slugify from 'slugify';

import { Helmet } from 'react-helmet';

import {
  FaSpinner,
} from 'react-icons/fa';

import SubNavBar from '../../components/UI/navbar/SubNavBar';
import ShareButtons from '../../components/UI/buttons/ShareButtons';
import PostAuthor from '../../components/UI/author/blog/Author';
import MostRecentPost from '../../components/UI/most-recent/blog/aside/MostRecentPost';
import Ads from '../../components/UI/ads/AdvertisementSquare.component';
import Tags from '../../components/UI/post/Tags';
import RelatedPosts from '../../components/UI/post/RelatedPosts';
import WrittenBy from '../../components/UI/author/blog/WrittenBy';


import {
  Cover,
  Title,
  TimeToReadCategoryUl,
  TimeToRead,
  Category,
  Content,
  AsideDiv,
  // LoadingTags,
  UploadedOn,
  // AllContent,
  LoadingAllContent,
  Fluid,
  StickyWrapper,
  WrapperAd,
} from '../../styled-components/post.styled-components';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      title: '',
      content: '',
      tags: [],
      publishedOn: null,
      updatedOn: null,
      cover: '',
      coverAlt: '',
      author: null,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getPostBySlug = this.getPostBySlug.bind(this);
    this.parseDate = this.parseDate.bind(this);
    // this.covertAllTags = this.covertAllTags.bind(this);
    this.updateHowManyRead = this.updateHowManyRead.bind(this);
  }

  async componentDidMount() {
    const { match } = this.props;
    const fullSlug = match.url.slice(6, match.url.length);
    const post = await this.getPostBySlug(fullSlug);
    if (post.length > 0) {
      const {
        slug,
        category,
        title,
        tags,
        content,
        publishedOn,
        updatedOn,
        cover,
        author,
        howManyRead,
      } = post[0];
      const postObj = {
        slug,
        howManyReadNumber: howManyRead,
      };
      const updatedNumberOfRead = await this.updateHowManyRead(postObj);
      // Estimate the time read the content
      const wordsPerMinutes = 200;
      let timeToRead;
      const textLength = content.split(' ').length;
      if (textLength > 0) {
        const value = Math.ceil(textLength / wordsPerMinutes);
        timeToRead = `${value} min read`;
      }
      const dateFormatted = this.parseDate(publishedOn);
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
      const formattedDate = `${months[dateFormatted.getMonth()]} ${dateFormatted.getDate()} ${dateFormatted.getFullYear()}`;
      if (updatedOn === null) {
        await this.setStateAsync({
          slug,
          category,
          title,
          content,
          tags,
          publishedOn: formattedDate,
          cover: cover.url,
          coverAlt: cover.name,
          author,
          howManyRead: updatedNumberOfRead.howManyReadNumber,
          timeToRead,
        });
      }
      if (updatedOn !== null) {
        const dateFormattedUpdated = this.parseDate(updatedOn);
        const formattedDateUpdated = `${months[dateFormattedUpdated.getMonth()]} ${dateFormattedUpdated.getDate()} ${dateFormattedUpdated.getFullYear()}`;

        await this.setStateAsync({
          slug,
          category,
          title,
          content,
          tags,
          publishedOn: formattedDate,
          updatedOn: formattedDateUpdated,
          cover: cover.url,
          coverAlt: cover.name,
          howManyRead: updatedNumberOfRead.howManyReadNumber,
          timeToRead,
        });
      }
    } else {
      const { history } = this.props;
      history.push('/404');
    }
  }

  async getPostBySlug(slug) {
    this.response = await fetch(
      `https://cryptic-activist-backend.herokuapp.com/blog/get/slug/${slug}`,
      {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await this.response.json();
    return data;
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  async updateHowManyRead(post) {
    this.response = await fetch(
      'https://cryptic-activist-backend.herokuapp.com/blog/update/post/how-many-read',
      {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      },
    );
    const data = await this.response.json();
    return data;
  }

  parseDate(input) {
    this.parts = input.match(/(\d+)/g);
    return new Date(this.parts[0], this.parts[1] - 1, this.parts[2]);
  }

  render() {
    const {
      title,
      slug,
      category,
      cover,
      coverAlt,
      content,
      tags,
      publishedOn,
      updatedOn,
      author,
      timeToRead,
    } = this.state;
    const {
      location,
    } = this.props;

    let helmet;
    let allContentPost;
    let postPublished;

    let related;

    if (slug === '') {
      related = (
        <>
        </>
      );
    } else {
      related = (
        <>
          <RelatedPosts
            slug={slug}
            category={category}
          />
        </>
      );
    }

    if (title === '') {
      helmet = (
        <>
          <Helmet title="Loading..." media="Blog" />
        </>
      );
    } else {
      helmet = (
        <>
          <Helmet>
            <title>{`${title} - ${'Blog'} | Cryptic Activist`}</title>
            <meta
              name="description"
              content="Blog Posts"
            />
            <meta property="og:locale" content="en_US" />
            <meta property="og:locale:alternate" content="en_CA" />
            <meta property="og:locale:alternate" content="es_GB" />
            <meta property="og:site_name" content="CrypticActivist" />
            <meta property="og:description" content="Meta description" />
            <meta property="og:title" content={`${title} - ${'Blog'} | Cryptic Activist`} />
            <meta property="og:image" content={`${cover}`} />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="800" />
            <meta property="og:image:height" content="600" />
            <meta property="og:image:alt" content={coverAlt} />
            <meta property="og:url" content={`https://hardcore-tesla-e87eac.netlify.com${location.pathname}`} />
            <meta property="og:type" content="article" />
            <meta property="og:type:article:published_time" content={publishedOn} />
            <meta property="og:type:article:author" content={author} />
            <meta property="og:type:article:tags" content={tags} />

            <meta name="twitter:site" content="CrypticActivist" />
            <meta name="twitter:title" content={`${title} - ${'Blog'} | Cryptic Activist`} />
            <meta name="twitter:description" content="metaDescription" />
            <meta name="twitter:image" content={cover} />
            <meta name="twitter:creator" content={author} />
            <meta name="twitter:card" content="article" />
            <meta name="twitter:image:alt" content={`${title}'s cover`} />
          </Helmet>
        </>
      );
    }


    if (title === ''
    || cover === ''
    || coverAlt === ''
    || content === ''
    || tags === ''
    || publishedOn === '') {
      allContentPost = (
        <LoadingAllContent>
          <FaSpinner />
        </LoadingAllContent>
      );
    } else {
      if (publishedOn === null) {
        postPublished = (
          <UploadedOn>
            {updatedOn}
          </UploadedOn>
        );
      } else {
        postPublished = (
          <UploadedOn>
            {publishedOn}
          </UploadedOn>
        );
      }

      allContentPost = (
        <>
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                <PostAuthor
                  author={author}
                  postPublished={postPublished}
                />
                <ShareButtons path={`https://hardcore-tesla-e87eac.netlify.com${location.pathname}`} />
                <TimeToReadCategoryUl>
                  <li>
                    <Category
                      to={`/blog/category/${slugify(category.toLowerCase())}`}
                    >
                      {category}
                    </Category>
                  </li>
                  <li>
                    <TimeToRead>
                      {timeToRead}
                    </TimeToRead>
                  </li>
                </TimeToReadCategoryUl>
                <Title>
                  {title}
                </Title>
                <Content dangerouslySetInnerHTML={{ __html: content }} />
                <Tags
                  tagsArray={tags}
                />
                <WrittenBy
                  author={author}
                />
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                <AsideDiv>
                  <StickyWrapper>
                    <WrapperAd>
                      <MostRecentPost />
                    </WrapperAd>
                    <Ads />
                  </StickyWrapper>
                </AsideDiv>
                <AsideDiv>
                  <StickyWrapper>
                    <Ads />
                    <Ads
                      IsLast="last"
                    />
                  </StickyWrapper>
                </AsideDiv>
              </div>
            </div>
          </div>
          <Fluid className="container">
            <div className="row">
              <div className="col-12">
                {related}
              </div>
            </div>
          </Fluid>
        </>
      );
    }
    return (
      <>
        {helmet}
        <SubNavBar media="Blog" category={category} title={title} />
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-12">
              <Cover
                src={cover}
                alt={coverAlt}
              />
            </div>
          </div>
        </div>
        {allContentPost}
      </>
    );
  }
}

Post.propTypes = {
  history: PropTypes.shape,
  match: PropTypes.shape,
};

Post.defaultProps = {
  history: Object,
  match: Object,
};
