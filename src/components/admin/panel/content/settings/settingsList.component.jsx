/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import {
  ToggleButton,
  Expand,
} from '../../../../../styled-components/admin.styled-components';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settingName: '',
      description: '',
      status: '',
      path: '',
      subSettings: null,
      liID: '',
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const {
      settingName, description, status, path, subSettings, liID,
    } = this.props;
    this.setState({
      settingName,
      description,
      status,
      path,
      subSettings,
      liID,
    });
  }

  render() {
    const {
      liID, settingName, description, path,
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
              <h5
                style={{ color: '#0058e4', marginBottom: '0px', float: 'left' }}
              >
                {settingName}
              </h5>
              <br />
              <p style={{ color: '#999', float: 'left' }}>
                {description}
              </p>
            </div>
            <div className="col-2">
              <Expand to={`/admin/course/${path}`}>
                <i className="fas fa-sort-down" />
              </Expand>
            </div>
          </div>
        </ToggleButton>
        <div
          className="collapse"
          id={liID}
          style={{ padding: '10px 10px 40px 10px' }}
        />
      </li>
    );
  }
}
