/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import {
  FaSortDown,
  FaPodcast,
  FaTrashAlt,
  FaRegEdit,
} from 'react-icons/fa';

import {
  ToggleButton,
  Expand,
  Edit,
  Delete,
  GoTo,
} from '../../../../../styled-components/admin.styled-components';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      category: '',
      title: '',
      date: null,
      slug: '',
      liID: '',
      editTo: '',
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.onDeletePost = this.onDeletePost.bind(this);
    this.getPodcastBySlug = this.getPodcastBySlug.bind(this);
  }

  componentDidMount() {
    const {
      type,
      title,
      date,
      content,
      // coverFileId,
      category,
      slug,
      liID,
      path,
    } = this.props;
    console.log('type:', type);
    const editTo = `/edit/post/${slug}`;
    // const date = date;
    console.log('date:', date);

    const dateFormatted = this.parseDate(date);
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
    const formattedDate = `${months[dateFormatted.getMonth()]
    } ${
      dateFormatted.getDate()
    } ${
      dateFormatted.getFullYear()}`;

    this.setState({
      type,
      category,
      title,
      date: formattedDate,
      content,
      slug,
      audio_file_url: path,
      liID,
      editTo,
    });
  }

  async onDeletePost() {
    let podcast = await this.getPodcastBySlug();
    podcast = podcast[0];
    console.log('podcast.id:', podcast.id);
    console.log('podcast.cover.id:', podcast.cover.id);
    console.log('podcast.audio_file.id:', podcast.audio_file.id);
    // await fetch(
    //   `https://cryptic-activist-backend.herokuapp.com/podcasts/delete/audio/${podcast.cover._id}`,
    //   {
    //     method: "DELETE",
    //     mode: "cors",
    //     cache: "no-cache",
    //     credentials: "same-origin",
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   }
    // );
    // await fetch(
    //   `https://cryptic-activist-backend.herokuapp.com/podcasts/delete/cover/${podcast.audio_file._id}`,
    //   {
    //     method: "DELETE",
    //     mode: "cors",
    //     cache: "no-cache",
    //     credentials: "same-origin",
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   }
    // );
    await fetch(`https://cryptic-activist-backend.herokuapp.com/podcasts/delete/${podcast.id}`, {
      method: 'DELETE',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async getPodcastBySlug() {
    const { slug } = this.state;
    const response = await fetch(
      `https://cryptic-activist-backend.herokuapp.com/podcasts/get/${slug}`,
      // `https://cryptic-activist-backend.herokuapp.com/podcasts/get/${this.state.slug}`,
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
    const data = await response.json();
    return data;
  }

  parseDate(input) {
    this.parts = input.match(/(\d+)/g);
    return new Date(this.parts[0], this.parts[1] - 1, this.parts[2]); // months are 0-based
  }


  render() {
    const {
      type, category, title, date, path, liID, slug, editTo,
    } = this.state;
    return (
      <li style={{ margin: '0px 15px 6px 0px' }}>
        <ToggleButton
          type="button"
          data-toggle="collapse"
          data-target={`#${liID}`}
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <div className="row">
            <div className="col-10">
              <b
                style={{
                  color: '#999',
                  marginBottom: '0px',
                  float: 'left',
                  fontSize: '12px',
                  lineHeight: '24px',
                }}
              >
                {`${type} > ${category}`}

              </b>
              <br />
              <h5
                style={{
                  color: '#0058e4',
                  marginBottom: '0px',
                  float: 'left',
                  textAlign: 'initial',
                }}
              >
                {title}
              </h5>
              <br />
              <span
                style={{
                  color: '#999',
                  fontSize: '14px',
                  float: 'left',
                }}
              >
                {date}
              </span>
            </div>
            <div className="col-2">
              <Expand to={`/admin/course/${path}`}>
                <FaSortDown />
              </Expand>
            </div>
          </div>
        </ToggleButton>
        <div
          className="collapse"
          id={liID}
          style={{ padding: '10px 10px 40px 10px' }}
        >
          <Delete onClick={this.onDeletePost}>
            <FaTrashAlt />
&nbsp; Delete
          </Delete>
          <Edit to={editTo}>
            <FaRegEdit />
&nbsp; Edit
          </Edit>
          <GoTo to={`/blog/${slug}`}>
            <FaPodcast />
&nbsp; Blog Page
          </GoTo>
        </div>
      </li>
    );
  }
}
