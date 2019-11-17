import React, { Component } from 'react';

import {
  FaSpinner,
} from 'react-icons/fa';
import BlogPostList from '../components/UI/lists/BlogPostList.component';

import SubNavBar from '../components/UI/navbar/SubNavBar';

import {
  LoadingAllContent,
} from '../styled-components/post.styled-components';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postsList: [],
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    const postsList = await this.getAllPosts();
    await this.setStateAsync({ postsList });
  }

  async getAllPosts() {
    // this.response = await fetch('https://cryptic-activist-backend.herokuapp.com/blog/short', {
    this.response = await fetch('http://localhost:5000/blog/short', {
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

  render() {
    const { postsList } = this.state;
    console.log('postList:', postsList);
    let allPosts;
    if (postsList.length === 0) {
      allPosts = (
        <LoadingAllContent>
          <FaSpinner />
        </LoadingAllContent>
      );
    } else {
      allPosts = (
        <ul>
          {postsList.reverse().map((post, key) => (
            <BlogPostList
              key={key}
              type="Blog"
              slug={post.slug}
              imgSrc={post.cover.url}
              title={post.title}
              publishedOn={post.publishedOn}
            />
          ))}
        </ul>
      );
    }
    return (
      <>
        <SubNavBar media="Blog" category="" title="" />
        <div className="container" style={{ margin: '25px auto' }}>
          <div className="card-columns">
            {allPosts}
          </div>
        </div>
      </>
    );
  }
}

export default Blog;
