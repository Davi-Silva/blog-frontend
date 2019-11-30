import React from 'react';

import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';

import QRCodeImg from '../../../static/img/qrcode.png';

import {
  FooterDiv,
  P,
  Github,
  Header,
  Ul,
  Li,
  LinkTo,
  SocialMediaTitle,
  SocialMediaUl,
  SocialMediaLi,
  SocialMediaLink,
  LinkToPolicies,
  QRCode,
  Donate,
  CopyRight,
} from '../../../styled-components/footer.styled-components';

import NewsletterFooter from '../newsletter/NewsletterFooter.component';

function Footer() {
  return (
    <>
      <FooterDiv>
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-12 col-12">
              <Donate>
                Donate
              </Donate>
              <QRCode
                src={QRCodeImg}
              />
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 col-12">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
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
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
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
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <Header>
                Courses
                  </Header>
                  <Ul>
                    <Li>
                      <LinkTo
                        to="/courses/"
                      >
                    Coming Soon
                      </LinkTo>
                    </Li>
                  </Ul>
                </div>
              </div>
              <div
                className="row"
                style={{
                  marginTop: '6px',
                }}
              >
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <LinkToPolicies
                    to="/terms-and-conditions"
                  >
                    <p>
                      Terms {'&'} Conditions
                    </p>
                  </LinkToPolicies>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <LinkToPolicies
                    to="/privacy-policy"
                  >
                    Privacy Policy
                  </LinkToPolicies>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <CopyRight>
                    © {new Date().getFullYear()} Cryptic Activist
                  </CopyRight>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-12" />
                <div className="col-lg-3 col-md-3 col-sm-12 col-12" />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
              <NewsletterFooter />
              <div
                style={{
                  marginTop: '20px',
                  marginBottom: '5px',
                }}
              >
                <SocialMediaTitle>
                Social Medias
                </SocialMediaTitle>
                <SocialMediaUl>
                  <SocialMediaLi>
                    <SocialMediaLink to="//www.instagram.com/" target="_blank">
                      <FaTwitter />
                    </SocialMediaLink>
                  </SocialMediaLi>
                  <SocialMediaLi>
                    <SocialMediaLink to="//www.facebook.com/" target="_blank">
                      <FaFacebook />
                    </SocialMediaLink>
                  </SocialMediaLi>
                  <SocialMediaLi>
                    <SocialMediaLink to="//www.instagram.com/" target="_blank">
                      <FaInstagram />
                    </SocialMediaLink>
                  </SocialMediaLi>
                  <SocialMediaLi>
                    <SocialMediaLink to="//www.linkedin.com/" target="_blank">
                      <FaLinkedin />
                    </SocialMediaLink>
                  </SocialMediaLi>
                </SocialMediaUl>
              </div>
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
