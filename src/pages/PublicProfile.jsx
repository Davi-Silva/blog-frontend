import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import UserProvider from '../contexts/UserProvider';

const PublicProfile = (props) => {
  const [
    // publicProfile,
    setPublicProfile,
  ] = useState();

  const userInfo = useContext(UserProvider.context);
  console.log('userInfo:', userInfo);

  const getPublicUser = async (user) => {
    const response = await fetch(`https://cryptic-activist-backend.herokuapp.com/user/public-profile/${user}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const {
      user,
    } = props.match.params;
    setPublicProfile(getPublicUser(user));
    console.log('match.params:', user);
  }, []);


  return (
    <>

    </>
  );
};

export default PublicProfile;

PublicProfile.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      user: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
