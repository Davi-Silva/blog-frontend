import React from 'react';

import {
  CoursesListUl,
  StickyWrapper,
} from '../styled-components/courses.styled-components';

import video from '../static/video/video.mp4';

import MyCourse from '../components/UI/lists/MyCoursesList.component';
import SubNavBar from '../components/UI/navbar/SubNavBar';
import NewsletterSide from '../components/UI/newsletter/NewsletterSide.component';

const MyCoursesList = () => {
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
  ];
  return (
    <>
      <SubNavBar media="My Courses" category="" title="" />
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
            <CoursesListUl>
              {courses.map((course) => (
                <>
                  <li
                    key={course.id}
                    style={{
                      listStyle: 'none',
                    }}
                  >
                    <MyCourse
                      title={course.title}
                      author={course.author}
                      publishedOn={course.publishedOn}
                      relatedProgram={course.relatedProgram}
                    />
                  </li>
                </>
              ))}
            </CoursesListUl>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
            <StickyWrapper>
              {/* <RecentCategories /> */}
              <NewsletterSide />
            </StickyWrapper>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCoursesList;
