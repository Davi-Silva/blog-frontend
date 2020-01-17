import React, { useEffect } from 'react';
import slugify from 'slugify';
import { useSelector, useDispatch } from 'react-redux';

import {
  Container,
  SubNavigatorBar,
  Ul,
  Li,
  CategoryLinkTo,
  Separator,
} from '../../../styled-components/components/subnavbar-category.styled-components copy';


import * as BlogActions from '../../../store/actions/blog/categories';

const SubNavBarCategory = () => {
  const blogCategories = useSelector((state) => state.blogCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(BlogActions.getRecentCategories(5));
  }, []);


  return (
    <>
      <SubNavigatorBar>
        <Container className="container">
          <div className="row">
            <div className="col-12">
              {/* {subNavMenu} */}
              <Ul>
                {blogCategories.data.map((category) => (
                  <Li
                    key={category}
                  >
                    <CategoryLinkTo to={`/blog/category/${category}`}>
                      {category}
                    </CategoryLinkTo>
                  </Li>
                ))}
              </Ul>
            </div>
          </div>
        </Container>
      </SubNavigatorBar>
    </>
  );
};

export default SubNavBarCategory;
