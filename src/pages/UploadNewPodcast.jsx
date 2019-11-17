import React, { Component } from "react";

import { uniqueId } from "lodash";
import filesize from "filesize";
import slugify from 'slugify';
import { Editor } from '@tinymce/tinymce-react';

import api from "../services/api";

// import GlobalStyle from "./styles/global";
// import { Container, Content } from "./styles";

import Upload from "../components/UI/admin/UploadField.component";
import FileList from "../components/UI/admin/FileList.component";
import UploadCover from "../components/UI/admin/UploadFieldCover.component";
import FileListCover from "../components/UI/admin/FileListCover.component";
import SubNavBar from '../components/UI/navbar/SubNavBar';

import {
  Input,
  Button
} from "../styled-components/forms.styled-components";

import {
  UploadedOn,
} from '../styled-components/podcast.styled-components';

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
      isSlugValid: true,
      uploaded: null,
      uploadedFiles: [],
      uploadedCovers: [],
      allFieldsFilled: false
    };
    this.verifySlug = this.verifySlug.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.changeSlugFromTitle = this.changeSlugFromTitle.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTags = this.onChangeTags.bind(this);
    this.setGlobalVariable = this.setGlobalVariable.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  async verifySlug(slug) {
    let response = await fetch(
      `http://localhost:5000/podcasts/validation/slug/${slug}`,
      // `https://cryptic-activist-backend.herokuapp.com/podcasts/validation/slug/${slug}`,
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
      `http://localhost:5000/podcasts/upload`,
      // "https://cryptic-activist-backend.herokuapp.com/podcasts/upload",
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

  async disabledSubmitButton() {
    if (this.state.category !== "" && this.state.title !== "" && this.state.tags !== "" && this.state.description !== "" && this.state.uploadedFiles.length > 0 && this.state.uploadedCovers.length > 0) {
      await this.setStateAsync({
        allFieldsFilled: true
      });
    } else {
      await this.setStateAsync({
        allFieldsFilled: false
      })
    }
  }

  async onChangeTitle(e) {
    this.setStateAsync({
      title: e.target.value
    });
    setTimeout(() => {
      this.changeSlugFromTitle(this.state.title);
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

  async onChangeCategory(e) {
    this.setStateAsync({
      category: e.target.value
    });
    setTimeout(() => {
      this.disabledSubmitButton();
    }, 0);
  }

  async onChangeDescription(e) {
    this.setStateAsync({
      description: e.target.value
    });
    setTimeout(() => {
      this.disabledSubmitButton();
    }, 0);
  }

  async onChangeTags(e) {
    this.setStateAsync({
      tags: e.target.value
    });
    setTimeout(() => {
      this.disabledSubmitButton();
    }, 0);
  }

  async onSubmit(e) {
    e.preventDefault();
    const {isSlugValid, slug, category, title, description, tags, uploadedCovers, uploadedFiles} = this.state;
    const podcastInfo = {
      isSlugValid: isSlugValid,
      slug,
      category: category,
      title: title,
      description: description,
      tags: tags,
      cover: uploadedCovers[uploadedCovers.length - 1].id,
      audioFile: uploadedFiles[uploadedFiles.length - 1].id
    };
    console.log("podcast_info:", podcastInfo);
    console.log(
      "uploadedFiles:",
      uploadedFiles[uploadedFiles.length - 1].id
    );
    console.log(
      "uploadedCovers:",
      uploadedCovers[uploadedCovers.length - 1].id
    );
    let isSlugValidRes = await this.verifySlug(this.state.slug);
    console.log("isSlugValidRes:", isSlugValidRes);
    if (isSlugValidRes.valid) {
      let res = await this.uploadPodcast(podcastInfo);
      this.setStateAsync({
        uploaded: res.uploaded
      });
      console.log(res);
    } else {
      console.log("Slug is invalid");
    }
  }

  async setGlobalVariable() {
    let bodyRequest = {
      type: "podcasts",
      title: this.state.title
    };
    // let response = fetch("https://cryptic-activist-backend.herokuapp.com/podcasts/set/global-variable", {
      let response = fetch("http://localhost:5000/podcasts/set/global-variable", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bodyRequest)
    });
    // let data = await response.json();
    return response;
  }

  async componentDidUpdate() {
    let res = await this.setGlobalVariable();

    console.log("resolve:", res);
    if (this.state.uploaded) {
      console.log("Podcast Uploaded");
      this.props.history.push("/admin");
    }
  }

  async componentDidMount() {
    const responseAudioFile = await api.get(
      `/podcasts/audio/${this.state.title}`
    );
    const responseCover = await api.get(`/podcasts/cover/${this.state.title}`);

    this.setState({
      uploadedFiles: responseAudioFile.data.map(file => ({
        id: file._id,
        name: file.name,
        readableSize: filesize(file.size),
        preview: file.url,
        uploaded: true,
        url: file.url
      }))
    });

    this.setState({
      uploadedCovers: responseCover.data.map(file => ({
        id: file._id,
        name: file.name,
        readableSize: filesize(file.size),
        preview: file.url,
        uploaded: true,
        url: file.url
      }))
    });
  }

  handleUpload = files => {
    const uploadedFiles = files.map(file => ({
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
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
    });

    uploadedFiles.forEach(this.processUpload);
    setTimeout(() => {
      this.disabledSubmitButton();
    }, 0);
  };

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

  updateFile = (id, data) => {
    this.setState({
      uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
        return id === uploadedFile.id
          ? { ...uploadedFile, ...data }
          : uploadedFile;
      })
    });
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

  processUpload = uploadedFile => {
    const data = new FormData();

    data.append("file", uploadedFile.file, uploadedFile.name);

    api
      .post("/podcasts/upload/audio", data, {
        onUploadProgress: e => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total));

          this.updateFile(uploadedFile.id, {
            progress
          });
        }
      })
      .then(response => {
        this.updateFile(uploadedFile.id, {
          uploaded: true,
          id: response.data._id,
          url: response.data.url
        });
      })
      .catch(() => {
        this.updateFile(uploadedFile.id, {
          error: true
        });
      });
  };

  processUploadCover = uploadedCovers => {
    const data = new FormData();

    data.append("file", uploadedCovers.file, uploadedCovers.name);

    api
      .post("/podcasts/upload/cover", data, {
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

  handleDelete = async id => {
    await api.delete(`/podcasts/delete/audio/${id}`);

    this.setState({
      uploadedFiles: this.state.uploadedFiles.filter(file => file.id !== id)
    });
  };

  handleDeleteCover = async id => {
    await api.delete(`/podcasts/delete/cover/${id}`);

    this.setState({
      uploadedCovers: this.state.uploadedCovers.filter(file => file.id !== id)
    });
  };

  handleEditorChange = async (e) => {
    console.log('Content was updated:', e.target.getContent());
    this.setStateAsync({
      description: e.target.getContent()
    });
  }

  componentWillUnmount() {
    this.state.uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview));
    this.state.uploadedCovers.forEach(file =>
      URL.revokeObjectURL(file.preview)
    );
  }

  render() {
    const { 
      uploadedFiles,
      uploadedCovers,
      title,
      // slug,
      category,
      tags, 
      // description,
      allFieldsFilled
    } = this.state;
    return (
      <>
        <SubNavBar media="Podcast" category="Upload" title={title} />
        <div className="container">
          <form onSubmit={this.onSubmit} method="POST">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <aside style={{ marginTop: '20px' }}>
                  <div>
                    <UploadCover onUpload={this.handleUploadCover} />
                    {!!uploadedCovers.length && (
                      <FileListCover
                        files={uploadedCovers}
                        onDelete={this.handleDeleteCover}
                      />
                    )}
                  </div>
                </aside>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                <main style={{marginTop: "20px"}}>
                  <UploadedOn>
                    Uploaded on&nbsp;
                    <span style={{ color: '#333', fontWeight: '700' }}>Date</span>
                  </UploadedOn>
                  <Input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Title..."
                      value={title}
                      autoComplete="off"
                      style={{  
                        color: "#333",
                        fontSize: "23px",
                        fontWeight: "900",
                        width: "100%"
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
                  <div>
                    <Upload onUpload={this.handleUpload} />
                    {!!uploadedFiles.length && (
                      <FileList
                        files={uploadedFiles}
                        onDelete={this.handleDelete}
                      />
                    )}
                  </div>
                  <div style={{margin: "50px 0px 20px 0px"}}>
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
                          'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
                      }}
                      onChange={this.handleEditorChange}
                    />
                  </div>
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
                </main>
                <Button disabled={!allFieldsFilled}>Upload</Button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}