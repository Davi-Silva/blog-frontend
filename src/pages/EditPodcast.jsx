/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';

import SubNavBar from '../components/UI/navbar/SubNavBar';
import AdvertisementSquare from '../components/UI/ads/AdvertisementSquare.component';

import UploadCover from "../components/UI/admin/UploadFieldCover.component";
import FileListCover from "../components/UI/admin/FileListCover.component";

import {
  Input,
  UploadedOn,
  Button,
  Wrapper,
  Update,
} from '../styled-components/edit-podcast.styled-components';


export default class EditPodcast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      slug: '',
      title: '',
      description: '',
      category: '',
      audioFile: null,
      cover: null,
      coverURL: '',
      tags: '',
      uploadedOn: '',
      updatedOn: null,
      updated: false,
      uploadedFiles: [],
      uploadedCovers: [],
      backButtonClassName: 'backPodcastButtonRelavite',
    };
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.updatePodcast = this.updatePodcast.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.setStateAsync = this.setStateAsync.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.listenScrollEvent = this.listenScrollEvent.bind(this);
    this.changeSlugFromTitle = this.changeSlugFromTitle.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeTags = this.onChangeTags.bind(this);
  }

  async componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
    const podcast = await this.getPodcastBySlug();
    console.log('edit podcast:', podcast);
    if (podcast.length > 0) {
      const {
        id, slug, title, description, audioFile, cover, category, tags, uploadedOn, updatedOn,
      } = podcast[0];
      const dateFormatted = this.parseDate(uploadedOn);
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
          description,
          audioFile,
          cover,
          coverURL: cover.url,
          tags,
          uploadedOn: formattedDate,
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
          description,
          audioFile,
          cover,
          coverURL: cover.url,
          tags,
          uploadedOn: formattedDate,
          updatedOn: formattedDateUpdated,
          uploaded: false,
        });
      }
    } else {
      const { history } = this.props;
      history.push('/404');
    }
  }

  // async componentDidUpdate() {
  //   const { history } = this.props;
  //   history.push('/404');
  // }


  async onSubmit(e) {
    e.preventDefault();
    const {
      title, category, description, tags, slug,
    } = this.state;
    const { history } = this.props;
    const podcastInfo = {
      slug,
      category,
      title,
      description,
      tags,
    };
    const res = await this.updatePodcast(podcastInfo);
    console.log('res podcast update:', res);
    history.push(`/podcast/${slug}`);
    if (res.updated) {
      this.setStateAsync({
        uploaded: res.updated,
      });
    }
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  async onChangeTitle(e) {
    await this.setStateAsync({
      title: e.target.value,
    });
    setTimeout(() => {
      this.changeSlugFromTitle(this.state.title);
    }, 0);
  }

  async changeSlugFromTitle() {
    const slug = this.state.title
      .toLowerCase()
      .split(' ')
      .join('-');
    await this.setStateAsync({ slug });
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
      tags: e.target.value
    });
  }

  async getPodcastBySlug() {
    const { match } = this.props;
    const { slug } = match.params;
    console.log('slug:', slug);
    this.response = await fetch(
      // `https://cryptic-activist-backend.herokuapp.com/podcasts/get/${slug}`,
      `http://localhost:5000/podcasts/get/slug/${slug}`,
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

  async listenScrollEvent(e) {
    if (window.scrollY > 56) {
      await this.setStateAsync({ backButtonClassName: 'backPodcastButtonFixed' });
      const { backButtonClassName } = this.state;
      console.log(
        'this.state.containerClassName:',
        backButtonClassName,
      );
    } else {
      await this.setStateAsync({ backButtonClassName: 'backPodcastButtonRelavite' });
      const { backButtonClassName } = this.state;
      console.log(
        'this.state.containerClassName:',
        backButtonClassName,
      );
    }
  }

  handleEditorChange = async (e) => {
    console.log('Content was updated:', e.target.getContent());
    this.setStateAsync({
      description: e.target.getContent()
    });
  }

  async updatePodcast(podcast) {
    const { id } = this.state;
    this.response = await fetch(
      // `https://cryptic-activist-backend.herokuapp.com/podcasts/get/${}`,
      // `https://cryptic-activist-backend.herokuapp.com/podcasts/update/${id}`,
      `http://localhost:5000/podcasts/update/${id}`,
      {
        method: 'PUT',
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

  parseDate(input) {
    this.parts = input.match(/(\d+)/g);
    return new Date(this.parts[0], this.parts[1] - 1, this.parts[2]);
  }

  render() {
    const {
      title,
      description,
      slug,
      category,
      audioFile,
      cover,
      coverURL,
      tags,
      uploadedOn,
      updatedOn,
      backButtonClassName,
    } = this.state;
    let podcastUpdated;
    console.log("Description:", description)
    if (updatedOn === null) {
      podcastUpdated = (
        <UploadedOn>
      Uploaded on&nbsp;
          <span style={{ color: '#0058e4' }}>{uploadedOn}</span>
        </UploadedOn>
      );
    } else if (updatedOn !== null) {
      podcastUpdated = (
        <UploadedOn>
        Updated on&nbsp;
          <span style={{ color: '#0058e4' }}>{updatedOn}</span>
        </UploadedOn>
      );
    }
    return (
      <>
        <SubNavBar media="Podcast" category={category} title={title} />
        <div className="container">
          <form onSubmit={this.onSubmit} method="POST">
            <div className="row">
              {/* <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                <form onSubmit={this.onSubmit} method="POST">
                  <Wrapper>

                    <BackButton to={`/podcast/${slug}`} className={backButtonClassName}>
                      <i className="fas fa-chevron-left" />
                    </BackButton>
                    <img
                      src={coverURL}
                      alt="Cover"
                      style={{ width: '100%' }}
                    />
                    <Update>
                      <i className="fas fa-edit" />
                    </Update>
                    {podcastUpdated}
                    <Input value={title} style={{ width: '100%' }} onChange={this.onChangeTitle} />
                    <div style={{ margin: '50px 0px 20px 0px' }}>
                      <Editor
                        apiKey="z1imaefgqfqi5gkj9tp9blogndyf2gp0aj3fgubdtz73p658"
                        initialValue={description}
                        init={{
                          height: 500,
                          menubar: false,
                          plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount',
                          ],
                          toolbar:
                            'undo redo | formatselect | bold italic backcolor | \
                            alignleft aligncenter alignright alignjustify | \
                            bullist numlist outdent indent | removeformat | help',
                        }}
                        onChange={this.handleEditorChange}
                      />
                    </div>
                  </Wrapper>
                </form>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                <aside style={{ marginTop: '20px' }}>
                  <AdvertisementSquare />
                </aside>
              </div> */}
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <aside style={{ marginTop: '20px' }}>
                  <div>
                    {/* <UploadCover onUpload={this.handleUploadCover} />
                    {!!uploadedCovers.length && (
                      <FileListCover
                        files={uploadedCovers}
                        onDelete={this.handleDeleteCover}
                      />
                    )}*/}
                  </div>
                </aside>
              </div>
              <div className="col-lg-8 col-md-8 col-ms-12 col-12">
                <main style={{marginTop: "25px"}}>
                  <UploadedOn style={{ margin: "0",}}>
                    Updated on&nbsp;
                    <span style={{ color: '#333', fontWeight: '700', margin: "10px 0" }}>Date</span>
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
                        margin: "10px 0",
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
                  <div style={{margin: "50px 0px 20px 0px"}}>
                    <Editor
                      apiKey='z1imaefgqfqi5gkj9tp9blogndyf2gp0aj3fgubdtz73p658'
                      initialValue={description}
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
                <Update>
                  Update
                </Update>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
