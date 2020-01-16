
import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import slugify from 'slugify';

import SubNavBar from '../components/UI/navbar/SubNavBar';
// import AdvertisementSquare from '../components/UI/ads/AdvertisementSquare.component';

// import UploadCover from "../components/UI/admin/UploadFieldCover.component";
// import FileListCover from "../components/UI/admin/FileListCover.component";

import {
  Input,
  UploadedOn,
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
      // audioFile: null,
      // cover: null,
      // coverURL: '',
      tags: '',
      uploadedOn: '',
      updatedOn: null,
      // updated: false,
      // uploadedFiles: [],
      // uploadedCovers: [],
    };
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.updatePodcast = this.updatePodcast.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.setStateAsync = this.setStateAsync.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.changeSlugFromTitle = this.changeSlugFromTitle.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeTags = this.onChangeTags.bind(this);
  }

  async componentDidMount() {
    const podcast = await this.getPodcastBySlug();
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
    history.push(`/podcast/${slug}`);
    if (res.updated) {
      this.setStateAsync({
        uploaded: res.updated,
      });
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

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  async getPodcastBySlug() {
    const { match } = this.props;
    const { slug } = match.params;
    this.response = await fetch(
      `https://cryptic-activist-backend.herokuapp.com/podcasts/get/slug/${slug}`,
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

  async changeSlugFromTitle() {
    const { title } = this.state;
    const lowerCaseTitle = title.toLowerCase();
    const slug = slugify(lowerCaseTitle);
    await this.setStateAsync({ slug });
  }

  async updatePodcast(podcast) {
    const { id } = this.state;
    this.response = await fetch(
      `https://cryptic-activist-backend.herokuapp.com/podcasts/update/${id}`,
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
      // slug,
      category,
      // audioFile,
      // cover,
      // coverURL,
      tags,
      uploadedOn,
      updatedOn,
      // backButtonClassName,
    } = this.state;
    let podcastUpdated;
    if (updatedOn === null) {
      podcastUpdated = (
        <UploadedOn>
      Uploaded on&nbsp;
          <span style={{ color: '#333', fontWeight: '900' }}>{uploadedOn}</span>
        </UploadedOn>
      );
    } else if (updatedOn !== null) {
      podcastUpdated = (
        <UploadedOn>
        Updated on&nbsp;
          <span style={{ color: '#333', fontWeight: '900' }}>{updatedOn}</span>
        </UploadedOn>
      );
    }
    return (
      <>
        <SubNavBar media="Podcast" category={category} title={title} />
        <div className="container">
          <form onSubmit={this.onSubmit} method="POST">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <aside style={{ marginTop: '20px' }}>
                  <div />
                </aside>
              </div>
              <div className="col-lg-8 col-md-8 col-ms-12 col-12">
                <main style={{ marginTop: '25px' }}>
                  {/* <UploadedOn style={{ margin: "0",}}>
                    Updated on&nbsp;
                    <span style={{ color: '#333', fontWeight: '700', margin: "10px 0" }}>Date</span>
                  </UploadedOn> */}
                  {podcastUpdated}
                  <Input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title..."
                    value={title}
                    autoComplete="off"
                    style={{
                      color: '#333',
                      fontSize: '23px',
                      fontWeight: '900',
                      margin: '10px 0',
                      width: '100%',
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
                      color: '#999',
                      fontSize: '16px',
                      fontWeight: '100',
                      margin: '10px 0',
                      width: '100%',
                    }}
                    onChange={this.onChangeCategory}
                    required
                  />
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
                          'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
                      }}
                      onChange={this.handleEditorChange}
                    />
                  </div>
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
