import React, { useEffect, useState } from 'react';

import {
  Div,
  SeeAll,
  PostListTitleDiv,
  PostListTitle,
  Card,
  Cover,
  BackgroundWrapper,
  PublishedOn,
  PostInfoDiv,
  Author,
  Title,
  CategoryDiv,
  Category,
} from '../../../styled-components/blog-posts-article.styled-components';

const Articles = () => {
  const [articlesState, setArticlesState] = useState([]);

  const parseDate = (input) => {
    const parts = input.match(/(\d+)/g);
    return new Date(parts[0], parts[1] - 1, parts[2]);
  };

  useEffect(() => {
    const getTutorials = async () => {
      const response = await fetch('https://cryptic-activist-backend.herokuapp.com/blog/home/articles', {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setArticlesState(data);
    };
    getTutorials();
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

  console.log('Article author:', articlesState);

  const articles = (
    <>
      {articlesState.map((post, key) => (
        <>
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
        </>
      ))}
    </>
  );


  return (
    <>
      <Div>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-9 col-6">
              <PostListTitleDiv>
                <PostListTitle>
                Article
                </PostListTitle>
              </PostListTitleDiv>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-6">
              <SeeAll to="/blog/articles">
                See More
              </SeeAll>
            </div>
            {articles}
          </div>
        </div>
      </Div>
    </>
  );
};

export default Articles;
