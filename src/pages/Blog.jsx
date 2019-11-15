import React, { Component } from 'react';

import BlogPostList from '../components/UI/lists/BlogPostList.component';

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
    return (
      <>
        <div className="container" style={{ margin: '25px auto' }}>
          <div className="card-columns">
            {postsList.reverse().map((post, key) => (
              <BlogPostList
                key={key}
                type="Blog"
                slug={post.slug}
                imgSrc={post.src}
                title={post.title}
                publishedOn={post.publishedOn}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Blog;
