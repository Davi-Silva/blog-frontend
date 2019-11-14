import React, { Component } from 'react';

import {
  FaPlus,
} from 'react-icons/fa';
import BlogPostContent from './content/blog/blogContent.component';
import SearcForm from './content/searchForm.component';

import {
  Add,
  H6,
  Panel,
  Main,
} from '../../../styled-components/admin.styled-components';


export default class BlogPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createBlogPost: null,
      editBlogPost: null,
      others: null,
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.setState({
      createBlogPost: true,
      editBlogPost: false,
      others: false,
    });
  }

  render() {
    return (
      <Panel style={{ marginRight: '13px', marginTop: '3px' }}>
        <header style={{ paddingBottom: '10px' }}>
          <H6>BLOG</H6>
          <div className="row">
            <div className="col-10">
              <SearcForm media="blog" />
            </div>
            <div className="col-2">
              <Add to="/publish/blog">
                <FaPlus />
              </Add>
            </div>
          </div>
        </header>
        <section>
          <Main>
            <BlogPostContent />
          </Main>
        </section>
      </Panel>
    );
  }
}
