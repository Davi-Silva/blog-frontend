import React, { Component } from "react";

import { P, A } from "../../styled-components/footer.styled-components";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <P>
                  Developed by <A to="/">Davi Silva</A>
                </P>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
