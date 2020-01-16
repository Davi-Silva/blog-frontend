import React, { Component } from 'react';
import slugify from 'slugify';

import {
  Wrapper,
  Title,
  CategoriesUl,
  CategoriesLi,
  CategoryLink,
} from '../../../styled-components/recent-category-blog-post.styled.components';

export default class RecentCategoriesBlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getCategories = this.getCategories.bind(this);
  }

  async componentDidMount() {
    const categoriesList = await this.getCategories();
    this.setStateAsync({
      categories: categoriesList,
    });
  }

  async getCategories() {
    this.response = await fetch('https://cryptic-activist-backend.herokuapp.com/podcasts/get/categories/newest/5', {
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

  render() {
    const { categories } = this.state;
    return (
      <>
        <Wrapper>
          <Title>
          Recent Categories
          </Title>
          <CategoriesUl>
            {categories.map((category, key) => (
              <CategoriesLi
                key={key}
                style={{
                  listStyle: 'none',
                }}
              >
                <CategoryLink
                  to={`/podcasts/category/${slugify(category.toLowerCase())}`}
                >
                  {category}
                </CategoryLink>
              </CategoriesLi>
            ))}
          </CategoriesUl>
        </Wrapper>
      </>
    );
  }
}
