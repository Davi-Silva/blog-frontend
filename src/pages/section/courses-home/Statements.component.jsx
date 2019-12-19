import React from 'react';

import {
  StatementDiv,
  StatementWrapper,
  Ul,
  Li,
  StatementTitle,
} from '../../../styled-components/components/statement.styled-components';

const Statements = () => (
  <>
    <StatementDiv>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm 12 col-12">
            <StatementWrapper>
              <Ul>
                <Li
                  style={{
                    width: '25%',
                  }}
                >
                  <StatementTitle>
                    Teste 1
                  </StatementTitle>
                </Li>
                <Li>
                  <StatementTitle>
                    Teste 2
                  </StatementTitle>
                </Li>
              </Ul>
            </StatementWrapper>
          </div>
          <div className="col-lg-4 col-md-4 col-sm 12 col-12">
            <StatementWrapper>
              <h5
                style={{
                  margin: '10px auto',
                  display: 'table',
                }}
              >
                  Test 3
              </h5>
            </StatementWrapper>
          </div>
          <div className="col-lg-4 col-md-4 col-sm 12 col-12">
            <StatementWrapper>
              <h5
                style={{
                  margin: '10px auto',
                  display: 'table',
                }}
              >
                  Test 4
              </h5>
            </StatementWrapper>
          </div>
        </div>
      </div>
    </StatementDiv>
  </>
);

export default Statements;
