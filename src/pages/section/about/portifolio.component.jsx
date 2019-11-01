import React from "react";

import {
  PortifolioH3,
  PortifolioImg,
  PortifolioItemContainer,
  SeeMore,
  PortifolioTitle,
  PortifolioDescription
} from "../../../styled-components/about.styled-components";

import canadaecigs from "../../../static/img/canadaecigs.gif";

export default function Protifolio() {
  return (
    <React.Fragment>
      <section className="container" style={{ marginTop: "30px auto" }}>
        <div className="row">
          <div className="col-12">
            <header>
              <PortifolioH3>PORTIFOLIO</PortifolioH3>
            </header>

            <PortifolioItemContainer to="//www.canadaecigs.com" target="_blank">
              <div className="row">
                <div className="col-lg-5 col-md-6 col-sm-12 col-12">
                  <PortifolioImg src={canadaecigs}></PortifolioImg>
                </div>
                <div className="col-lg-7 col-md-6 col-sm-12 col-12">
                  <PortifolioTitle>Canada E-Cigs</PortifolioTitle>
                  <PortifolioDescription>
                    First launched in 2015, Canada E-Cigs is a canadian
                    e-cigarretes ecommerce settled in Victoria, British
                    Columbia, Canada. It was originally founded by two canadian
                    friends of mine to later on, in 2019, be part of the team
                    leaders and become the Chief Technology Officer and one of
                    the owners of the business.
                  </PortifolioDescription>
                  <SeeMore>SEE MORE</SeeMore>
                </div>
              </div>
            </PortifolioItemContainer>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
