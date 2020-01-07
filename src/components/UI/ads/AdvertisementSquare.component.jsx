import React from 'react';
import AdSense from 'react-adsense';

import { AdSquare } from '../../../styled-components/advertisements.styled-components';

const AdvertisementSquare = ({ IsLast }) => {
  let ad;
  if (IsLast === 'last') {
    ad = (
      <>
        <AdSquare
          className="last"
        >
      Ad
        </AdSquare>
      </>
    );
  } else {
    ad = (
      <>
        <AdSquare>
      Ad
        </AdSquare>
      </>
    );
  }

  return (
    <>
      {/* <AdSense.Google
      client="ca-pub-3011749340662383"
      slot="7806394673"
      style={{ width: '100%', height: 300, float: 'left' }}
      format=""
    /> */}
      {ad}
    </>
  );
};

export default AdvertisementSquare;
