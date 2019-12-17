import React from 'react';

import {
  FaSearch,
} from 'react-icons/fa';
import {
  TopCoverDiv,
  TopCoverContent,
  TopCoverTitle,
  TopCoverP,
  TopCoverSearchInput,
} from '../../../styled-components/components/topcover.styled-components';

import Learn from '../../../static/img/learn.jpg';

const TopCover = () => (
  <>
    <TopCoverDiv
      style={{
        backgroundImage: `url(${Learn})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <TopCoverContent>
              <TopCoverTitle>
                  Freedom is an irrevocable right
              </TopCoverTitle>
              <TopCoverP>
                  Use technology to opress the opressors of liberty
              </TopCoverP>
              <form>
                <TopCoverSearchInput>
                  <input
                    type="text"
                    placeholder="What brings you closer to freedom?"
                  />
                  <FaSearch />
                </TopCoverSearchInput>
              </form>
            </TopCoverContent>
          </div>
        </div>
      </div>
    </TopCoverDiv>
  </>
);

export default TopCover;
