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
    size,
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
              textALign: 'center',
              '&:focus': {
                outline: 'none',
              },
            }}
          >
            <FacebookIcon
              size={size}
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
              textALign: 'center',
              '&:focus': {
                outline: 'none',
              },
            }}
          >
            <LinkedinIcon
              size={size}
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
              textALign: 'center',
              '&:focus': {
                outline: 'none',
              },
            }}
          >
            <TwitterIcon
              size={size}
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
              textALign: 'center',
              '&:focus': {
                outline: 'none',
              },
            }}
          >
            <RedditIcon
              size={size}
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
              textALign: 'center',
              '&:focus': {
                outline: 'none',
              },
            }}
          >
            <WhatsappIcon
              size={size}
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
              textALign: 'center',
              '&:focus': {
                outline: 'none',
              },
            }}
          >
            <TelegramIcon
              size={size}
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
