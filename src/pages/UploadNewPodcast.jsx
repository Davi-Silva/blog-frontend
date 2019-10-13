import React, { Component } from "react";

// import debounce from "lodash/debounce";

import {
  Input,
  TextArea,
  Button
} from "../styled-components/forms.styled-components";

export default class UploadNewPodcast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      slug: "",
      category: "",
      title: "",
      description: "",
      tags: "",
      filepath: "/path/to/the/file",
      length: "5:35",
      isSlugValid: true,
      uploaded: null
    };
    this.verifySlug = this.verifySlug.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.changeSlugFromTitle = this.changeSlugFromTitle.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTags = this.onChangeTags.bind(this);
  }

  async verifySlug(slug) {
    let response = await fetch(
      // `https://course-backend.herokuapp.com/podcasts/get/${}`,
      `http://localhost:5000/podcasts/validation/slug/${slug}`,
      {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    let data = await response.json();
    return data;
  }

  async uploadPodcast(podcast) {
    let response = await fetch(
      // `https://course-backend.herokuapp.com/podcasts/get/${}`,
      "http://localhost:5000/podcasts/upload",
      {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(podcast)
      }
    );
    let data = await response.json();
    return data;
  }

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  async onChangeTitle(e) {
    this.setStateAsync({
      title: e.target.value
    });
    setTimeout(() => {
      this.changeSlugFromTitle(this.state.title);
    }, 0);
  }

  async changeSlugFromTitle() {
    let slug = this.state.title
      .toLowerCase()
      .split(" ")
      .join("-");
    await this.setStateAsync({ slug });
  }

  async onChangeCategory(e) {
    this.setStateAsync({
      category: e.target.value
    });
  }

  async onChangeDescription(e) {
    this.setStateAsync({
      description: e.target.value
    });
  }

  async onChangeTags(e) {
    this.setStateAsync({
      tags: e.target.value
    });
  }

  async onSubmit(e) {
    e.preventDefault();
    const podcast_info = {
      isSlugValid: this.state.isSlugValid,
      category: this.state.category,
      title: this.state.title,
      description: this.state.description,
      tags: this.state.tags,
      filepath: this.state.filepath,
      length: this.state.length
    };
    let isSlugValidRes = await this.verifySlug(this.state.slug);
    console.log("isSlugValidRes:", isSlugValidRes);
    if (isSlugValidRes.valid) {
      let res = await this.uploadPodcast(podcast_info);
      this.setStateAsync({
        uploaded: res.uploaded
      });
      console.log(res);
    } else {
      console.log("Slug is invalid");
    }
  }

  async componentDidUpdate() {
    if (this.state.uploaded) {
      console.log("Podcast Uploaded");
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="container" style={{ margin: "35px auto" }}>
          <div className="row">
            <div className="col-12">
              <h6
                className="text-center"
                style={{ fontSize: "14px", color: "#999", fontWeight: "900" }}
              >
                UPLOAD NEW PODCAST
              </h6>
            </div>
          </div>
          <form onSubmit={this.onSubmit} method="POST">
            <div className="row">
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12"
                style={{ paddingRight: "3px" }}
              >
                <Input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title"
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                  required
                />
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12"
                style={{ paddingLeft: "3px" }}
              >
                <Input
                  type="text"
                  id="Slug"
                  name="slug"
                  placeholder="Slug"
                  value={this.state.slug}
                  // onChange={this.onChangeTitle}
                  disabled
                  required
                />
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12"
                style={{ paddingRight: "3px" }}
              >
                <Input
                  type="text"
                  id="category"
                  name="category"
                  placeholder="Category"
                  value={this.state.category}
                  onChange={this.onChangeCategory}
                  required
                />
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12"
                style={{ paddingLeft: "3px" }}
              >
                <Input
                  type="text"
                  id="tags"
                  name="tags"
                  placeholder="Tags"
                  value={this.state.tags}
                  onChange={this.onChangeTags}
                  required
                />
              </div>
              <div className="col-12">
                <TextArea
                  id="description"
                  name="description"
                  placeholder="Description"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                  required
                />
              </div>
              <div className="col-12">
                <Input
                  type="file"
                  id="audio_file"
                  name="audio_file"
                  placeholder="Audio File"
                  style={{ margin: "-4px auto 5px auto" }}
                  required
                />
              </div>
              <div className="col-12">
                <Button>Upload</Button>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
