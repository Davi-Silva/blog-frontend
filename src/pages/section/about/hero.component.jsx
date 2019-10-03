import React from "react";
import {
  Title,
  SubTitle,
  SubtitleSpan,
  DivAnim,
  DivAnim0,
  DivAnim1,
  DivAnim2,
  DivAnim3,
  Button
} from "../../../styled-components/about.styled-components";

function Hero() {
  return (
    <React.Fragment>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-7 col-12">
              <Title>Course</Title>
              <SubTitle>
                Entrepreneur
                <SubtitleSpan>.</SubtitleSpan>
                Full Stack Developer
                <SubtitleSpan>.</SubtitleSpan>
                Cryptocurrency Enthusiast
              </SubTitle>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <DivAnim>
                <DivAnim0></DivAnim0>
                <DivAnim1></DivAnim1>
                <DivAnim2></DivAnim2>
                <DivAnim3></DivAnim3>
              </DivAnim>
            </div>
            <div className="col-12">
              <Button>v</Button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Hero;
