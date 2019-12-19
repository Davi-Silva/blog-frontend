
import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import slugify from 'slugify';

import {
  Input,
  UploadedOn,
  // Update,
} from '../../styled-components/edit-post.styled-components';

import SubNavBar from '../../components/UI/navbar/SubNavBar';

export default class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: null,
      // slug: '',
      title: '',
      content: '',
      category: '',
      // cover: null,
      // coverURL: '',
      tags: '',
      // publishedOn: '',
      // updatedOn: null,
      // updated: false,
    };
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeTags = this.onChangeTags.bind(this)
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.setStateAsync = this.setStateAsync.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getPostBySlug = this.getPostBySlug.bind(this);
    this.parseDate = this.parseDate.bind(this);
  }

  async componentDidMount() {
    const post = await this.getPostBySlug();
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
    const { title } = this.state;
    await this.setStateAsync({
      title: e.target.value,
    });
    setTimeout(() => {
      this.changeSlugFromTitle(title);
    }, 0);
  }

  async onChangeContent(e) {
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

    this.response = await fetch(
      `https://cryptic-activist-backend.herokuapp.com/blog/get/slug/${slug}`,
      // `http://localhost:5000/blog/get/slug/${slug}`,
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

  handleEditorChange = async (e) => {
    this.setStateAsync({
      description: e.target.getContent(),
    });
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
    const { title, category, content, tags } = this.state;
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
              <UploadedOn style={{ margin: '5px 0 0 0' }}>
                    Updated on&nbsp;
                <span style={{ color: '#333', fontWeight: '700', margin: '10px 0' }}>Date</span>
              </UploadedOn>
              <Input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                value={title}
                autoComplete="off"
                style={{
                  color: '#333',
                  fontSize: '26px',
                  fontWeight: '700',
                  margin: '30px 0',
                  width: '100%',
                  letterSpacing: '1px',
                }}
                onChange={this.onChangeTitle}
                required
              />
              <Input 
                type="text"
                id="category"
                name="category"
                value={category}
                autoComplete="off"
                style={{
                  color: '#999',
                  fontSize: '16px',
                  fontWeight: '100',
                  margin: '10px 0px',
                  width: '100%',
                }}
                onChange={this.onChangeCategory}
                required
              />
              <Editor
                apiKey="z1imaefgqfqi5gkj9tp9blogndyf2gp0aj3fgubdtz73p658"
                initialValue={content}
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount',
                  ],
                  toolbar:
                    'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
                }}
                onChange={this.handleEditorChange}
              />
              <ul
                style={{ display: 'inline' }}
              >
                <li style={{ display: 'inline' }}>
                  <p style={{
                    marginBottom: '0px', marginTop: '0px', position: 'absolute', color: '#333',
                  }}
                  >
Tags:

                  </p>
                </li>
                <li style={{ display: 'inline', marginLeft: '45px', marginTop: '-20px' }}>
                  <Input
                    type="text"
                    id="tags"
                    name="tags"
                    value={tags}
                    autoComplete="off"
                    style={{
                      color: '#333',
                      fontSize: '16px',
                      fontWeight: '100',
                    }}
                    onChange={this.onChangeTags}
                    required
                  />
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12" />
          </div>
        </div>
      </>
    );
  }
}
