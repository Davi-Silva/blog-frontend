import React, { useContext, useState } from 'react';

import {
  FaSearch,
  FaCode,
} from 'react-icons/fa';
import CoursesHomeListRecentlyPublished from '../components/UI/lists/CoursesHomeListRecentlyPublished.component';
import CoursesHomeListMostViewed from '../components/UI/lists/CoursesHomeListMostViewed.component';


import UserProvider from '../contexts/UserProvider';

import Learn from '../static/img/learn.jpg';

import {
  TopCover,
  TopCoverContent,
  TopCoverTitle,
  TopCoverP,
  TopCoverSearchInput,
  UnderTopCoverStrap,
  RecentlyPublishedCourses,
  StickyWrapper,
  StatementDiv,
  StatementWrapper,
  Filter,
  MostViewed,
  MostViewedTitle,
  Newsletter,
  NewsletterDiv,
  NewsletterTitle,
  NewsletterP,
  NewsletterInput,
  RecentCategoriesDiv,
  RecentCategoriesTitle,
  RecentCategoriesWrap,
} from '../styled-components/courses-home-list.styled-components';

import NewsletterSide from '../components/UI/newsletter/NewsletterSide.component';
import RecentCategories from '../components/UI/categories/RecentCategoriesBlogPost';

const CoursesHome = () => {
  const userInfo = useContext(UserProvider.context);
  const courses = [
    {
      id: '1',
      title: 'Course 1',
      description: 'Cras ornare magna sit amet ultricies condimentum. Morbi aliquet, mauris bibendum placerat volutpat, neque justo cursus purus, ac faucibus ex purus eu ipsum. Maecenas risus sem, porta quis tempor vel, condimentum eget est. Nulla sagittis volutpat est non blandit. Integer nec arcu ut velit egestas auctor. Fusce molestie tincidunt vehicula. Nullam interdum feugiat lacus, quis pharetra augue dictum nec. Nulla maximus dui ut diam posuere tempus. Ut in arcu eu nibh lacinia ultricies. Proin congue, tellus quis viverra elementum, nibh libero aliquet purus, ut imperdiet lorem lectus at est.',
      publishedOn: 'December 17th 2019',
      author: 'Davi Silva',
      relatedProgram: 'Integrated Digital Media MicroMasters',
    },
    {
      id: '1',
      title: 'Course 2',
      description: 'Cras ornare magna sit amet ultricies condimentum. Morbi aliquet, mauris bibendum placerat volutpat, neque justo cursus purus, ac faucibus ex purus eu ipsum. Maecenas risus sem, porta quis tempor vel, condimentum eget est. Nulla sagittis volutpat est non blandit. Integer nec arcu ut velit egestas auctor. Fusce molestie tincidunt vehicula. Nullam interdum feugiat lacus, quis pharetra augue dictum nec. Nulla maximus dui ut diam posuere tempus. Ut in arcu eu nibh lacinia ultricies. Proin congue, tellus quis viverra elementum, nibh libero aliquet purus, ut imperdiet lorem lectus at est.',
      publishedOn: 'December 17th 2019',
      author: 'Davi Silva',
      relatedProgram: 'Integrated Digital Media MicroMasters',
    },
    {
      id: '1',
      title: 'Course 3',
      description: 'Cras ornare magna sit amet ultricies condimentum. Morbi aliquet, mauris bibendum placerat volutpat, neque justo cursus purus, ac faucibus ex purus eu ipsum. Maecenas risus sem, porta quis tempor vel, condimentum eget est. Nulla sagittis volutpat est non blandit. Integer nec arcu ut velit egestas auctor. Fusce molestie tincidunt vehicula. Nullam interdum feugiat lacus, quis pharetra augue dictum nec. Nulla maximus dui ut diam posuere tempus. Ut in arcu eu nibh lacinia ultricies. Proin congue, tellus quis viverra elementum, nibh libero aliquet purus, ut imperdiet lorem lectus at est.',
      publishedOn: 'December 17th 2019',
      author: 'Davi Silva',
      relatedProgram: 'Integrated Digital Media MicroMasters',
    },
    {
      id: '1',
      title: 'Course 4',
      description: 'Cras ornare magna sit amet ultricies condimentum. Morbi aliquet, mauris bibendum placerat volutpat, neque justo cursus purus, ac faucibus ex purus eu ipsum. Maecenas risus sem, porta quis tempor vel, condimentum eget est. Nulla sagittis volutpat est non blandit. Integer nec arcu ut velit egestas auctor. Fusce molestie tincidunt vehicula. Nullam interdum feugiat lacus, quis pharetra augue dictum nec. Nulla maximus dui ut diam posuere tempus. Ut in arcu eu nibh lacinia ultricies. Proin congue, tellus quis viverra elementum, nibh libero aliquet purus, ut imperdiet lorem lectus at est.',
      publishedOn: 'December 17th 2019',
      author: 'Davi Silva',
      relatedProgram: 'Integrated Digital Media MicroMasters',
    },
    {
      id: '1',
      title: 'Course 5',
      description: 'Cras ornare magna sit amet ultricies condimentum. Morbi aliquet, mauris bibendum placerat volutpat, neque justo cursus purus, ac faucibus ex purus eu ipsum. Maecenas risus sem, porta quis tempor vel, condimentum eget est. Nulla sagittis volutpat est non blandit. Integer nec arcu ut velit egestas auctor. Fusce molestie tincidunt vehicula. Nullam interdum feugiat lacus, quis pharetra augue dictum nec. Nulla maximus dui ut diam posuere tempus. Ut in arcu eu nibh lacinia ultricies. Proin congue, tellus quis viverra elementum, nibh libero aliquet purus, ut imperdiet lorem lectus at est.',
      publishedOn: 'December 17th 2019',
      author: 'Davi Silva',
      relatedProgram: 'Integrated Digital Media MicroMasters',
    },
    {
      id: '1',
      title: 'Course 6',
      description: 'Cras ornare magna sit amet ultricies condimentum. Morbi aliquet, mauris bibendum placerat volutpat, neque justo cursus purus, ac faucibus ex purus eu ipsum. Maecenas risus sem, porta quis tempor vel, condimentum eget est. Nulla sagittis volutpat est non blandit. Integer nec arcu ut velit egestas auctor. Fusce molestie tincidunt vehicula. Nullam interdum feugiat lacus, quis pharetra augue dictum nec. Nulla maximus dui ut diam posuere tempus. Ut in arcu eu nibh lacinia ultricies. Proin congue, tellus quis viverra elementum, nibh libero aliquet purus, ut imperdiet lorem lectus at est.',
      publishedOn: 'December 17th 2019',
      author: 'Davi Silva',
      relatedProgram: 'Integrated Digital Media MicroMasters',
    },
    {
      id: '1',
      title: 'Course 5',
      description: 'Cras ornare magna sit amet ultricies condimentum. Morbi aliquet, mauris bibendum placerat volutpat, neque justo cursus purus, ac faucibus ex purus eu ipsum. Maecenas risus sem, porta quis tempor vel, condimentum eget est. Nulla sagittis volutpat est non blandit. Integer nec arcu ut velit egestas auctor. Fusce molestie tincidunt vehicula. Nullam interdum feugiat lacus, quis pharetra augue dictum nec. Nulla maximus dui ut diam posuere tempus. Ut in arcu eu nibh lacinia ultricies. Proin congue, tellus quis viverra elementum, nibh libero aliquet purus, ut imperdiet lorem lectus at est.',
      publishedOn: 'December 17th 2019',
      author: 'Davi Silva',
      relatedProgram: 'Integrated Digital Media MicroMasters',
    },
    {
      id: '1',
      title: 'Course 6',
      description: 'Cras ornare magna sit amet ultricies condimentum. Morbi aliquet, mauris bibendum placerat volutpat, neque justo cursus purus, ac faucibus ex purus eu ipsum. Maecenas risus sem, porta quis tempor vel, condimentum eget est. Nulla sagittis volutpat est non blandit. Integer nec arcu ut velit egestas auctor. Fusce molestie tincidunt vehicula. Nullam interdum feugiat lacus, quis pharetra augue dictum nec. Nulla maximus dui ut diam posuere tempus. Ut in arcu eu nibh lacinia ultricies. Proin congue, tellus quis viverra elementum, nibh libero aliquet purus, ut imperdiet lorem lectus at est.',
      publishedOn: 'December 17th 2019',
      author: 'Davi Silva',
      relatedProgram: 'Integrated Digital Media MicroMasters',
    },
  ];

  const mostViewedCourses = [
    {
      id: '1',
      title: 'Course 1',
      description: 'Cras ornare magna sit amet ultricies condimentum. Morbi aliquet, mauris bibendum placerat volutpat, neque justo cursus purus, ac faucibus ex purus eu ipsum. Maecenas risus sem, porta quis tempor vel, condimentum eget est. Nulla sagittis volutpat est non blandit. Integer nec arcu ut velit egestas auctor. Fusce molestie tincidunt vehicula. Nullam interdum feugiat lacus, quis pharetra augue dictum nec. Nulla maximus dui ut diam posuere tempus. Ut in arcu eu nibh lacinia ultricies. Proin congue, tellus quis viverra elementum, nibh libero aliquet purus, ut imperdiet lorem lectus at est.',
      publishedOn: 'December 17th 2019',
      author: 'Davi Silva',
      relatedProgram: 'Integrated Digital Media MicroMasters',
    },
    {
      id: '1',
      title: 'Course 2',
      description: 'Cras ornare magna sit amet ultricies condimentum. Morbi aliquet, mauris bibendum placerat volutpat, neque justo cursus purus, ac faucibus ex purus eu ipsum. Maecenas risus sem, porta quis tempor vel, condimentum eget est. Nulla sagittis volutpat est non blandit. Integer nec arcu ut velit egestas auctor. Fusce molestie tincidunt vehicula. Nullam interdum feugiat lacus, quis pharetra augue dictum nec. Nulla maximus dui ut diam posuere tempus. Ut in arcu eu nibh lacinia ultricies. Proin congue, tellus quis viverra elementum, nibh libero aliquet purus, ut imperdiet lorem lectus at est.',
      publishedOn: 'December 17th 2019',
      author: 'Davi Silva',
      relatedProgram: 'Integrated Digital Media MicroMasters',
    },
    {
      id: '1',
      title: 'Course 3',
      description: 'Cras ornare magna sit amet ultricies condimentum. Morbi aliquet, mauris bibendum placerat volutpat, neque justo cursus purus, ac faucibus ex purus eu ipsum. Maecenas risus sem, porta quis tempor vel, condimentum eget est. Nulla sagittis volutpat est non blandit. Integer nec arcu ut velit egestas auctor. Fusce molestie tincidunt vehicula. Nullam interdum feugiat lacus, quis pharetra augue dictum nec. Nulla maximus dui ut diam posuere tempus. Ut in arcu eu nibh lacinia ultricies. Proin congue, tellus quis viverra elementum, nibh libero aliquet purus, ut imperdiet lorem lectus at est.',
      publishedOn: 'December 17th 2019',
      author: 'Davi Silva',
      relatedProgram: 'Integrated Digital Media MicroMasters',
    },
    {
      id: '1',
      title: 'Course 4',
      description: 'Cras ornare magna sit amet ultricies condimentum. Morbi aliquet, mauris bibendum placerat volutpat, neque justo cursus purus, ac faucibus ex purus eu ipsum. Maecenas risus sem, porta quis tempor vel, condimentum eget est. Nulla sagittis volutpat est non blandit. Integer nec arcu ut velit egestas auctor. Fusce molestie tincidunt vehicula. Nullam interdum feugiat lacus, quis pharetra augue dictum nec. Nulla maximus dui ut diam posuere tempus. Ut in arcu eu nibh lacinia ultricies. Proin congue, tellus quis viverra elementum, nibh libero aliquet purus, ut imperdiet lorem lectus at est.',
      publishedOn: 'December 17th 2019',
      author: 'Davi Silva',
      relatedProgram: 'Integrated Digital Media MicroMasters',
    },
    {
      id: '1',
      title: 'Course 5',
      description: 'Cras ornare magna sit amet ultricies condimentum. Morbi aliquet, mauris bibendum placerat volutpat, neque justo cursus purus, ac faucibus ex purus eu ipsum. Maecenas risus sem, porta quis tempor vel, condimentum eget est. Nulla sagittis volutpat est non blandit. Integer nec arcu ut velit egestas auctor. Fusce molestie tincidunt vehicula. Nullam interdum feugiat lacus, quis pharetra augue dictum nec. Nulla maximus dui ut diam posuere tempus. Ut in arcu eu nibh lacinia ultricies. Proin congue, tellus quis viverra elementum, nibh libero aliquet purus, ut imperdiet lorem lectus at est.',
      publishedOn: 'December 17th 2019',
      author: 'Davi Silva',
      relatedProgram: 'Integrated Digital Media MicroMasters',
    },
    {
      id: '1',
      title: 'Course 3',
      description: 'Cras ornare magna sit amet ultricies condimentum. Morbi aliquet, mauris bibendum placerat volutpat, neque justo cursus purus, ac faucibus ex purus eu ipsum. Maecenas risus sem, porta quis tempor vel, condimentum eget est. Nulla sagittis volutpat est non blandit. Integer nec arcu ut velit egestas auctor. Fusce molestie tincidunt vehicula. Nullam interdum feugiat lacus, quis pharetra augue dictum nec. Nulla maximus dui ut diam posuere tempus. Ut in arcu eu nibh lacinia ultricies. Proin congue, tellus quis viverra elementum, nibh libero aliquet purus, ut imperdiet lorem lectus at est.',
      publishedOn: 'December 17th 2019',
      author: 'Davi Silva',
      relatedProgram: 'Integrated Digital Media MicroMasters',
    },
    {
      id: '1',
      title: 'Course 4',
      description: 'Cras ornare magna sit amet ultricies condimentum. Morbi aliquet, mauris bibendum placerat volutpat, neque justo cursus purus, ac faucibus ex purus eu ipsum. Maecenas risus sem, porta quis tempor vel, condimentum eget est. Nulla sagittis volutpat est non blandit. Integer nec arcu ut velit egestas auctor. Fusce molestie tincidunt vehicula. Nullam interdum feugiat lacus, quis pharetra augue dictum nec. Nulla maximus dui ut diam posuere tempus. Ut in arcu eu nibh lacinia ultricies. Proin congue, tellus quis viverra elementum, nibh libero aliquet purus, ut imperdiet lorem lectus at est.',
      publishedOn: 'December 17th 2019',
      author: 'Davi Silva',
      relatedProgram: 'Integrated Digital Media MicroMasters',
    },
    {
      id: '1',
      title: 'Course 5',
      description: 'Cras ornare magna sit amet ultricies condimentum. Morbi aliquet, mauris bibendum placerat volutpat, neque justo cursus purus, ac faucibus ex purus eu ipsum. Maecenas risus sem, porta quis tempor vel, condimentum eget est. Nulla sagittis volutpat est non blandit. Integer nec arcu ut velit egestas auctor. Fusce molestie tincidunt vehicula. Nullam interdum feugiat lacus, quis pharetra augue dictum nec. Nulla maximus dui ut diam posuere tempus. Ut in arcu eu nibh lacinia ultricies. Proin congue, tellus quis viverra elementum, nibh libero aliquet purus, ut imperdiet lorem lectus at est.',
      publishedOn: 'December 17th 2019',
      author: 'Davi Silva',
      relatedProgram: 'Integrated Digital Media MicroMasters',
    },
  ];
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
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
            <StickyWrapper>
              <Filter />
            </StickyWrapper>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
            <div className="row">
              <div className="col-12">
                <RecentlyPublishedCourses>
                  Recently Published
                </RecentlyPublishedCourses>
              </div>
              {courses.map((course) => (
                <>
                  <CoursesHomeListRecentlyPublished
                    column="3"
                    title={course.title}
                    author={course.author}
                    publishedOn={course.publishedOn}
                    relatedProgram={course.relatedProgram}
                  />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
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
      <MostViewed className="container">
        <div className="row">
          <div className="col-12">
            <MostViewedTitle>
                Most Viewed
            </MostViewedTitle>
            <ul
              style={{
                overflowX: 'scroll',
                overflowY: 'hidden',
                height: '270px',
                whiteSpace: 'nowrap',
              }}
            >
              {mostViewedCourses.map((course) => (
                <>
                  <CoursesHomeListMostViewed
                    title={course.title}
                    author={course.author}
                    publishedOn={course.publishedOn}
                    relatedProgram={course.relatedProgram}
                  />
                </>
              ))}
            </ul>
          </div>
        </div>
      </MostViewed>
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
