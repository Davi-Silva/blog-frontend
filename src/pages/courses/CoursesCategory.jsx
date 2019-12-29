import React, {
// useContext,
// useState,
// useEffect,
} from 'react';

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
    params,
  } = props.match;

  const remainingCourses = [
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
  ];

  const coursesInProgress = [
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
  ];

  const completedCourses = [
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
  ];

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
                  <span>></span>
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
