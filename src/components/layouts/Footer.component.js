import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  footerStyle = {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: "20px 0"
  };

  footerPStyle = {
    color: "#a9a7ad",
    margin: "15px 0px 3px 0px"
  };

  footerLinkStyle = {
    color: "#0058e4"
  };

  render() {
    return (
      <React.Fragment>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p className="text-center" style={this.footerPStyle}>
                  Developed by{" "}
                  <Link to="/" style={this.footerLinkStyle}>
                    Davi Silva
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
