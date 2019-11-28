import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import {
  FaSpinner,
} from 'react-icons/fa';

import BlogPostList from '../components/UI/lists/BlogPostList.component';
import SubNavBar from '../components/UI/navbar/SubNavBar';
import Newsletter from '../components/UI/newsletter/Newsletter.component';

import BitcoinDoddle from '../static/img/no-content-img.png';

import {
  LoadingAllContent,
  InfinitePostList,
  NoContentDiv,
  NoContentImg,
  NoContentP,
} from '../styled-components/blog-posts.styled-components';

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postsList: [],
      page: 1,
      hasMore: null,
      found: false,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getFirstPosts = this.getFirstPosts.bind(this);
    this.getMorePosts = this.getMorePosts.bind(this);
  }

  async componentDidMount() {
    const postsList = await this.getFirstPosts();
    let more = true;
    if (!postsList.found) {
      this.setStateAsync({
        found: false,
      });
    }
    if (postsList.length > 0) {
      if (postsList.length < 10) {
        more = false;
      }
      await this.setStateAsync({
        postsList,
        hasMore: more,
        found: true,
      });
    }
  }

  async getFirstPosts() {
    const { page } = this.state;
    // this.response = await fetch('https://cryptic-activist-backend.herokuapp.com/blog/short', {
    this.response = await fetch(`http://localhost:5000/blog/short?page=${page}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await this.response.json();
    console.log('data first:', data);
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
    // this.response = await fetch(`https://cryptic-activist-backend.herokuapp.com/blog/short?page=${page}`, {
    this.response = await fetch(`http://localhost:5000/blog/short?page=${page}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await this.response.json();
    console.log('data more:', data);
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
        page: page + 1,
      });

      console.log('data getMorePosts:', data);
      this.setStateAsync({
        postsList: postsList.concat(data),
      });
    }
  }


  render() {
    const {
      postsList,
      hasMore,
      found,
    } = this.state;
    console.log('postList:', postsList);
    let allPosts;
    if (!found) {
      allPosts = (
        <>
          <div className="row">
            <div className="col-12">
              <NoContentDiv>
                <NoContentImg src={BitcoinDoddle} />
                <NoContentP>
                  No blog posts has been found.
                </NoContentP>
              </NoContentDiv>
            </div>
          </div>
        </>
      );
    } else {
      allPosts = (
        <>
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-12">
              <InfinitePostList>
                <InfiniteScroll
                  dataLength={postsList.length}
                  next={this.getMorePosts}
                  hasMore={hasMore}
                  loader={(
                    <>
                      <LoadingAllContent>
                        <FaSpinner />
                      </LoadingAllContent>
                    </>
                    )}
                  endMessage={(
                    <div />
                    )}
                >
                  <div className="row">
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
                  </div>
                </InfiniteScroll>
              </InfinitePostList>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
              <Newsletter />
            </div>
          </div>
        </>
      );
    }
    return (
      <>
        <SubNavBar media="Blog" category="" title="" />
        <div className="container" style={{ margin: '25px auto' }}>
          {allPosts}
        </div>
      </>
    );
  }
}
