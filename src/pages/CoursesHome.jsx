import React, { useContext, useState } from 'react';

import {
  FaSearch,
  FaCode,
} from 'react-icons/fa';

import UserProvider from '../contexts/UserProvider';

import Learn from '../static/img/learn.jpg';

import RecentlyPublishedCourses from './section/courses-home/RecentlyPublished.component';
import MostViewedCourses from './section/courses-home/MostViewed.component';

import {
  TopCover,
  Ul,
  TopCoverContent,
  TopCoverTitle,
  TopCoverP,
  TopCoverSearchInput,
  UnderTopCoverStrap,
  StatementDiv,
  StatementWrapper,
  Newsletter,
  NewsletterDiv,
  NewsletterTitle,
  NewsletterP,
  NewsletterInput,
  RecentCategoriesDiv,
  RecentCategoriesTitle,
  RecentCategoriesWrap,
} from '../styled-components/courses-home-list.styled-components';

const CoursesHome = () => {
  const userInfo = useContext(UserProvider.context);

  return (
    <>
      <TopCover
        style={{
          backgroundImage: `url(${Learn})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <TopCoverContent>
                <TopCoverTitle>
                  Freedom is an irrevocable right
                </TopCoverTitle>
                <TopCoverP>
                  Use technology to opress the opressors of liberty
                </TopCoverP>
                <form>
                  <TopCoverSearchInput>
                    <input
                      type="text"
                      placeholder="What brings you closer to freedom?"
                    />
                    <FaSearch />
                  </TopCoverSearchInput>
                </form>
              </TopCoverContent>
            </div>
          </div>
        </div>
      </TopCover>
      <UnderTopCoverStrap>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <h6>Test</h6>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <h6>Test</h6>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <h6>Test</h6>
            </div>
          </div>
        </div>
      </UnderTopCoverStrap>
      <RecentlyPublishedCourses />
      <StatementDiv>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm 12 col-12">
              <StatementWrapper>
                <h5
                  style={{
                    margin: '10px auto',
                    display: 'table',
                  }}
                >
                  Test
                </h5>
              </StatementWrapper>
            </div>
            <div className="col-lg-4 col-md-4 col-sm 12 col-12">
              <StatementWrapper>
                <h5
                  style={{
                    margin: '10px auto',
                    display: 'table',
                  }}
                >
                  Test
                </h5>
              </StatementWrapper>
            </div>
            <div className="col-lg-4 col-md-4 col-sm 12 col-12">
              <StatementWrapper>
                <h5
                  style={{
                    margin: '10px auto',
                    display: 'table',
                  }}
                >
                  Test
                </h5>
              </StatementWrapper>
            </div>
          </div>
        </div>
      </StatementDiv>
      <MostViewedCourses />
      <Newsletter>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <NewsletterDiv>
                <NewsletterTitle>
                Newsletter
                </NewsletterTitle>
                <NewsletterP>
                Get weekly updated about our upcoming courses
                </NewsletterP>
                <form>
                  <NewsletterInput>
                    <input
                      type="email"
                      placeholder="Email"
                    />
                  </NewsletterInput>
                </form>
              </NewsletterDiv>
            </div>
          </div>
        </div>
      </Newsletter>
      <RecentCategoriesDiv>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <RecentCategoriesTitle>
              Recent Categories
              </RecentCategoriesTitle>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <RecentCategoriesWrap>
                <FaCode />
                <span>
                  Solidity
                </span>
              </RecentCategoriesWrap>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <RecentCategoriesWrap>
                <FaCode />
                <span>
                  Solidity
                </span>
              </RecentCategoriesWrap>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <RecentCategoriesWrap>
                <FaCode />
                <span>
                  Solidity
                </span>
              </RecentCategoriesWrap>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <RecentCategoriesWrap>
                <FaCode />
                <span>
                  Solidity
                </span>
              </RecentCategoriesWrap>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <RecentCategoriesWrap>
                <FaCode />
                <span>
                  Solidity
                </span>
              </RecentCategoriesWrap>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <RecentCategoriesWrap>
                <FaCode />
                <span>
                  Solidity
                </span>
              </RecentCategoriesWrap>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <RecentCategoriesWrap>
                <FaCode />
                <span>
                  Solidity
                </span>
              </RecentCategoriesWrap>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <RecentCategoriesWrap>
                <FaCode />
                <span>
                  Solidity
                </span>
              </RecentCategoriesWrap>
            </div>
          </div>
        </div>
      </RecentCategoriesDiv>
    </>
  );
};

export default CoursesHome;
