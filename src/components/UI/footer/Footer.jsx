import React from 'react';

import {
  FooterDiv,
  P,
  Github,
  Header,
  Ul,
  Li,
  LinkTo
} from '../../../styled-components/footer.styled-components';

function Footer() {
  return (
    <>
      <FooterDiv>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm- 12 col-12">
              <Header>
                Blog
              </Header>
              <Ul>
                <Li>
                  <LinkTo
                    to="/blog/"
                  >
                    Home
                  </LinkTo>
                </Li>
              </Ul>
            </div>
            <div className="col-lg-3 col-md-3 col-sm- 12 col-12">
              <Header>
                Podcasts
              </Header>
              <Ul>
                <Li>
                  <LinkTo
                    to="/podcasts/"
                  >
                    Home
                  </LinkTo>
                </Li>
              </Ul>
            </div>
            <div className="col-lg-3 col-md-3 col-sm- 12 col-12">
              <Header>
                Courses
              </Header>
              <Ul>
                <Li>
                  <LinkTo
                    to="/courses/"
                  >
                    Home
                  </LinkTo>
                </Li>
              </Ul>
            </div>
            <div className="col-lg-3 col-md-3 col-sm- 12 col-12">
              Newsletter
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <P>
                  Developed by
                {' '}
                <Github to="//github.com/Davi-Silva">Davi Silva</Github>
              </P>
            </div>
          </div>
        </div>
      </FooterDiv>
    </>
  );
}

export default Footer;
