import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';

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

const RelatedPosts = (props) => {
  const {
    category,
    slug,
  } = props;
  const [relatedCategoryPosts, setRelatedCategoryPosts] = useState([]);

  console.log('testing slug in related posts:', slug);
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

  const getPostByCategory = async () => {
    console.log('slug in related posts:', slug);
    const dates = slug.split('/');
    const response = await fetch(
<<<<<<< HEAD
      `https://cryptic-activist-backend.herokuapp.com/blog/get/category/newest/${slug}/${category}`,
=======
      `http://localhost:5000/blog/get/category/newest/${category}/${dates[0]}/${dates[1]}/${dates[2]}/${dates[3]}`,
>>>>>>> feature
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
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const handleRelatedPosts = async () => {
      const relatedCategoryPostsRes = await getPostByCategory(category, slug);
      setRelatedCategoryPosts(relatedCategoryPostsRes);
    };
    handleRelatedPosts();
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

  if (relatedCategoryPosts.found === false) {
    postRelatedPost = (
      <LoadingRelatedPostLabel />
    );
  } else {
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
            relatedCategoryPosts.map((post, key) => getColumn(post, key))
            }
            </div>
          </div>
        </RelatedPostList>
      </>
    );
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
