import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Div,
  SeeAll,
  PostListTitleDiv,
  PostListTitle,
  Card,
  Cover,
  CoverLoading,
  BackgroundWrapper,
  PublishedOn,
  PostInfoDiv,
  Author,
  Title,
  CategoryDiv,
  Category,
} from '../../../styled-components/blog-posts-article.styled-components';

import * as ArticlesAction from '../../../store/actions/blog/articles';

const Articles = () => {
  const articlesList = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  const parseDate = (input) => {
    const parts = input.match(/(\d+)/g);
    return new Date(parts[0], parts[1] - 1, parts[2]);
  };

  useEffect(() => {
    dispatch(ArticlesAction.getArticles());
  }, []);

  const formatDate = (publishedOn) => {
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

  const articles = (
    <>
      {articlesList.data.map((post) => (
        <div
          key={post.id}
          className="col-lg-4 col-md-4 col-sm-6 col-12"
        >
          <Card
            to={`/blog/${post.slug}`}
            className="col-sm-6 col-12 p-0"
            style={{ border: 'none' }}
          >
            <Cover
              src={post.cover.url}
              alt="React.js"
              width="100%"
              style={{
                backgroundImage: `url(${post.cover.url})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              <BackgroundWrapper />
            </Cover>
            <PostInfoDiv>
              <Author>
                <ul>
                  <li>
                    <img src={post.author.profileImage.url} alt="Author" />
                  </li>
                  <li>
                    <div>
                      <span>{post.author.name}</span>
                    </div>
                  </li>
                </ul>
              </Author>
              <PublishedOn>
                {formatDate(post.publishedOn)}
              </PublishedOn>
              <Title>{post.title}</Title>
              <CategoryDiv>
                <Category>
                  {post.category}
                </Category>
              </CategoryDiv>
            </PostInfoDiv>
          </Card>
        </div>
      ))}
    </>
  );

  let articlesVar;

  if (articlesList.loading) {
    articlesVar = (
      <>
        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
          <CoverLoading
            style={{
              animationDelay: '0s',
            }}
          />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
          <CoverLoading
            style={{
              animationDelay: '0.33s',
            }}
          />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
          <CoverLoading
            style={{
              animationDelay: '0.66s',
            }}
          />
        </div>
      </>
    );
  } else if (articlesList.fetched) {
    articlesVar = (
      <>
        {articles}
      </>
    );
  }


  return (
    <>
      <Div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <PostListTitleDiv>
                <PostListTitle>
                Article
                </PostListTitle>
              </PostListTitleDiv>
            </div>
            {articlesVar}
          </div>
        </div>
      </Div>
    </>
  );
};

export default Articles;
