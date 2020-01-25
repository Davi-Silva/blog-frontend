/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import slugify from 'slugify';
import _ from 'lodash';

import { Helmet } from 'react-helmet';

import {
  FaSpinner,
} from 'react-icons/fa';

import SubNavBar from '../../components/UI/navbar/SubNavBar';
import ShareButtons from '../../components/UI/buttons/ShareButtons';
import PostAuthor from '../../components/UI/author/blog/Author';
import MostRecentPost from '../../components/UI/most-recent/blog/aside/MostRecentPost';
import Ads from '../../components/UI/ads/AdvertisementSquare.component';
import Tags from '../../components/UI/post/Tags';
import RelatedPosts from '../../components/UI/post/RelatedPosts';
import WrittenBy from '../../components/UI/author/blog/WrittenBy';


import {
  Cover,
  Title,
  TimeToReadCategoryUl,
  TimeToRead,
  Category,
  Content,
  AsideDiv,
  // LoadingTags,
  UploadedOn,
  // AllContent,
  LoadingAllContent,
  Fluid,
  StickyWrapper,
  WrapperAd,
} from '../../styled-components/post.styled-components';

import * as PostAction from '../../store/actions/blog/post';

let count = 0;
const Post = (props) => {
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const {
    location,
  } = props;


  const parseDate = (input) => {
    const parts = input.match(/(\d+)/g);
    return new Date(parts[0], parts[1] - 1, parts[2]);
  };

  const formatDate = (uploadedOn) => {
    const dateFormatted = parseDate(uploadedOn);
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

    return `${months[dateFormatted.getMonth()]} ${dateFormatted.getDate()} ${dateFormatted.getFullYear()}`;
  };

  const getReadTime = (content) => {
    // Estimate the time read the content
    const wordsPerMinutes = 200;
    let timeToRead;
    const textLength = content.split(' ').length;
    if (textLength > 0) {
      const value = Math.ceil(textLength / wordsPerMinutes);
      timeToRead = `${value} min read`;
    }
    return timeToRead;
  };

  useEffect(() => {
    const { match } = props;
    const fullSlug = match.url.slice(6, match.url.length);
    dispatch(PostAction.getPost(fullSlug));

    if (post.length === 0) {
      const { history } = props;
      history.push('/404');
    }
  }, []);

  let helmet;
  let subMenu;
  let coverVar;
  let content;
  let allContentPost;
  let postPublished;

  let related;


  if (post.loading) {
    subMenu = (
      <SubNavBar media="Podcast" category="" title="" />
    );
    content = (
      <>
        <LoadingAllContent>
          <FaSpinner />
        </LoadingAllContent>
      </>
    );
    helmet = (
      <>
        <Helmet title="Loading..." media="Podcasts" />
      </>
    );
  } else if (post.fetched) {
    if (!_.isEmpty(post.data)) {
      if (count === 0) {
        const postObj = {
          slug: post.data[0].slug,
          howManyReadNumber: post.data[0].howManyRead,
        };
        dispatch(PostAction.updateHowManyRead(postObj));
        count += 1;
      }
      content = (
        <>
        </>
      );
      subMenu = (
        <>
          <SubNavBar media="Blog" category={post.data[0].category} title={post.data[0].title} />
        </>
      );
      coverVar = (
        <>
          <Cover
            src={post.data[0].cover.url}
            alt={post.data[0].coverAlt}
          />
        </>
      );
      if (post.data[0].slug === '') {
        related = (
          <>
          </>
        );
      } else {
        related = (
          <>
            <RelatedPosts
              slug={post.data[0].slug}
              category={post.data[0].category}
            />
          </>
        );
      }

      if (post.data[0].title === '') {
        helmet = (
          <>
            <Helmet title="Loading..." media="Blog" />
          </>
        );
      } else {
        helmet = (
          <>
            <Helmet>
              <title>{`${post.data[0].title} - ${'Blog'} | Cryptic Activist`}</title>
              <meta
                name="description"
                content="Blog Posts"
              />
              <meta property="og:locale" content="en_US" />
              <meta property="og:locale:alternate" content="en_CA" />
              <meta property="og:locale:alternate" content="es_GB" />
              <meta property="og:site_name" content="Cryptic Activist" />
              <meta property="og:description" content="Meta description" />
              <meta property="og:title" content={`${post.data[0].title} - ${'Blog'} | Cryptic Activist`} />
              <meta property="og:image" content={`${post.data[0].cover}`} />
              <meta property="og:image:type" content="image/jpeg" />
              <meta property="og:image:type" content="image/jpg" />
              <meta property="og:image:type" content="image/png" />
              <meta property="og:image:width" content="800" />
              <meta property="og:image:height" content="600" />
              <meta property="og:image:alt" content={post.data[0].coverAlt} />
              <meta property="og:url" content={`https://crypticactivist.com${location.pathname}`} />
              <meta property="og:type" content="article" />
              <meta property="og:type:article:published_time" content={post.data[0].publishedOn} />
              <meta property="og:type:article:author" content={post.data[0].author} />
              <meta property="og:type:article:tags" content={post.data[0].tags} />

              <meta name="twitter:site" content="Cryptic Activist" />
              <meta name="twitter:title" content={`${post.data[0].title} - ${'Blog'} | Cryptic Activist`} />
              <meta name="twitter:description" content="metaDescription" />
              <meta name="twitter:image" content={post.data[0].cover} />
              <meta name="twitter:creator" content={post.data[0].author} />
              <meta name="twitter:card" content="article" />
              <meta name="twitter:image:alt" content={`${post.data[0].title}'s cover`} />
            </Helmet>
          </>
        );
      }


      if (post.data[0].title === ''
      || post.data[0].cover === ''
      || post.data[0].coverAlt === ''
      || post.data[0].content === ''
      || post.data[0].tags === ''
      || post.data[0].publishedOn === '') {
        allContentPost = (
          <LoadingAllContent>
            <FaSpinner />
          </LoadingAllContent>
        );
      } else {
        if (post.data[0].publishedOn === null) {
          postPublished = (
            <UploadedOn>
              {formatDate(post.data[0].publishedOn)}
            </UploadedOn>
          );
        } else {
          postPublished = (
            <UploadedOn>
              {formatDate(post.data[0].publishedOn)}
            </UploadedOn>
          );
        }

        allContentPost = (
          <>
            <div className="container">
              <div className="row">
                <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                  <Title>
                    {post.data[0].title}
                  </Title>
                  <TimeToReadCategoryUl>
                    <li>
                      <Category
                        to={`/blog/category/${slugify(post.data[0].category.toLowerCase())}`}
                      >
                        {post.data[0].category}
                      </Category>
                    </li>
                    <li>
                      <TimeToRead>
                        {getReadTime(post.data[0].content)}
                      </TimeToRead>
                    </li>
                  </TimeToReadCategoryUl>
                  <PostAuthor
                    author={post.data[0].author}
                    postPublished={postPublished}
                  />
                  <ShareButtons path={`https://crypticactivist.com${location.pathname}`} />
                  {coverVar}
                  <Content dangerouslySetInnerHTML={{ __html: post.data[0].content }} />
                  <Tags
                    tagsArray={post.data[0].tags}
                  />
                  <WrittenBy
                    author={post.data[0].author}
                  />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                  <AsideDiv>
                    <StickyWrapper>
                      <WrapperAd>
                        <MostRecentPost />
                      </WrapperAd>
                      <Ads />
                    </StickyWrapper>
                  </AsideDiv>
                  <AsideDiv>
                    <StickyWrapper>
                      <Ads />
                      <Ads
                        IsLast="last"
                      />
                    </StickyWrapper>
                  </AsideDiv>
                </div>
              </div>
            </div>
            <Fluid className="container">
              <div className="row">
                <div className="col-12">
                  {related}
                </div>
              </div>
            </Fluid>
          </>
        );
      }
    } else {
      const { history } = props;
      const { push } = history;
      push('/blog');
    }
  }

  return (
    <>
      {helmet}
      {subMenu}
      {allContentPost}
      {content}
    </>
  );
};

Post.propTypes = {
  history: PropTypes.shape,
  match: PropTypes.shape,
};

Post.defaultProps = {
  history: Object,
  match: Object,
};

export default Post;
