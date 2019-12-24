import React from 'react';
import AdSense from 'react-adsense';

import { AdSquare } from '../../../styled-components/advertisements.styled-components';

const AdvertisementSquare = () => (
  <>
    {/* <AdSense.Google
      client="ca-pub-3011749340662383"
      slot="7806394673"
      style={{ width: '100%', height: 300, float: 'left' }}
      format=""
    /> */}
    <AdSquare>
      Ad
    </AdSquare>
  </>
);

export default AdvertisementSquare;
