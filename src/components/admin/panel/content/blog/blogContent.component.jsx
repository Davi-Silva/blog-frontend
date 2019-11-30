import React, { Component } from 'react';

// import {
//   FaSpinner,
// } from 'react-icons/fa';
import List from './blogList.component';

import BitcoinDoddle from '../../../../../static/img/no-content-img.png';

import {
  // LoadingAllContent,
  NoContentDiv,
  NoContentImg,
  NoContentP,
} from '../../../../../styled-components/admin.styled-components';


export default class BlogContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      found: false,
    };
    this.getAllBlogPost = this.getAllBlogPost.bind(this);
    this.componentDidMount = this.componentDidMount(this);
  }

  async componentDidMount() {
    const postsList = await this.getAllBlogPost();
    console.log('postsList:', postsList);
    if (!postsList.found) {
      this.setStateAsync({
        found: false,
      });
    }
    if (postsList.length > 0) {
      console.log('has found');
      await this.setStateAsync({
        posts: postsList,
        found: true,
      });
    }
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
    const {
      posts,
      found,
    } = this.state;
    if (!found) {
      list = (
        <>
          <NoContentDiv>
            <NoContentImg src={BitcoinDoddle} />
            <NoContentP>
            No Blog has been found.
            </NoContentP>
          </NoContentDiv>
        </>
      );
    } else {
      list = (
        <ul>
          {posts.map((post, key) => (
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
      <div>
        {list}
      </div>
    );
  }
}
