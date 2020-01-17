import React, { useState } from 'react';

import {
  Form,
  Input,
} from '../../../../styled-components/navbar-courses-search-form-desktop.styled-components';

const CoursesSearchForm = (props) => {
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

  // const handleCloseSearcfForm = () => {
  //   const {
  //     SearchFormOnClick,
  //   } = props;
  //   const closeSearchForm = SearchFormOnClick;
  //   closeSearchForm();
  // };

  return (
    <>
      <Form method="post">
        <Input
          type="text"
          onChange={handleSearch}
          placeholder="Search"
        />
      </Form>
    </>
  );
};

export default CoursesSearchForm;
