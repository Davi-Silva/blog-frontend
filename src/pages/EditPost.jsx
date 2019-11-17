/* eslint-disable react/prop-types */
import React, { Component } from 'react';
// import { Editor } from '@tinymce/tinymce-react';
import slugify from 'slugify';

import {
  // Input,
  UploadedOn,
  // Update,
} from '../styled-components/edit-post.styled-components';

import SubNavBar from '../components/UI/navbar/SubNavBar';

export default class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: null,
      // slug: '',
      title: '',
      // content: '',
      category: '',
      // cover: null,
      // coverURL: '',
      // tags: '',
      // publishedOn: '',
      // updatedOn: null,
      // updated: false,
    };
    this.setStateAsync = this.setStateAsync.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getPostBySlug = this.getPostBySlug.bind(this);
    this.parseDate = this.parseDate.bind(this);
  }

  async componentDidMount() {
    const post = await this.getPostBySlug();
    console.log('edit post:', post);
    if (post.length > 0) {
      const {
        id, slug, title, content, cover, category, tags, publishedOn, updatedOn,
      } = post[0];
      const dateFormatted = this.parseDate(publishedOn);
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
      if (updatedOn === null) {
        await this.setStateAsync({
          id,
          slug,
          title,
          category,
          content,
          cover,
          coverURL: cover.url,
          tags,
          publishedOn: formattedDate,
          uploaded: false,
        });
      }
      if (updatedOn !== null) {
        const dateFormattedUpdated = this.parseDate(updatedOn);
        const formattedDateUpdated = `${months[dateFormattedUpdated.getMonth()]} ${dateFormattedUpdated.getDate()} ${dateFormattedUpdated.getFullYear()}`;
        await this.setStateAsync({
          id,
          slug,
          title,
          category,
          content,
          cover,
          coverURL: cover.url,
          tags,
          publishedOn: formattedDate,
          updatedOn: formattedDateUpdated,
          uploaded: false,
        });
      }
    } else {
      const { history } = this.props;
      history.push('/404');
    }
  }

  async onChangeTitle(e) {
    await this.setStateAsync({
      title: e.target.value,
    });
    setTimeout(() => {
      this.changeSlugFromTitle(this.state.title);
    }, 0);
  }

  async onChangeDescription(e) {
    await this.setStateAsync({
      description: e.target.value,
    });
  }

  async onChangeCategory(e) {
    await this.setStateAsync({
      category: e.target.value,
    });
  }

  async onChangeTags(e) {
    this.setStateAsync({
      tags: e.target.value,
    });
  }

  async getPostBySlug() {
    const { match } = this.props;
    const { slug } = match.params;
    console.log('slug:', slug);
    this.response = await fetch(
      // `https://cryptic-activist-backend.herokuapp.com/podcasts/get/${slug}`,
      `http://localhost:5000/blog/get/slug/${slug}`,
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

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  parseDate(input) {
    this.parts = input.match(/(\d+)/g);
    return new Date(this.parts[0], this.parts[1] - 1, this.parts[2]);
  }

  async changeSlugFromTitle() {
    const { title } = this.state;
    const lowerCaseTitle = title.toLowerCase();
    const slug = slugify(lowerCaseTitle);
    await this.setStateAsync({ slug });
  }


  render() {
    const { title, category } = this.state;
    return (
      <>
        <SubNavBar media="Blog" category={category} title={title} />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-8 col-12">
              <div
                className="cover"
                style={{
                  width: '100%',
                  height: '300px',
                  border: '2px dotted #bbb',
                  borderTop: 'none',
                  borderBottomLeftRadius: '10px',
                  borderBottomRightRadius: ' 10px',
                }}
              >
                <p
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    paddingTop: '25px',
                    color: '#bbb',
                  }}
                >
Cover Placeholder

                </p>
              </div>
              <UploadedOn style={{ margin: '0' }}>
                    Updated on&nbsp;
                <span style={{ color: '#333', fontWeight: '700', margin: '10px 0' }}>Date</span>
              </UploadedOn>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12" />
          </div>
        </div>
      </>
    );
  }
}
