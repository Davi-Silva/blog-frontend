import React, { Component } from "react";

import List from "../blog/blogList.component";

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
    const {posts} = this.state;
    return (
      <div style={{ height: "100%" }}>
        <ul>
          {posts.reverse().map((post, key) => {
            return (
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
            );
          })}
        </ul>
      </div>
    );
  }
}
