import React from 'react';

import {
  UnderTopCoverStrapDiv,
} from '../../../styled-components/components/under-topcover-strap.styled-component';

import Blockchain from '../../../static/img/blockchain.png';
import SmartContract from '../../../static/img/smart-contract.png';
import Cryptocurrency from '../../../static/img/cryptocurrency.png';

const UnderTopCoverStrap = () => (
  <>
    <UnderTopCoverStrapDiv>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
            <ul
              style={{
                display: 'table',
                margin: '0 auto',
              }}
            >
              <li>
                <img
                  src={Blockchain}
                  alt="Blockchain"
                />
              </li>
              <li>
                <h6
                  style={{
                    textAlign: 'left',
                    marginLeft: '2px',
                  }}
                >
Blockchain
                  <br />
                  {' '}
Development
                </h6>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
            <ul
              style={{
                display: 'table',
                margin: '0 auto',
              }}
            >
              <li>
                <img
                  src={SmartContract}
                  alt="Smart Contract"
                />
              </li>
              <li>
                <h6>
Smart Contract
                  <br />
                  {' '}
Development
                </h6>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
            <ul
              style={{
                display: 'table',
                margin: '0 auto',
              }}
            >
              <li>
                <img
                  src={Cryptocurrency}
                  alt="Crypto Investiments"
                />
              </li>
              <li>
                <h6
                  style={{
                    textAlign: 'left',
                    marginLeft: '4px',
                  }}
                >
                  Crypto
                  {' '}
                  <br />
                  Investments
                </h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </UnderTopCoverStrapDiv>
  </>
);

export default UnderTopCoverStrap;
