import React, { Component } from 'react';

import {
  FaSpinner,
} from 'react-icons/fa';
import List from './blogList.component';


import {
  LoadingAllContent,
} from '../../../../../styled-components/admin.styled-components';


export default class BlogContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.getAllBlogPost = this.getAllBlogPost.bind(this);
    this.componentDidMount = this.componentDidMount(this);
  }

  async componentDidMount() {
    const postsList = await this.getAllBlogPost();
    console.log('podcast blog admin panel:', postsList);
    await this.setStateAsync({ posts: postsList });
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  async getAllBlogPost() {
    this.response = await fetch(
      // 'https://cryptic-activist-backend.herokuapp.com/podcasts/',
      'http://localhost:5000/blog/',
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


  render() {
    let list;
    const { posts } = this.state;
    if (posts.length === 0) {
      list = (
        <LoadingAllContent>
          <FaSpinner />
        </LoadingAllContent>
      );
    } else {
      list = (
        <ul>
          {posts.reverse().map((post, key) => (
            <List
              key={key}
              type={post.type}
              category={post.category}
              title={post.title}
              date={post.publishedOn}
              content={post.content}
              slug={post.slug}
              liID={`b-${key}`}
              coverFileId={post.cover._id}
            />
          ))}
        </ul>
      );
    }


    return (
      <div style={{ height: '100%' }}>
        {list}
      </div>
    );
  }
}
