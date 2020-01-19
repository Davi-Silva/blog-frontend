import React from 'react';

import {
  WrittenByDiv,
  WrittenByUl,
  WrittenByAuthorInfoUl,
  WrittenByAuthorLinkTop,
  FollowButton,
} from '../../../../styled-components/components/post-written-by.styled-components';

const WrittenBy = ({ author }) => {
  const {
    username,
    name,
    profileImage,
    quote,
  } = author;

  const handleFollowAuthor = async () => {

  };

  return (
    <>
      <WrittenByDiv>
        <WrittenByUl>
          <li className="authorProfileImageLi">
            <WrittenByAuthorLinkTop to={`/user/${username}`}>
              <img src={profileImage.url} alt="" />
            </WrittenByAuthorLinkTop>
          </li>
          <li className="userInfoDiv">
            <WrittenByAuthorInfoUl>
              <li>
                <p>
              WRITTEN BY
                </p>
                <WrittenByAuthorLinkTop to={`/user/${username}`}>
                  <b>
                    {name}
                  </b>
                </WrittenByAuthorLinkTop>
                <p className="author-quote">{quote}</p>
              </li>
            </WrittenByAuthorInfoUl>
          </li>
          <li>
            <FollowButton
              type="button"
              onClick={handleFollowAuthor}
            >
            Follow +
            </FollowButton>
          </li>
        </WrittenByUl>
      </WrittenByDiv>
    </>
  );
};

export default WrittenBy;
