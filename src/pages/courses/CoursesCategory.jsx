
/* eslint-disable react/destructuring-assignment */
import React, { useContext, useState, useEffect } from 'react';

import {
  CategoryCover,
  CategoryTitle,
  Breadcrumb,
  BreadcrumbLink,
} from '../../styled-components/courses-category.styled-components';

import CoursesRelatedProgramList from '../../components/UI/lists/CoursesRelatedProgramList.component';

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

  return (
    <>
      <CategoryCover
        style={{
          backgroundImage: `url(${Cover})`,
        }}
      >
        <CategoryTitle>
          <div className="container">
            <div className="row">
              <div className="col-12">
                {params.slug}
              </div>
            </div>
          </div>
        </CategoryTitle>
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
    </>
  );
};

export default CoursesRelatedProgram;
