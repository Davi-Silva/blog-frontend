import React, {
// useContext,
// useState,
// useEffect,
} from 'react';
import PropTypes from 'prop-types';


import {
  FaStar,
} from 'react-icons/fa';
import {
  CategoryCover,
  CategoryTitle,
  CategoryDescription,
  Breadcrumb,
  BreadcrumbLink,
  MainStatement,
  RelatedTopics,
  RelatedTopicsLink,
  AddToFavorites,
  // CoursesListUl,
} from '../../styled-components/courses-category.styled-components';

import CategoryMostViewed from '../../components/UI/lists/courses-category/CategoryMostViewed.component';

import Cover from '../../static/img/circuit.jpg';

const CoursesRelatedProgram = (props) => {
  const {
    match,
  } = props;
  const { params } = match;

  const relatedTopics = [
    'Programming',
    'Blockchain',
    'Investing',
  ];

  return (
    <>
      <CategoryCover
        style={{
          backgroundImage: `url(${Cover})`,
        }}
      >

        <div className="container">
          <div className="row">
            <div className="col-12">
              <CategoryTitle>
                {params.slug}
              </CategoryTitle>
              <CategoryDescription>
                  Etiam feugiat tempus ipsum vel tincidunt. Maecenas bibendum,
                  massa in maximus egestas, mauris augue accumsan neque, ut tempor lacus leo vel neque.
              </CategoryDescription>
            </div>
          </div>
        </div>
      </CategoryCover>
      <Breadcrumb>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul>
                <li>
                  <BreadcrumbLink
                    to="/courses"
                  >
                  Home
                  </BreadcrumbLink>
                </li>
                <li>
                  <span>></span>
                </li>
                <li>
                  <BreadcrumbLink
                    to="/courses"
                  >
                  All Category
                  </BreadcrumbLink>
                </li>
                <li>
                  <span>{'>'}</span>
                </li>
                <li>
                  <p>
                    {params.slug}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Breadcrumb>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-7 col-12">
            <MainStatement>
            Find free online chemistry courses covering a broad range of topics from
            quantum mechanics to the science behind what we eat. Take courses in
            biochemistry, electrochemistry, organic chemistry, alternative fuels and
            much more from top universities like Harvard, MIT, and more.
            </MainStatement>
            <RelatedTopics>
              <strong>Related Topics: </strong>
              {relatedTopics.map((topic) => (
                <>
                  <RelatedTopicsLink to={`/courses/topic/${topic}`}>
                    {topic}
                  </RelatedTopicsLink>
                  {', '}
                </>
              ))}
            </RelatedTopics>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-5 col-12">
            <AddToFavorites>
              Favorite
              <FaStar />
            </AddToFavorites>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-7 col-12">
            <CategoryMostViewed />
          </div>
          <div className="col-lg-5 col-md-5 col-sm-5 col-12" />
        </div>
      </div>
    </>
  );
};

export default CoursesRelatedProgram;

CoursesRelatedProgram.propTyps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
