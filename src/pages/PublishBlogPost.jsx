import React, { Component, Fragment } from 'react'

import {
  Input,
  TextArea,
  Button
} from "../styled-components/forms.styled-components";

export default class PublishBlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      slug: "",
      category: "",
      title: "",
      description: "",
      tags: "",
      isSlugValid: true,
      uploaded: null,
      uploadedFiles: [],
      uploadedCovers: [],
      allFieldsFilled: false
    };

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.changeSlugFromTitle = this.changeSlugFromTitle.bind(this);

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
    // setTimeout(() => {
    //   this.disabledSubmitButton();
    // }, 0);
  }

  async changeSlugFromTitle() {
    let slug = this.state.title
      .toLowerCase()
      .split(" ")
      .join("-");
    await this.setStateAsync({ slug });
  }

  render() {
    return (
      <Fragment>
        <div className="container" style={{ margin: "35px auto" }}>
          <div className="row">
            <div className="col-12">
              <h6
                className="text-center"
                style={{ fontSize: "14px", color: "#999", fontWeight: "900" }}
              >
                PUBLISH NEW BLOG POST
              </h6>
            </div>
          </div>
          <form>
            <div className="row">
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12"
                style={{ paddingRight: "3px" }}>
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
            </div>
          </form>
        </div>
      </Fragment>
    )
  }
}
