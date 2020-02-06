import React from 'react';

// import {
//   Fa
// } from 'react-icons/fa';

import {
  CategoriesWrapper,
  CategoriesUl,
  CategoriesLi,
  Category,
} from '../../../../../styled-components/navbar-station-categories-menu.styled-components';

const CategoriesMenu = (props) => {
  const test = 'er';
  const {
    Toggle,
  } = props;

  const handleToggle = () => {
    const handle = Toggle;
    handle();
  };


  return (
    <CategoriesWrapper>
      <CategoriesUl>
        <CategoriesLi>
          <Category
            to="/courses/category"
            onClick={handleToggle}
          >
            <span>T</span>
            <p>sdfsdf</p>
          </Category>
        </CategoriesLi>
        <CategoriesLi>
          <Category
            to="/courses/category"
            onClick={handleToggle}
          >
            <span>T</span>
            <p>sdfsdf</p>
          </Category>
        </CategoriesLi>
        <CategoriesLi>
          <Category
            to="/courses/category"
            onClick={handleToggle}
          >
            <span>T</span>
            <p>sdfsdf</p>
          </Category>
        </CategoriesLi>
      </CategoriesUl>
    </CategoriesWrapper>
  );
};

export default CategoriesMenu;
