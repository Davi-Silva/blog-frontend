
import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import {
  FaSpinner,
} from 'react-icons/fa';

import BitcoinDoddle from '../../static/img/no-content-img.png';

import PodcastsList from '../../components/UI/lists/PodcastsList.component';
import SubNavBar from '../../components/UI/navbar/SubNavBar';
import NewsletterSide from '../../components/UI/newsletter/NewsletterSide.component';
import RecentCategories from '../../components/UI/categories/RecentCategoriesPodcast';

import {
  LoadingAllContent,
  InfinitePodcastList,
  NoContentDiv,
  NoContentImg,
  NoContentP,
  StickyWrapper,
} from '../../styled-components/podcasts.styled-components';

export default class PodcastsByCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podcasts: [],
      category: '',
      page: 1,
      hasMore: null,
      found: false,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getFirstPosts = this.getFirstPosts.bind(this);
    this.getMorePosts = this.getMorePosts.bind(this);
  }

  async componentDidMount() {
    const { match } = this.props;
    const { slug } = match.params;

    this.setStateAsync({
      category: slug,
    });
    const podcastsList = await this.getFirstPosts(slug);
    let more = true;
    if (!podcastsList.found) {
      this.setStateAsync({
        found: false,
      });
    }
    if (podcastsList.length > 0) {
      if (podcastsList.length < 10) {
        more = false;
      }
      await this.setStateAsync({
        podcasts: podcastsList,
        hasMore: more,
        found: true,
      });
    }
  }

  async getFirstPosts(category) {
    const {
      page,
    } = this.state;
    this.response = await fetch(`https://cryptic-activist-backend.herokuapp.com/podcasts/get/category/${category}?page=${page}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await this.response.json();
    return data;
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  async getMorePosts() {
    const {
      page,
      category,
      podcasts,
    } = this.state;
    this.response = await fetch(`https://cryptic-activist-backend.herokuapp.com/podcasts/get/category/${category}?page=${page}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await this.response.json();
    if (data.length < 10) {
      this.setStateAsync({
        posts: podcasts.concat(data),
      });
      setTimeout(() => {
        this.setStateAsync({
          hasMore: false,
        });
      }, 10);
    } else {
      this.setStateAsync({
        page: page + 1,
      });

      this.setStateAsync({
        podcasts: podcasts.concat(data),
      });
    }
  }

  render() {
    const {
      podcasts,
      hasMore,
      found,
    } = this.state;
    let allPodcasts;
    if (!found) {
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
    } else {
      allPodcasts = (
        <>
          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
            <InfinitePodcastList>
              <InfiniteScroll
                dataLength={podcasts.length}
                next={this.getMorePodcasts}
                hasMore={hasMore}
                loader={(
                  <LoadingAllContent>
                    <FaSpinner />
                  </LoadingAllContent>
                )}
                endMessage={(
                  <div />
                )}
              >
                {podcasts.map((podcast, key) => (
                  <PodcastsList
                    key={key}
                    category={podcast.category}
                    title={podcast.title}
                    date={podcast.uploadedOn}
                    slug={podcast.slug}
                    cover={podcast.cover.url}
                    liID={`p-${podcast.id}`}
                  />
                ))}
              </InfiniteScroll>
            </InfinitePodcastList>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
            <aside style={{ marginTop: '20px' }}>
              <StickyWrapper>
                <RecentCategories />
                <NewsletterSide />
              </StickyWrapper>
            </aside>
          </div>
        </>
      );
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
  }
}
