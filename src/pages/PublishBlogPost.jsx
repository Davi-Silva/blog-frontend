import React, { Component } from 'react';

import { uniqueId } from 'lodash';
import filesize from 'filesize';
import slugify from 'slugify';
import { Editor } from '@tinymce/tinymce-react';

import api from '../services/api';

import UploadCover from '../components/UI/admin/UploadFieldBlogPostCover.component';
import FileListCover from '../components/UI/admin/FileListBlogPostCover.component';
import SubNavBar from '../components/UI/navbar/SubNavBar';

import {
  Input,
  Button,
} from '../styled-components/forms.styled-components';

export default class PublishBlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSlugValid: true,
      slug: '',
      title: '',
      category: '',
      tags: '',
      content: '',
      uploaded: null,
      uploadedCovers: [],
      author: '',
      allFieldsFilled: false
    };
    this.verifySlug = this.verifySlug.bind(this);
    this.publishPost = this.publishPost.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeTags = this.onChangeTags.bind(this);
    this.disabledSubmitButton = this.disabledSubmitButton.bind(this);
    this.handleUploadCover = this.handleUploadCover.bind(this);
    this.handleDeleteCover = this.handleDeleteCover.bind(this);
    this.changeSlugFromTitle = this.changeSlugFromTitle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async componentDidMount() {
    const { title } = this.state;
    const responseCover = await api.get(`/blog/cover/${title}`);

    this.setState({
      uploadedCovers: responseCover.data.map((file) => ({
        id: file._id,
        name: file.name,
        readableSize: filesize(file.size),
        preview: file.url,
        uploaded: true,
        url: file.url,
      })),
    });
  }

  async componentDidUpdate() {
    const { uploaded, uploadedCovers } = this.state;
    const res = await this.setGlobalVariable();

    console.log('covers:', uploadedCovers)
    console.log('resolve:', res);
    if (uploaded) {
      console.log('Blog Post Publish');
      this.props.history.push('/admin');
    }
  }

  async onChangeTitle(e) {
    const { title } = this.state;
    this.setStateAsync({
      title: e.target.value,
    });
    setTimeout(() => {
      this.changeSlugFromTitle(title);
    }, 0);
    setTimeout(() => {
      this.disabledSubmitButton();
    }, 0);
  }

  async changeSlugFromTitle() {
    const {title} = this.state;
    let lowerCaseTitle = title.toLowerCase();
    let slug = slugify(lowerCaseTitle);
    await this.setStateAsync({ slug });
  }

  async onChangeTitle(e) {
    const { title } = this.state;
    this.setStateAsync({
      title: e.target.value,
    });
    setTimeout(() => {
      this.changeSlugFromTitle(title);
    }, 0);
    setTimeout(() => {
      this.disabledSubmitButton();
    }, 0);
  }

  handleEditorChange = async (e) => {
    console.log('Content was updated:', e.target.getContent());
    this.setStateAsync({
      content: e.target.getContent()
    });
  }


  async onChangeCategory(e) {
    this.setStateAsync({
      category: e.target.value,
    });
    setTimeout(() => {
      this.disabledSubmitButton();
    }, 0);
  }

  async onChangeTags(e) {
    this.setStateAsync({
      tags: e.target.value,
    });
    setTimeout(() => {
      this.disabledSubmitButton();
    }, 0);
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  async setGlobalVariable() {
    const { title } = this.state;
    const bodyRequest = {
      type: 'blog',
      title,
    };
    // let response = fetch("https://cryptic-activist-backend.herokuapp.com/podcasts/set/global-variable", {
    const response = fetch('http://localhost:5000/blog/set/global-variable', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyRequest),
    });
    // let data = await response.json();
    return response;
  }

  async verifySlug(slug) {
    this.response = await fetch(
      `http://localhost:5000/blog/validation/slug/${slug}`,
      // `https://cryptic-activist-backend.herokuapp.com/podcasts/validation/slug/${slug}`,
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

  async onSubmit(e) {
    e.preventDefault();
    const {isSlugValid, slug, category, title, content, tags, uploadedCovers, author } = this.state;
    console.log('cover on submit:', uploadedCovers)
    const postInfo = {
      isSlugValid: isSlugValid,
      slug,
      category: category,
      title: title,
      content: content,
      tags: tags,
      cover: uploadedCovers[0].id,
      author: 'Davi Silva',
    };
    console.log("podcast_info:", postInfo);
    console.log(
      "uploadedCovers:",
      uploadedCovers[uploadedCovers.length - 1].id
    );
    let isSlugValidRes = await this.verifySlug(this.state.slug);
    console.log("isSlugValidRes:", isSlugValidRes);
    if (isSlugValidRes.valid) {
      let res = await this.publishPost(postInfo);
      this.setStateAsync({
        uploaded: res.uploaded
      });
      console.log(res);
    } else {
      console.log("Slug is invalid");
    }
  }

  async publishPost(podcast) {
    this.response = await fetch(
      'http://localhost:5000/blog/publish',
      // "https://cryptic-activist-backend.herokuapp.com/podcasts/upload",
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(podcast),
      },
    );
    const data = await this.response.json();
    return data;
  }

  async disabledSubmitButton() {
    const {
      category, title, tags, content, uploadedCovers,
    } = this.state;
    if (category !== ''
     && title !== ''
     && tags !== ''
     && content !== ''
     && uploadedCovers.length > 0) {
      await this.setStateAsync({
        allFieldsFilled: true,
      });
    } else {
      await this.setStateAsync({
        allFieldsFilled: false,
      });
    }
  }

  handleUploadCover = files => {
    const uploadedCovers = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null
    }));

    this.setState({
      uploadedCovers: this.state.uploadedCovers.concat(uploadedCovers)
    });

    uploadedCovers.forEach(this.processUploadCover);
    setTimeout(() => {
      this.disabledSubmitButton();
    }, 0);
  };

  updateFileCover = (id, data) => {
    this.setState({
      uploadedCovers: this.state.uploadedCovers.map(uploadedCover => {
        return id === uploadedCover.id
          ? { ...uploadedCover, ...data }
          : uploadedCover;
      })
    });
  };

  processUploadCover = uploadedCovers => {
    const data = new FormData();

    data.append("file", uploadedCovers.file, uploadedCovers.name);

    api
      .post("/blog/publish/cover", data, {
        onUploadProgress: e => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total));

          this.updateFileCover(uploadedCovers.id, {
            progress
          });
        }
      })
      .then(response => {
        this.updateFileCover(uploadedCovers.id, {
          uploaded: true,
          id: response.data._id,
          url: response.data.url
        });
      })
      .catch(() => {
        this.updateFileCover(uploadedCovers.id, {
          error: true
        });
      });
  };

  handleDeleteCover = async id => {
    await api.delete(`/blog/delete/cover/${id}`);

    this.setState({
      uploadedCovers: this.state.uploadedCovers.filter(file => file.id !== id)
    });
  };


  componentWillUnmount() {
    this.state.uploadedCovers.forEach(file =>
      URL.revokeObjectURL(file.preview)
    );
  }


  render() {
    const { uploadedCovers, title, category, tags, allFieldsFilled } = this.state;
    return (
      <>
        <SubNavBar media="Blog" category="Publish" title={title} />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div style={{ height: '300px', width: '100%' }}>
                <UploadCover onUpload={this.handleUploadCover} />
                {!!uploadedCovers.length && (
                  <FileListCover
                    files={uploadedCovers}
                    onDelete={this.handleDeleteCover}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form style={{marginTop: '25px'}} onSubmit={this.onSubmit}>
                <Input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title..."
                  value={title}
                  autoComplete="off"
                  style={{  
                    color: "#333",
                    fontSize: "26px",
                    fontWeight: "900",
                    width: "100%",
                    marginBottom: '25px'
                  }}
                  onChange={this.onChangeTitle}
                  required
                />
                <Input
                  type="text"
                  id="category"
                  name="category"
                  placeholder="Category..."
                  value={category}
                  autoComplete="off"
                  style={{  
                    color: "#999",
                    fontSize: "16px",
                    fontWeight: "100",
                    margin: "10px 0",
                    width: "100%"
                  }}
                  onChange={this.onChangeCategory}
                  required
                />
                <Editor
                  apiKey='z1imaefgqfqi5gkj9tp9blogndyf2gp0aj3fgubdtz73p658'
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      'advlist autolink lists link image charmap print preview anchor',
                      'searchreplace visualblocks code fullscreen',
                      'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar:
                      'undo redo | formatselect | bold italic backcolor | \
                      alignleft aligncenter alignright alignjustify | \
                      bullist numlist outdent indent | removeformat | help'
                  }}
                  onChange={this.handleEditorChange}
                />
                <ul
                  style={{display: "inline"}}>
                  <li style={{display: "inline"}}>
                    <p style={{marginBottom: "0px", marginTop: "0px", position: "absolute", color: "#333"}}>Tags:</p>
                  </li>
                  <li style={{display: "inline", marginLeft: "45px", marginTop: "-20px"}}>
                    <Input
                        type="text"
                        id="tags"
                        name="tags"
                        value={tags}
                        autoComplete="off"
                        style={{  
                          color: "#333",
                          fontSize: "16px",
                          fontWeight: "100",
                        }}
                        onChange={this.onChangeTags}
                        required
                    />
                  </li>
                </ul>
                <Button>Publish</Button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
