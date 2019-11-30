import React, { Component } from 'react';

import { FaEnvelope } from 'react-icons/fa';
import {
  Title,
  Email,
  Icon,
} from '../../../styled-components/newsletter-footer.styled-components';

export default class NewsletterFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <>
        <Title>
          Newsletter
        </Title>
        <Email placeholder="Email" />
        <Icon>
          <FaEnvelope />
        </Icon>
      </>
    );
  }
}
