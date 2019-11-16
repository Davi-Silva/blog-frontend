import React, { Component } from 'react';

import SubNavBar from '../components/UI/navbar/SubNavBar';

import {
  Cover,
  Title,
  Content,
  Tags,
  LoadingTags,
  RelatedPost,
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
      const relatedCategoryPosts = await this.getPostByCategory(category);
      console.log('relatedCategoryPosts:', relatedCategoryPosts);
      let count = 0;
      relatedCategoryPosts.map((post) => {
        if(post.slug === slug) {
          relatedCategoryPosts.splice(count, count + 1);
          console.log('array:', relatedCategoryPosts)
        }
        count++;
      })
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

  async getPostByCategory(category) {
    this.response = await fetch(
      // `https://cryptic-activist-backend.herokuapp.com/blog/get/category/${category}`,
      `http://localhost:5000/blog/get/category/${category}`,
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
      title, category, cover, coverAlt, content, tags, relatedCategoryPosts
    } = this.state;
    let postTags;
    if (tags === '') {
      postTags = (
        <LoadingTags>Tags...</LoadingTags>
      );
    } else {
      postTags = (
        <Tags>
        Tags:&nbsp;
          <b style={{ fontSize: '16px' }}>{tags}</b>
        </Tags>
      );
    }
    return (
      <>
        <SubNavBar media="Blog" category={category} title={title} />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-8 col-12">
              <Cover
                src={cover}
                alt={coverAlt}
              />
              <Title>
                {title}
              </Title>
              <Content dangerouslySetInnerHTML={{ __html: content }}/>
              {postTags}
              <b style={{
                margin: '10px 0'
              }}
              >
                Related Blog Posts
              </b>
              <br/>
              {
                relatedCategoryPosts.map((post, key) => {
                  return (
                    <li 
                    key={key}
                    style={{
                      listStyle: 'none',
                      display: 'inline-block',
                      margin: '0 5px'
                    }}
                    >
                      <RelatedPost to={post.slug}>
                        <img 
                        width="150px"  
                        height="100px" 
                        src={post.cover.url}
                        style={{
                          borderRadius: '5px'
                        }}/>
                        <br />
                        <h6 style={{
                          color: '#333',
                          fontSize: '14px',
                          fontWeight: '900',
                          margin: '5px 0'
                        }}>
                          {post.title}
                        </h6>
                      </RelatedPost>
                    </li>
                  )
                })
              }
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">

            </div>
          </div>
        </div>
      </>
    );
  }
}
