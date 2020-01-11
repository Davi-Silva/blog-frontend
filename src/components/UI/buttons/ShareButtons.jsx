import React from 'react';
import PropTypes from 'prop-types';

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,

  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,

  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,

  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
} from 'react-share';

import {
  Ul,
} from '../../../styled-components/share-buttons.styled-components';

const ShareButtons = (props) => {
  const {
    path,
  } = props;
  const title = 'Check out this post\n';
  return (
    <>
      <Ul>
        <li>
          <FacebookShareButton
            url={path}
            quote={title}
            style={{
              display: 'table',
              margin: '0 auto',
              '&:focus': {
                outline: 'none',
              },
            }}
          >
            <FacebookIcon
              size={32}
              round
            />
          </FacebookShareButton>
        </li>
        <li>
          <LinkedinShareButton
            url={path}
            quote={title}
            style={{
              display: 'table',
              margin: '0 auto',
              '&:focus': {
                outline: 'none',
              },
            }}
          >
            <LinkedinIcon
              size={32}
              round
            />
          </LinkedinShareButton>
        </li>
        <li>
          <TwitterShareButton
            url={path}
            title={title}
            via="Cryptic Activist"
            style={{
              display: 'table',
              margin: '0 auto',
              '&:focus': {
                outline: 'none',
              },
            }}
          >
            <TwitterIcon
              size={32}
              round
            />
          </TwitterShareButton>
        </li>
        <li>
          <RedditShareButton
            url={path}
            quote={title}
            style={{
              display: 'table',
              margin: '0 auto',
              '&:focus': {
                outline: 'none',
              },
            }}
          >
            <RedditIcon
              size={32}
              round
            />
          </RedditShareButton>
        </li>
        <li>
          <WhatsappShareButton
            url={path}
            quote={title}
            separator="-"
            style={{
              display: 'table',
              margin: '0 auto',
              '&:focus': {
                outline: 'none',
              },
            }}
          >
            <WhatsappIcon
              size={32}
              round
            />
          </WhatsappShareButton>
        </li>
        <li>
          <TelegramShareButton
            url={path}
            quote={title}
            style={{
              display: 'table',
              margin: '0 auto',
              '&:focus': {
                outline: 'none',
              },
            }}
          >
            <TelegramIcon
              size={32}
              round
            />
          </TelegramShareButton>
        </li>
      </Ul>
    </>
  );
};

ShareButtons.propTypes = {
  path: PropTypes.string.isRequired,
};


export default ShareButtons;
