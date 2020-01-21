
import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      // shortDescription: '',
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
      type,
      title,
      date,
      audioFileId,
      coverFileId,
      category,
      slug,
      liID,
    } = this.props;
    const typeLower = type.toLowerCase();
    const editTo = `/edit/${typeLower}/${slug}`;
    // const date = date;

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


    this.setState({
      type,
      category,
      title,
      date: formattedDate,
      slug,
      audioFileId,
      coverFileId,
      liID,
      editTo,
    });
  }

  async onDeletePodcast() {
    const {
      ConcatNewPodcastsList,
    } = this.props;
    const concatNewPodcastsList = ConcatNewPodcastsList;
    const podcast = await this.getPodcastBySlug();
    const { id } = podcast[0];
    const { audioFileId, coverFileId } = this.state;
    await fetch(
      `http://34.205.75.176:5000/podcasts/delete/audio/${audioFileId}`,
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
      `http://34.205.75.176:5000/podcasts/delete/cover/${coverFileId}`,
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
    await fetch(`http://34.205.75.176:5000/podcasts/delete/${id}`, {
      method: 'DELETE',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    concatNewPodcastsList(podcast);
  }

  async getPodcastBySlug() {
    const { slug } = this.state;
    this.response = await fetch(
      `http://34.205.75.176:5000/podcasts/get/${slug}`,
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
      type, category, title, date, path, liID, slug, editTo,
    } = this.state;
    return (
      <li style={{
        margin: '0 10px 5px 10px',
        listStyle: 'none',
      }}
      >
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

List.propsTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  audioFileId: PropTypes.string.isRequired,
  coverFileId: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  liID: PropTypes.string.isRequired,
  ConcatNewPodcastsList: PropTypes.func.isRequired,
};
