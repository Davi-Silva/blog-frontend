import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

import {
  FaSpinner,
} from 'react-icons/fa';

import BitcoinDoddle from '../../static/img/no-content-img.png';

import PodcastsList from '../../components/UI/lists/PodcastsList.component';
import SubNavBar from '../../components/UI/navbar/SubNavBar';
import NewsletterSide from '../../components/UI/newsletter/NewsletterSide.component';
import RecentCategories from '../../components/UI/categories/RecentCategoriesPodcast';

import Ads from '../../components/UI/ads/AdvertisementSquare.component';

import {
  LoadingAllContent,
  InfinitePodcastList,
  NoContentDiv,
  NoContentImg,
  NoContentP,
  StickyWrapper,
} from '../../styled-components/podcasts.styled-components';

import * as PodcastsByCategoryAction from '../../store/actions/podcasts/podcastsByCategory';

const PodcastsByCategory = (props) => {
  const podcasts = useSelector((state) => state.podcastsByCategory);
  const dispatch = useDispatch();


  useEffect(() => {
    const { match } = props;
    const { slug } = match.params;

    dispatch(PodcastsByCategoryAction.getPodcastsByCategory(slug));
  }, []);

  let allPodcasts;
  if (podcasts.loading) {
    console.log('fetching data on podcast category...');
    allPodcasts = (
      <>
        <LoadingAllContent>
          <FaSpinner />
        </LoadingAllContent>
      </>
    );
  } else if (podcasts.fetched) {
    if (!_.isEmpty(podcasts.data)) {
      allPodcasts = (
        <>
          <div
            className="col-lg-9 col-md-9 col-sm-12 col-12"
            style={{
              marginTop: '25px',
              marginBottom: '25px',
            }}
          >
            <div className="row">
              {podcasts.data.map((podcast) => (
                <PodcastsList
                  key={podcast.id}
                  category={podcast.category}
                  title={podcast.title}
                  date={podcast.uploadedOn}
                  slug={podcast.slug}
                  cover={podcast.cover.url}
                  liID={`p-${podcast.id}`}
                />
              ))}
            </div>
          </div>
          <div
            className="col-lg-3 col-md-3 col-sm-12 col-12"
            style={{
              marginTop: '25px',
              marginBottom: '25px',
            }}
          >
            <StickyWrapper>
              <Ads />
            </StickyWrapper>
          </div>
        </>
      );
    } else {
      allPodcasts = (
        <>
          <NoContentDiv>
            <NoContentImg src={BitcoinDoddle} />
            <NoContentP>
              No Podcast has been found.
            </NoContentP>
          </NoContentDiv>
        </>
      );
    }
  }
  return (
    <>
      <SubNavBar media="Podcasts" category="" title="" />
      <div className="container">
        <div className="row">
          {allPodcasts}
        </div>
      </div>
    </>
  );
};

export default PodcastsByCategory;
