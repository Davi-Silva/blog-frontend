import React from 'react';

import {
  Newsletter,
  NewsletterDiv,
  NewsletterTitle,
  NewsletterP,
  NewsletterInput,
} from '../../../styled-components/components/newsletter-section.component';

const NewsletterSection = () => (
  <>
    <Newsletter>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <NewsletterDiv>
              <NewsletterTitle>
                Newsletter
              </NewsletterTitle>
              <NewsletterP>
                Get weekly updated about our upcoming courses
              </NewsletterP>
              <form>
                <NewsletterInput>
                  <input
                    type="email"
                    placeholder="Email"
                  />
                </NewsletterInput>
              </form>
            </NewsletterDiv>
          </div>
        </div>
      </div>
    </Newsletter>
  </>
);

export default NewsletterSection;
