import React, { useEffect, useState } from 'react';

import {
  PostListTitleDiv,
  PostListTitle,
  Card,
  Cover,
  BackgroundWrapper,
  PublishedOn,
  PostInfoDiv,
  Title,
  CategoryDiv,
  Category,
} from '../../../styled-components/blog-posts-article.styled-components';

const Articles = () => {
  const [tutorialsState, setTutorialsState] = useState([]);

  useEffect(() => {
    const getTutorials = async () => {
      const response = await fetch(`http://localhost:5000/blog/?page=${1}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log('data tiutorials:', data);
      setTutorialsState(data);
    };
    getTutorials();
  }, []);


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <PostListTitleDiv>
              <PostListTitle>
                Tutorials
              </PostListTitle>
            </PostListTitleDiv>
          </div>
          {tutorialsState.map((post) => (
            <>
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
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
                    <CategoryDiv>
                      <Category>
                        {post.category}
                      </Category>
                    </CategoryDiv>
                  </Cover>
                  <PostInfoDiv>
                      <PublishedOn>
                        {post.publishedOn}
                      </PublishedOn>
                      <Title>{post.title}</Title>
                    </PostInfoDiv>
                </Card>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Articles;
