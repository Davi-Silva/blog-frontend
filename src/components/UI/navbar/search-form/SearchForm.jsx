
import React, { useState } from 'react';

import {
  Form,
  Input,
  Background,
} from '../../../../styled-components/navbar-search-form.styled-components';

const SearchForm = (props) => {
  const [searchState, setSearchState] = useState({
    query: '',
  });

  const submitSearch = async () => {
    const {
      query,
    } = searchState;
  };

  const handleSearch = async (e) => {
    setSearchState({
      query: e.target.value,
    });
    submitSearch();
  };

  const handleCloseSearcfForm = () => {
    const {
      SearchFormOnClick,
    } = props;
    const closeSearchForm = SearchFormOnClick;
    closeSearchForm();
  };

  return (
    <>
      <Form method="post">
        <Input
          type="text"
          onChange={handleSearch}
          placeholder="Search"
          autoFocus
        />
        <Background
          onClick={handleCloseSearcfForm}
        />
      </Form>
    </>
  );
};

export default SearchForm;
