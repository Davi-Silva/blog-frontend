import React, { Component } from 'react';

import BlogPostList from '../components/UI/lists/BlogPostList.component';

class BlogHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  render() {
    const posts = [
      {
        title: 'This Is A Blog Pot Title',
        src: 'https://course-blog-podcast-bucket.s3.amazonaws.com/podcasts//1c81a1fb31e09fec1a35a34cc13fb42a-capa-99vidas-387.jpg',
      },
      {
        title: 'This Is A Blog Pot Title',
        src: 'https://course-blog-podcast-bucket.s3.amazonaws.com/podcasts/Podcast/0593a16764f4970efc0c631eaeb7b96a-world.jpeg',
      },
      {
        title: 'This Is A Blog Pot Title',
        src: 'https://course-blog-podcast-bucket.s3.amazonaws.com/podcasts//c53459559b871e293f6ac1ef14124052-capa-383.jpg',
      },
      {
        title: 'This Is A Blog Pot Title',
        src: 'https://course-blog-podcast-bucket.s3.amazonaws.com/podcasts//b49ad0afaea8ed140761a9c0436a0023-maxresdefault%20%281%29.jpg',
      },
      {
        title: 'This Is A Blog Pot Title',
        src: 'https://course-blog-podcast-bucket.s3.amazonaws.com/podcasts/Title/72caeade850b86874f57f95d617750df-Banff-National-Park_janeteasche_Getty-Images-56a97eeb5f9b58b7d0fbf876.jpg',
      },
      {
        title: 'This Is A Blog Pot Title',
        src: 'https://www.webfx.com/blog/images/assets/cdn.sixrevisions.com/0543-18-terranullius.jpg',
      },
      {
        title: 'This Is A Blog Pot Title',
        src: 'https://course-blog-podcast-bucket.s3.amazonaws.com/podcasts/Podcast%20%23%201%20-%20World%20is%20Round/fce7b293283b149bea41c5d8c3f69667-world.jpeg',
      },
    ];
    return (
      <>
        <div className="container" style={{ margin: '25px auto' }}>
          <div className="card-columns">
            {posts.map((post, key) => (
              <BlogPostList
                key={key}
                imgSrc={post.src}
                title={post.title}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default BlogHome;
