
import React, { Component } from 'react';

import {
  FaSpinner,
} from 'react-icons/fa';

import BitcoinDoddle from '../../static/img/no-content-img.png';

import BlogPostList from '../../components/UI/lists/BlogPostList.component';
import SubNavBar from '../../components/UI/navbar/SubNavBar';
import NewsletterSide from '../../components/UI/newsletter/NewsletterSide.component';
import RecentCategories from '../../components/UI/categories/RecentCategoriesBlogPost';

import {
  LoadingAllContent,
  PostList,
  NoContentDiv,
  NoContentImg,
  NoContentP,
  StickyWrapper,
} from '../../styled-components/blog-posts.styled-components';


export default class BlogPostsByCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      category: '',
      page: 1,
      hasMore: null,
      found: false,
    };
    this.getFirstPosts = this.getFirstPosts.bind(this);
    this.getMorePosts = this.getMorePosts.bind(this);
  }

  async componentDidMount() {
    const { match } = this.props;
    const { slug } = match.params;

    this.setStateAsync({
      category: slug,
    });
    const postsList = await this.getFirstPosts(slug);
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
  }

  async getFirstPosts(category) {
    const {
      page,
    } = this.state;
    this.response = await fetch(`http://localhost:5000/blog/get/category/${category}?page=${page}`, {
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
    const {
      page,
      category,
      posts,
    } = this.state;
    this.response = await fetch(`http://localhost:5000/blog/get/category/${category}?page=${page}`, {
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
        page: page + 1,
      });

      this.setStateAsync({
        podcasts: posts.concat(data),
      });
    }
  }

  render() {
    const {
      category,
      posts,
      hasMore,
      found,
    } = this.state;
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
              <PostList>

                  <div className="row">
                    {posts.reverse().map((post, key) => (
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

              </PostList>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
              <StickyWrapper>
                <RecentCategories />
                <NewsletterSide />
              </StickyWrapper>
            </div>
          </div>
        </>
      );
    }


    return (
      <>
        <SubNavBar media="Blog" category="Category" title={`${category.replace(/^\w/, (c) => c.toUpperCase())}`} />
        <div className="container" style={{ margin: '25px auto' }}>
          {allPosts}
        </div>
      </>
    );
  }
}
