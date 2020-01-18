import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {
  FaSpinner,
} from 'react-icons/fa';
import BitcoinDoddle from '../../static/img/no-content-img.png';

import SubNavBarCategories from '../../components/UI/navbar/SubNavBarCategory';
import BlogPostList from '../../components/UI/lists/blog-home/BlogPostList.component';
import SubNavBar from '../../components/UI/navbar/SubNavBar';
import MostRecentPost from '../../components/UI/most-recent/blog/aside/MostRecentPost';
import Ads from '../../components/UI/ads/AdvertisementSquare.component';

import {
  PostList,
  NoContentDiv,
  NoContentImg,
  NoContentP,
  StickyWrapper,
  WrapperAd,
  AsideDiv,
  LoadingAllContent,
} from '../../styled-components/blog-posts.styled-components';

import * as PostsByCategoryAction from '../../store/actions/blog/postsByCategory';

const BlogPostsByCategory = (props) => {
  const postsList = useSelector((state) => state.postsByCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    const { match } = props;
    const { slug } = match.params;

    dispatch(PostsByCategoryAction.getPostsByCategory(slug));
  }, []);

  let allPosts;

  if (postsList.loading) {
    allPosts = (
      <>
        <LoadingAllContent>
          <FaSpinner />
        </LoadingAllContent>
      </>
    );
  } else if (postsList.fetched) {
    if (!_.isEmpty(postsList.data)) {
      allPosts = (
        <>
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-12">
              <PostList>

                <div className="row">
                  {postsList.data.reverse().map((post, key) => (
                    <BlogPostList
                      key={key}
                      type="Blog"
                      slug={post.slug}
                      imgSrc={post.cover.url}
                      title={post.title}
                      publishedOn={post.publishedOn}
                    />
                  ))}
                </div>

              </PostList>
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
        </>
      );
    } else {
      allPosts = (
        <>
          <div className="row">
            <div className="col-12">
              <NoContentDiv>
                <NoContentImg src={BitcoinDoddle} />
                <NoContentP>
                    No blog posts has been found.
                </NoContentP>
              </NoContentDiv>
            </div>
          </div>
        </>
      );
    }
  }


  return (
    <>
      <SubNavBarCategories />
      <SubNavBar
        media="Blog"
        category="Category"
      // title={`${category.replace(/^\w/, (c) => c.toUpperCase())}`}
        title="Test"
      />
      <div className="container" style={{ margin: '25px auto' }}>
        {allPosts}
      </div>
    </>
  );
};

BlogPostsByCategory.propTyps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogPostsByCategory;
