import React from 'react';

import {
  WrittenByDiv,
  WrittenByUl,
  WrittenByAuthorInfoUl,
  WrittenByAuthorLinkTop,
} from '../../../../styled-components/components/post-written-by.styled-components';

const WrittenBy = ({ author }) => (
  <>
    <WrittenByDiv>
      <WrittenByUl>
        <li>
          <WrittenByAuthorLinkTop to={`/user/${author.username}`}>
            <img src={author.profileImage.url} alt="" />
          </WrittenByAuthorLinkTop>
        </li>
        <li className="userInfoDiv">
          <WrittenByAuthorInfoUl>
            <li>
              <p>
              WRITTEN BY
              </p>
              <WrittenByAuthorLinkTop to={`/user/${author.username}`}>
                <b>
                  {author.name}
                </b>
              </WrittenByAuthorLinkTop>
              <p className="author-quote">Nunc metus libero, imperdiet vel metus sit amet, tempor semper libero.</p>
            </li>
          </WrittenByAuthorInfoUl>
        </li>
      </WrittenByUl>
    </WrittenByDiv>
  </>
);

export default WrittenBy;
