import React, { Component } from 'react';

import {
  FaSpinner,
} from 'react-icons/fa';
import SubNavBar from '../components/UI/navbar/SubNavBar';

import {
  Cover,
  Title,
  Content,
  Tags,
  // LoadingTags,
  RelatedPost,
  UploadedOn,
  RelatedPostLabel,
  LoadingRelatedPostLabel,
  // AllContent,
  LoadingAllContent,
  RelatedPostList,
  RelatedPostLi,
  RelatedPostH6,
} from '../styled-components/post.styled-components';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      title: '',
      content: '',
      tags: '',
      publishedOn: null,
      updatedOn: null,
      cover: '',
      coverAlt: '',
      relatedCategoryPosts: [],
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getPostBySlug = this.getPostBySlug.bind(this);
    this.getPostByCategory = this.getPostByCategory.bind(this);
    this.parseDate = this.parseDate.bind(this);
  }

  async componentDidMount() {
    const post = await this.getPostBySlug();
    if (post.length > 0) {
      const {
        slug, category, title, tags, content, publishedOn, updatedOn, cover,
      } = post[0];
      const relatedCategoryPosts = await this.getPostByCategory(category, slug);
      console.log('relatedCategoryPosts:', relatedCategoryPosts);
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
          relatedCategoryPosts,
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
          relatedCategoryPosts,
        });
      }
    } else {
      const { history } = this.props;
      history.push('/404');
    }
  }

  async getPostBySlug() {
    const { match } = this.props;
    const { slug } = match.params;
    this.response = await fetch(
      // `https://cryptic-activist-backend.herokuapp.com/blog/get/slug/${slug}`,
      `http://localhost:5000/blog/get/slug/${slug}`,
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

  async getPostByCategory(category, slug) {
    this.response = await fetch(
      // `https://cryptic-activist-backend.herokuapp.com/blog/get/category/${category}`,
      `http://localhost:5000/blog/get/category/newest/${slug}/${category}`,
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

  parseDate(input) {
    this.parts = input.match(/(\d+)/g);
    return new Date(this.parts[0], this.parts[1] - 1, this.parts[2]);
  }

  render() {
    const {
      title, category, cover, coverAlt, content, tags, relatedCategoryPosts, publishedOn,
    } = this.state;

    let allContentPost;
    let postPublished;
    let postRelatedPost;

    if (title === ''
    || cover === ''
    || coverAlt === ''
    || content === ''
    || tags === ''
    || relatedCategoryPosts.length === 0
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
      Uploaded on&nbsp;
            <span style={{ color: '#333', fontWeight: '700' }}>{publishedOn}</span>
          </UploadedOn>
        );
      } else {
        postPublished = (
          <UploadedOn>
        Updated on&nbsp;
            <span style={{ color: '#333', fontWeight: '700' }}>{publishedOn}</span>
          </UploadedOn>
        );
      }
      if (relatedCategoryPosts.found === false) {
        postRelatedPost = (
          <LoadingRelatedPostLabel />
        );
      } else {
        postRelatedPost = (
          <RelatedPostLabel>
            Related Blog Posts
            <br />
            <RelatedPostList>
              {
                relatedCategoryPosts.map((post, key) => (
                  <RelatedPostLi
                    key={key}
                  >
                    <RelatedPost to={post.slug}>
                      <img
                        src={post.cover.url}
                        style={{
                          borderRadius: '5px',
                        }}
                        alt={post.cover.name}
                      />
                      <br />
                      <RelatedPostH6>
                        {post.title}
                      </RelatedPostH6>
                    </RelatedPost>
                  </RelatedPostLi>
                ))
              }
            </RelatedPostList>
          </RelatedPostLabel>
        );
      }
      allContentPost = (
        <>
          <div className="col-lg-8 col-md-8 col-sm-8 col-12">
            <Cover
              src={cover}
              alt={coverAlt}
            />
            {postPublished}
            <Title>
              {title}
            </Title>
            <Content dangerouslySetInnerHTML={{ __html: content }} />
            <Tags>
            Tags:&nbsp;
              {' '}
              <b style={{ fontSize: '16px' }}>{tags}</b>
              {' '}
            </Tags>
            {postRelatedPost}
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12" />
        </>
      );
    }
    return (
      <>
        <SubNavBar media="Blog" category={category} title={title} />
        <div className="container">
          <div className="row">
            {allContentPost}
          </div>
        </div>
      </>
    );
  }
}
