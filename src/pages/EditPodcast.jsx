/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import { Input, TextArea, A } from '../styled-components/forms.styled-components';

export default class EditPodcast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: '',
      title: '',
      description: '',
      category: '',
      audioFile: null,
      cover: null,
      tags: '',
    };

    this.setStateAsync = this.setStateAsync.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    const podcast = await this.getPodcastBySlug();
    if (podcast.length > 0) {
      const {
        slug, title, description, audioFile, cover, category, tags,
      } = podcast[0];
      await this.setStateAsync({
        slug,
        title,
        category,
        description,
        audioFile,
        cover,
        tags,
      });
    } else {
      const { history } = this.props;
      history.push('/404');
    }
  }

  async getPodcastBySlug() {
    const { match } = this.props;
    const { slug } = match.params;
    this.response = await fetch(
      `http://localhost:5000/podcasts/get/${slug}`,
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

  render() {
    const {
      slug, title, description, category, audioFile, cover, tags,
    } = this.state;
    return (
      <>
        <div className="container" style={{ margin: '35px auto' }}>
          <div className="row">
            <div className="col-12">
              <h6
                className="text-center"
                style={{ fontSize: '14px', color: '#999', fontWeight: '900' }}
              >
Edit Podcast
              </h6>
              <A to={`/podcast/${slug}`} style={{ margin: '0 auto', display: 'table' }}>GO TO PODCAST</A>
            </div>
          </div>
          <form method="POST">
            <div className="row">
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12"
                style={{ paddingRight: '3px' }}
              >
                <Input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title"
                  value={title}
                  onChange={this.onChangeTitle}
                  required
                />
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12"
                style={{ paddingLeft: '3px' }}
              >
                <Input
                  type="text"
                  id="Slug"
                  name="slug"
                  placeholder="Slug"
                  value={slug}
                  // onChange={this.onChangeTitle}
                  disabled
                  required
                />
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12"
                style={{ paddingRight: '3px' }}
              >
                <Input
                  type="text"
                  id="category"
                  name="category"
                  placeholder="Category"
                  value={category}
                  onChange={this.onChangeCategory}
                  required
                />
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12"
                style={{ paddingLeft: '3px' }}
              >
                <Input
                  type="text"
                  id="tags"
                  name="tags"
                  placeholder="Tags"
                  value={tags}
                  onChange={this.onChangeTags}
                  required
                />
              </div>
              <div className="col-12">
                <TextArea
                  id="description"
                  name="description"
                  placeholder="Description"
                  value={description}
                  onChange={this.onChangeDescription}
                  required
                />
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
