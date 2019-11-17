import React from 'react';

import { P, A } from '../../../styled-components/footer.styled-components';

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <P>
                  Developed by
                {' '}
                <A to="//github.com/Davi-Silva">Davi Silva</A>
              </P>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
