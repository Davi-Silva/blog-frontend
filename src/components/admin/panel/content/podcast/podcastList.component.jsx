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
      shortDescription: '',
      slug: '',
      liID: '',
      editTo: '',
      audioFileId: '',
      coverFileId: '',
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.onDeletePodcast = this.onDeletePodcast.bind(this);
    this.getPodcastBySlug = this.getPodcastBySlug.bind(this);
  }

  componentDidMount() {
    const {
      type, title, date, description, audioFileId, coverFileId, category, slug, liID,
    } = this.props;
    const typeLower = type.toLowerCase();
    const editTo = `/edit/${typeLower}/${slug}`;
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

    const formattedDate = `${months[dateFormatted.getMonth()]} ${dateFormatted.getDate()} ${dateFormatted.getFullYear()}`;

    const shortDesc = description.split('\n');
    console.log('audioFileId:', audioFileId);

    this.setState({
      type,
      category,
      title,
      date: formattedDate,
      shortDescription: shortDesc[0],
      slug,
      audioFileId,
      coverFileId,
      liID,
      editTo,
    });
  }

  async onDeletePodcast() {
    const podcast = await this.getPodcastBySlug();
    const { id } = podcast[0];
    const { audioFileId, coverFileId } = this.state;
    await fetch(
      // `https://cryptic-activist-backend.herokuapp.com/podcasts/delete/audio/${audioFileId}`,
      `http://localhost:5000/podcasts/delete/audio/${audioFileId}`,
      {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    await fetch(
      // `https://cryptic-activist-backend.herokuapp.com/podcasts/delete/cover/${coverFileId}`,
      `http://localhost:5000/podcasts/delete/cover/${coverFileId}`,
      {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    // await fetch(`https://cryptic-activist-backend.herokuapp.com/podcasts/delete/${id}`, {
    await fetch(`http://localhost:5000/podcasts/delete/${id}`, {
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
    console.log('slug:', slug);
    this.response = await fetch(
      // `https://cryptic-activist-backend.herokuapp.com/podcasts/get/${slug}`,
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


  parseDate(input) {
    this.parts = input.match(/(\d+)/g);
    return new Date(this.parts[0], this.parts[1] - 1, this.parts[2]); // months are 0-based
  }


  render() {
    const {
      type, category, title, date, path, liID, shortDescription, slug, editTo,
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
                  color: '#999', marginBottom: '0px', float: 'left', fontSize: '12px', lineHeight: '24px',
                }}
              >
                {`${type} > ${category}`}

              </b>
              <br />
              <h5
                style={{
                  color: '#0058e4', marginBottom: '0px', float: 'left', textAlign: 'initial',
                }}
              >
                {title}
              </h5>
              <br />
              <span
                style={{ color: '#999', fontSize: '14px', float: 'left' }}
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
          <div
            style={{ color: '#999' }}
            dangerouslySetInnerHTML={{ __html: shortDescription }}
          />
          <Delete onClick={this.onDeletePodcast}>
            <FaTrashAlt />
            &nbsp;
Delete
          </Delete>
          <Edit to={editTo}>
            <FaRegEdit />
&nbsp; Edit
          </Edit>
          <GoTo to={`/podcast/${slug}`}>
            <FaPodcast />
&nbsp;
Podcast Page
          </GoTo>
        </div>
      </li>
    );
  }
}
