
import React, { useState } from 'react';

import {
  Form,
  Input,
  Background,
} from '../../../../styled-components/navbar-courses-search-form.styled-components';

const CoursesSearchForm = (props) => {
  const [searchState, setSearchState] = useState({
    query: '',
  });

  const submitSearch = async () => {
    const {
      query,
    } = searchState;
    console.log('query:', query);
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
    console.log('CloseSearchFormOnClick:', SearchFormOnClick);
    const closeSearchForm = SearchFormOnClick;
    closeSearchForm();
  };


  console.log('SEARCHBAR:', props);

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

export default CoursesSearchForm;
