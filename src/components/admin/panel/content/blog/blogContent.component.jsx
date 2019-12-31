/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import {
  FaSpinner,
} from 'react-icons/fa';
import List from './blogList.component';

import BitcoinDoddle from '../../../../../static/img/no-content-img.png';

import {
  LoadingAllContent,
  NoContentDiv,
  NoContentImg,
  NoContentP,
  InfinitePostList,
} from '../../../../../styled-components/admin.styled-components';


export default class BlogContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      page: 1,
      hasMore: false,
      found: false,
    };
    this.getFirstPosts = this.getFirstPosts.bind(this);
    this.getMorePosts = this.getMorePosts.bind(this);
    this.componentDidMount = this.componentDidMount(this);
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
        posts: postsList,
        hasMore: more,
        found: true,
      });
    }
    await this.setStateAsync({ posts: postsList });
    setTimeout(() => {
      this.getMorePosts();
    }, 2000);
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  async getFirstPosts() {
    this.response = await fetch(
      'https://cryptic-activist-backend.herokuapp.com/blog/',
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

  async getMorePosts() {
    const {
      page,
      posts,
    } = this.state;
    this.setStateAsync({
      page: page + 1,
    });
    const tempPage = page + 1;
    this.response = await fetch(`https://cryptic-activist-backend.herokuapp.com/blog/?page=${tempPage}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await this.response.json();
    if (data.length < 10) {
      this.setStateAsync({
        posts: posts.concat(data),
      });
      setTimeout(() => {
        this.setStateAsync({
          hasMore: false,
        });
      }, 10);
    } else {
      this.setStateAsync({
        posts: posts.concat(data),
      });
    }
  }


  render() {
    let list;
    const {
      posts,
      hasMore,
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
        <InfinitePostList>
          <InfiniteScroll
            dataLength={posts.length}
            hasMore={hasMore}
            next={this.getMorePosts}
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

            {posts.map((post, key) => (
              <List
                key={key}
                type={post.type}
                category={post.category}
                title={post.title}
                date={post.publishedOn}
                content={post.content}
                slug={post.slug}
                liID={`b-${post.id}`}
                coverFileId={post.cover._id}
              />
            ))}

          </InfiniteScroll>
        </InfinitePostList>
      );
    }


    return (
      <div>
        {list}
      </div>
    );
  }
}
