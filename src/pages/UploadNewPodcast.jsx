import React, { Component } from "react";
import {
  FaGoogle,
  FaSpotify,
  FaItunes,
} from 'react-icons/fa';

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
  Button,
  PodcastCoverUploaderPlaceholder,
  PodcastAudioFileUploaderPlaceholder,
  DivAside,
  ExternalEpisodesUrl,
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
      googleEpisodeUrl: "",
      spotifyEpisodeUrl: "",
      itunesEpisodeUrl: "",
      tags: "",
      tagsArray: [],
      isSlugValid: true,
      uploaded: null,
      uploadedFiles: [],
      uploadedCovers: [],
      allFieldsFilled: false,
      enableCoverUploader: false,
      warning: false,
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
    this.tagsToArray = this.tagsToArray.bind(this);
    this.enableCoverUploader = this.enableCoverUploader.bind(this);
    this.onChangeGoogleEpisodeUrl = this.onChangeGoogleEpisodeUrl.bind(this);
    this.onChangeSpotifyEpisodeUrl = this.onChangeSpotifyEpisodeUrl.bind(this);
    this.onChangeItunesEpisodeUrl = this.onChangeItunesEpisodeUrl.bind(this);
  }

  async verifySlug(slug) {
    let response = await fetch(
      `http://34.196.97.115:5000/podcasts/validation/slug/${slug}`,
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
      `http://34.196.97.115:5000/podcasts/upload`,
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
    const {
      category,
      title,
      tags,
      description,
      uploadedFiles,
      uploadedCovers,
    } = this.state;
    if (category !== ""
    && title !== ""
    && tags !== ""
    && description !== ""
    && uploadedFiles.length > 0
    && uploadedCovers.length > 0) {
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
    const {
      title,
      uploadedFiles,
      uploadedCovers,
    } = this.state;
    if (uploadedCovers.length === 0 && uploadedFiles.length === 0) {
      if (title.length <= 65) {
        this.setStateAsync({
          title: e.target.value
        });
      } else {
        this.setStateAsync({
          title: title.substring(0, title.length - 1),
        });
      }
  
      setTimeout(() => {
        this.changeSlugFromTitle(title);
        this.enableCoverUploader(title);
        this.disabledSubmitButton();
      }, 0);
    }
  }

  async changeSlugFromTitle() {
    const {title} = this.state;
    let lowerCaseTitle = title.toLowerCase();
    let slug = slugify(lowerCaseTitle);
    await this.setStateAsync({ slug });
  }

  async onChangeCategory(e) {
    const {
      category
    } = this.state;
    if (category.length <= 25) {
      this.setStateAsync({
        category: e.target.value
      });
    } else {
      this.setStateAsync({
        category: category.substring(0, category.length - 1),
      });
    }

    setTimeout(() => {
      this.disabledSubmitButton();
    }, 0);
  
  }

  async onChangeGoogleEpisodeUrl(e) {
    this.setStateAsync({
      googleEpisodeUrl: e.target.value
    });
    setTimeout(() => {
      this.disabledSubmitButton();
    }, 0);
  }

  async onChangeSpotifyEpisodeUrl(e) {
    this.setStateAsync({
      spotifyEpisodeUrl: e.target.value
    });
    setTimeout(() => {
      this.disabledSubmitButton();
    }, 0);
  }

  async onChangeItunesEpisodeUrl(e) {
    this.setStateAsync({
    itunesEpisodeUrl: e.target.value
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
      this.tagsToArray();
    }, 0);
    setTimeout(() => {
      this.disabledSubmitButton();
    }, 0);
  }

  tagsToArray() {
    const {tags} = this.state;
    let tempTags = tags.split(', ');
    this.setStateAsync({
      tagsArray: tempTags,
    });
  }

  async onSubmit(e) {
    e.preventDefault();
    const {
      isSlugValid,
      slug,
      category,
      title,
      description,
      googleEpisodeUrl,
      spotifyEpisodeUrl,
      itunesEpisodeUrl,
      tagsArray,
      uploadedCovers,
      uploadedFiles
    } = this.state;
    const podcastInfo = {
      isSlugValid,
      slug,
      category,
      title,
      description,
      googleEpisodeUrl,
      spotifyEpisodeUrl,
      itunesEpisodeUrl,
      tags: tagsArray,
      cover: uploadedCovers[uploadedCovers.length - 1].id,
      audioFile: uploadedFiles[uploadedFiles.length - 1].id
    };
    let isSlugValidRes = await this.verifySlug(this.state.slug);
    if (isSlugValidRes.valid) {
      let res = await this.uploadPodcast(podcastInfo);
      this.setStateAsync({
        uploaded: res.uploaded
      });
    } else {
      // console.log("Slug is invalid");
    }
  }

  async setGlobalVariable() {
    let bodyRequest = {
      type: "podcasts",
      title: this.state.title
    };
      let response = fetch("http://34.196.97.115:5000/podcasts/set/global-variable", {
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
    if (this.state.uploaded) {
      const {
        History
      } = this.props;
      History.push("/podcasts");
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
    this.setStateAsync({
      description: e.target.getContent()
    });
  }

  async enableCoverUploader(title) {
    if (title.length > 0) {
      setTimeout(() => {
        this.setStateAsync({
          enableCoverUploader: true,
        });
      }, 0)
    } else if (title.length === 0 || title === '') {
      setTimeout(() => {
        this.setStateAsync({
          enableCoverUploader: false,
        });
      }, 0)
    }
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
      category,
      googleEpisodeUrl,
      spotifyEpisodeUrl,
      itunesEpisodeUrl,
      tags, 
      allFieldsFilled,
      enableCoverUploader,
    } = this.state;
    let coverUploader;
    let audioFileUploader;

    if (enableCoverUploader) {
      coverUploader = (
        <>
          <UploadCover onUpload={this.handleUploadCover} />
          {!!uploadedCovers.length && (
            <FileListCover
              files={uploadedCovers}
              onDelete={this.handleDeleteCover}
            />
          )}
        </>
      );
      audioFileUploader = (
        <>
          <Upload onUpload={this.handleUpload} />
          {!!uploadedFiles.length && (
            <FileList
              files={uploadedFiles}
              onDelete={this.handleDelete}
            />
          )}
        </>
      );
    } else {
      coverUploader = (
        <>
          <PodcastCoverUploaderPlaceholder>
            <p>Give this podcast a <strong>Title</strong> before uploading a cover</p>
          </PodcastCoverUploaderPlaceholder>
        </>
      );
      audioFileUploader = (
        <>
          <PodcastAudioFileUploaderPlaceholder>
            <p>Give this podcast a <strong>Title</strong> before uploading a audio file</p>
          </PodcastAudioFileUploaderPlaceholder>
        </>
      );
    }

    return (
      <>
        {/* <SubNavBar media="Podcast" category="Upload" title={title} /> */}
        <div className="container">
          <form onSubmit={this.onSubmit} method="POST">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <aside style={{ marginTop: '20px', position: 'sticky', top: '57px' }}>
                  <DivAside>
                    {coverUploader}
                  </DivAside>
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
                    {audioFileUploader}
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
                  <ExternalEpisodesUrl>
                    <ul>
                      <li>
                        <ul>
                          <li>
                            <FaGoogle />
                          </li>
                          <li>
                            <Input
                              type="text"
                              id="external-episode-url-google-podcasts"
                              name="external-episode-url-google-podcasts"
                              placeholder="Spotify episode url..."
                              value={googleEpisodeUrl}
                              autoComplete="off"
                              style={{  
                                color: "#333",
                                fontSize: "16px",
                                fontWeight: "100",
                                margin: "10px 0",
                                width: "100%"
                              }}
                              onChange={this.onChangeGoogleEpisodeUrl}
                            />
                          </li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li>
                            <FaSpotify />
                          </li>
                          <li>
                            <Input
                              type="text"
                              id="external-episode-url-spotify-podcasts"
                              name="external-episode-url-spotify-podcasts"
                              placeholder="Spotify Podcasts episode url..."
                              value={spotifyEpisodeUrl}
                              autoComplete="off"
                              style={{  
                                color: "#333",
                                fontSize: "16px",
                                fontWeight: "100",
                                margin: "10px 0",
                                width: "100%"
                              }}
                              onChange={this.onChangeSpotifyEpisodeUrl}
                            />
                          </li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li>
                            <FaItunes />
                          </li>
                          <li>
                            <Input
                              type="text"
                              id="external-episode-url-apple-podcasts"
                              name="external-episode-url-apple-podcasts"
                              placeholder="iTunes episode url..."
                              value={itunesEpisodeUrl}
                              autoComplete="off"
                              style={{  
                                color: "#333",
                                fontSize: "16px",
                                fontWeight: "100",
                                margin: "10px 0",
                                width: "100%"
                              }}
                              onChange={this.onChangeItunesEpisodeUrl}
                            />
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </ExternalEpisodesUrl>
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