import React, { Component } from 'react';

import MainBlogPost from '../section/blog/MainBlogPost.component';
import News from '../section/blog/News.component';
import Tutorials from '../section/blog/Tutorials.component';
import Article from '../section/blog/Articles.component';
import Articles from '../section/blog/Articles.component';

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postsList: [],
      page: 1,
      found: false,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getFirstPosts = this.getFirstPosts.bind(this);
    this.getMorePosts = this.getMorePosts.bind(this);
  }

  async componentDidMount() {
    const postsList = await this.getFirstPosts();
    console.log('postsList:', postsList);
    let more = true;
    if (!postsList.found) {
      this.setStateAsync({
        found: false,
      });
    }
    if (postsList.length > 0) {
      console.log('postList.length:', postsList.length);
      if (postsList.length < 10) {
        more = false;
      }
      console.log('more:', more);
      await this.setStateAsync({
        postsList,
        hasMore: more,
        found: true,
      });
    }
    this.getMorePosts();
  }

  async getFirstPosts() {
    const { page } = this.state;
    console.log('getFirstPosts');
    this.response = await fetch(`https://cryptic-activist-backend.herokuapp.com/blog/short?page=${page}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await this.response.json();
    return data;
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  async getMorePosts() {
    const { page, postsList } = this.state;
    console.log('page:', page);
    this.setStateAsync({
      page: page + 1,
    });
    const tempPage = page + 1;
    this.response = await fetch(`https://cryptic-activist-backend.herokuapp.com/blog/short?page=${tempPage}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await this.response.json();
    console.log('postsList:', data);
    if (data.length < 10) {
      this.setStateAsync({
        postsList: postsList.concat(data),
      });
      setTimeout(() => {
        this.setStateAsync({
          hasMore: false,
        });
      }, 10);
    } else {
      this.setStateAsync({
        postsList: postsList.concat(data),
      });
    }
  }


  render() {
    const {
      postsList,
      found,
    } = this.state;

    return (
      <>
        <MainBlogPost />
        <News />
        <Tutorials />
        <Articles />
      </>
    );
  }
}
