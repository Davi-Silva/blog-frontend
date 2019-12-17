import React from 'react';

import {
  FaCode,
} from 'react-icons/fa';
import {
  RecentCategoriesDiv,
  RecentCategoriesTitle,
  RecentCategoriesWrap,
} from '../../../styled-components/components/recent-categories.styled-components';

const RecentCategories = () => {
  const categories = [
    {
      category: 'Solidity',
      url: 'solidity',
    },
    {
      category: 'Development',
      url: 'development',
    },
    {
      category: 'Solidity',
      url: 'solidity',
    },
    {
      category: 'Solidity',
      url: 'solidity',
    },
    {
      category: 'Solidity',
      url: 'solidity',
    },
    {
      category: 'Solidity',
      url: 'solidity',
    },
    {
      category: 'Solidity',
      url: 'solidity',
    },
    {
      category: 'Solidity',
      url: 'solidity',
    },
  ];

  return (
    <>
      <RecentCategoriesDiv>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <RecentCategoriesTitle>
              Recent Categories
              </RecentCategoriesTitle>
            </div>
            {categories.map((category) => (
              <>
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <RecentCategoriesWrap
                    to={`/courses/category/${category.url}`}
                  >
                    <FaCode />
                    <span>
                      {category.category}
                    </span>
                  </RecentCategoriesWrap>
                </div>
              </>
            ))}
          </div>
        </div>
      </RecentCategoriesDiv>
    </>
  );
};

export default RecentCategories;
