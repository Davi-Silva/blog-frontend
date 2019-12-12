import React, { useState } from 'react';

import {
  FaPlus,
  // FaUser,
} from 'react-icons/fa';
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
    console.log('query:', query);
  };

  const handleSearch = async (e) => {
    setSearchState({
      query: e.target.value,
    });
    submitSearch();
  };

  console.log('SEARCHBAR:', props);

  return (
    <>
      <Form method="post">
        <Input
          type="text"
          onChange={handleSearch}
          placeholder="Search"
        />
        <Background />
      </Form>
    </>
  );
};

export default SearchForm;
