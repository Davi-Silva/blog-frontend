import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropType from 'prop-types';
import _ from 'lodash';

import {
  LoadingRelatedPostLabel,
  RelatedPostLabel,
  RelatedPostList,
  AuthorInfoDiv,
  Wrapper,
  Author,
  RelatedPost,
  RelatedPostH6,
  ColumnRight,
  ColumnCenter,
  ColumnLeft,
} from '../../../styled-components/components/post-related-posts.styled-components';

import * as PostAction from '../../../store/actions/blog/relatedPosts';

const RelatedPosts = (props) => {
  const relatedPosts = useSelector((state) => state.post.relatedPosts);
  const dispatch = useDispatch();
  const parseDate = (input) => {
    const parts = input.match(/(\d+)/g);
    return new Date(parts[0], parts[1] - 1, parts[2]);
  };

  const handleParseDate = (publishedOn) => {
    const dateFormatted = parseDate(publishedOn);
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
    return formattedDate;
  };

  useEffect(() => {
    const {
      category,
      slug,
    } = props;
    dispatch(PostAction.getRelatedPosts(category, slug));
  }, []);


  const getColumn = (post, index) => {
    let column;
    if (index === 0) {
      column = (
        <>
          <ColumnLeft className="col-lg-4 col-md-12 col-sm-12 col-12">
            <RelatedPost to={`/blog/${post.slug}`}>
              <ul>
                <li>
                  <div
                    className="cover"
                    style={{
                      backgroundImage: `url(${post.cover.url})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      width: '100%',
                    }}
                  />
                </li>
                <li className="info-div">
                  <AuthorInfoDiv>
                    <ul>
                      <li className="li-info">
                        <RelatedPostH6>
                          {post.title}
                        </RelatedPostH6>
                      </li>
                      <li className="li-info">
                        <Author>
                          <li className="author-profile-img">
                            <img src={post.author.profileImage.url} alt="" />
                          </li>
                          <li className="author-name">
                            <b>
                              {post.author.name}
                            </b>
                            <p>
                              {handleParseDate(post.publishedOn)}
                            </p>
                          </li>
                        </Author>
                      </li>
                    </ul>
                  </AuthorInfoDiv>
                </li>
              </ul>
            </RelatedPost>
          </ColumnLeft>
        </>
      );
    } else if (index === 1) {
      column = (
        <>
          <ColumnCenter className="col-lg-4 col-md-12 col-sm-12 col-12">
            <RelatedPost to={`/blog/${post.slug}`}>
              <ul>
                <li>
                  <div
                    className="cover"
                    style={{
                      backgroundImage: `url(${post.cover.url})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      width: '100%',
                    }}
                  />
                </li>
                <li className="info-div">
                  <AuthorInfoDiv>
                    <ul>
                      <li className="li-info">
                        <RelatedPostH6>
                          {post.title}
                        </RelatedPostH6>
                      </li>
                      <li className="li-info">
                        <Author>
                          <li className="author-profile-img">
                            <img src={post.author.profileImage.url} alt="" />
                          </li>
                          <li className="author-name">
                            <b>
                              {post.author.name}
                            </b>
                            <p>
                              {handleParseDate(post.publishedOn)}
                            </p>
                          </li>
                        </Author>
                      </li>
                    </ul>
                  </AuthorInfoDiv>
                </li>
              </ul>
            </RelatedPost>
          </ColumnCenter>
        </>
      );
    } else if (index === 2) {
      column = (
        <>
          <ColumnRight className="col-lg-4 col-md-12 col-sm-12 col-12">
            <RelatedPost to={`/blog/${post.slug}`}>
              <ul>
                <li>
                  <div
                    className="cover"
                    style={{
                      backgroundImage: `url(${post.cover.url})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      width: '100%',
                    }}
                  />
                </li>
                <li className="info-div">
                  <AuthorInfoDiv>
                    <ul>
                      <li className="li-info">
                        <RelatedPostH6>
                          {post.title}
                        </RelatedPostH6>
                      </li>
                      <li className="li-info">
                        <Author>
                          <li className="author-profile-img">
                            <img src={post.author.profileImage.url} alt="" />
                          </li>
                          <li className="author-name">
                            <b>
                              {post.author.name}
                            </b>
                            <p>
                              {handleParseDate(post.publishedOn)}
                            </p>
                          </li>
                        </Author>
                      </li>
                    </ul>
                  </AuthorInfoDiv>
                </li>
              </ul>
            </RelatedPost>
          </ColumnRight>
        </>
      );
    }

    return column;
  };

  let postRelatedPost;

  if (relatedPosts.loading) {
    postRelatedPost = (
      <LoadingRelatedPostLabel />
    );
  } else if (!relatedPosts.loading && relatedPosts.fetched) {
    if (!_.isEmpty(relatedPosts.data)) {
      postRelatedPost = (
        <>
          <RelatedPostLabel>
            Related Blog Posts
          </RelatedPostLabel>
          <br />
          <RelatedPostList>
            <div className="container">
              <div className="row">
                {
              relatedPosts.data.map((post, key) => getColumn(post, key))
              }
              </div>
            </div>
          </RelatedPostList>
        </>
      );
    }
  }


  return (
    <>
      <Wrapper>
        {postRelatedPost}
      </Wrapper>
    </>
  );
};

export default RelatedPosts;

RelatedPost.propTypes = {
  category: PropType.string.isRequired,
  slug: PropType.string.isRequired,
};
