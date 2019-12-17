
import React, { Component } from 'react';

import { ProfileContainerDiv } from '../../../styled-components/admin.styled-components';

export default class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    const { name, email, created_on } = this.props;
    this.state = {
      name,
      email,
      created_on,
    };
  }

  render() {
    const { name, email, created_on } = this.state;
    return (
      <>
        <ProfileContainerDiv>
          <p>{name}</p>
          <p>{email}</p>
          <p>{created_on}</p>
        </ProfileContainerDiv>
      </>
    );
  }
}
