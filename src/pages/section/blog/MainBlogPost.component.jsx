import React, { useState, useEffect } from 'react';

import BlogPostListMain from '../../../components/UI/lists/blog-home/BlogPostListMain.component';

import {
  ColumnLeft,
  ColumnRight,
  BlogTopPost,
} from '../../../styled-components/blog-posts.styled-components';

const MainBlogPost = () => {
  const [postsList, setPostsList] = useState([]);

  const getPosts = async () => {
    const response = await fetch('http://localhost:5000/blog/home/main-post', {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log('data test>', data);
    setPostsList(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <BlogTopPost className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            {postsList.map((post, index) => {
              if (index === 0) {
                return (
                  <>
                    <BlogPostListMain
                      key={index}
                      type="Blog"
                      slug={post.slug}
                      imgSrc={post.cover.url}
                      title={post.title}
                      category={post.category}
                      publishedOn={post.publishedOn}
                      index={index}
                    />
                  </>
                );
              }
              return (
                <>
                </>
              );
            })}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="row">
              {postsList.map((post, index) => {
                // console.log('postMapMainTop:', post);
                if (index > 0) {
                  if (index === 1 || index === 3) {
                    return (
                      <>
                        <ColumnLeft className="col-lg-6 col-md-6 col-sm-6 col-12">
                          <BlogPostListMain
                            categoryColor="grey"
                            key={index}
                            type="Blog"
                            slug={post.slug}
                            imgSrc={post.cover.url}
                            title={post.title}
                            category={post.category}
                            publishedOn={post.publishedOn}
                            index={index}
                          />
                        </ColumnLeft>
                      </>
                    );
                  }
                  if (index === 2 || index === 4) {
                    return (
                      <>
                        <ColumnRight className="col-lg-6 col-md-6 col-sm-6 col-12">
                          <BlogPostListMain
                            categoryColor="blue"
                            key={index}
                            type="Blog"
                            slug={post.slug}
                            imgSrc={post.cover.url}
                            title={post.title}
                            category={post.category}
                            publishedOn={post.publishedOn}
                            index={index}
                          />
                        </ColumnRight>
                      </>
                    );
                  }
                }
                return (
                  <>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </BlogTopPost>
    </>
  );
};

export default MainBlogPost;
