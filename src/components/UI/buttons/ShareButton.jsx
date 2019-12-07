/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import { css } from 'emotion';

import {
  FaTwitter,
  FaFacebook,
  // FaGooglePlus,
  // FaEnvelope,
  // FaPinterest,
  FaLinkedin,
} from 'react-icons/fa';

import { ShareButtonIconOnly, ShareBlockStandard } from 'react-custom-share';

export default class ShareButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containerClassName: '',
      stickyHeight: null,
      sticked: null,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  render() {
    const {
      // img,
      text,
    } = this.props;
    const {
      containerClassName,
      // stickyHeight,
    } = this.state;
    const shareBlockProps = {
      url: `${window.location.href}`,
      button: ShareButtonIconOnly,
      buttons: [
        { network: 'Twitter', icon: FaTwitter },
        { network: 'Facebook', icon: FaFacebook },
        { network: 'Linkedin', icon: FaLinkedin },
      ],
      text: `${text}`,
      longtext: 'Take a look at this super website I have just found.',
    };
    return (
      <>
        <div
          style={{
            position: 'sticky',
            top: '50px',
          }}
        >
          <ShareBlockStandard
            {...shareBlockProps}
            className={`${containerClassName} ${css`
                margin-top: 3px;
                position: relative;
                button {
                    margin: 0px;
                    svg {
                        fill: #0058e4;
                        height: 22px;
                        &:hover {
                            fill: #fff;
                        }
                    }
                    &:focus {
                        outline: none;
                    }
                    &:hover {
                        background: #0058e4;
                        box-shadow: none;
                    }
                }
            `}`}
          />
        </div>
      </>
    );
  }
}
