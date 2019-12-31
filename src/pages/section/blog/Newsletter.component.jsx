import React from 'react';

import {
  FaEnvelope,
} from 'react-icons/fa';

import {
  Wrapper,
  Title,
  Statement,
  Form,
} from '../../../styled-components/blog-post-newsletter.styled-components';

const Newsletter = () => {
  const test = 'test';
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Title>Newsletter</Title>
              <Statement>
                Get weekly updated about our upcoming news, articles and tutorials.
              </Statement>
              <Form>
                <input type="email" placeholder="Email" />
                <button
                  type="submit"
                >
                  <FaEnvelope />
                </button>
              </Form>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Newsletter;
