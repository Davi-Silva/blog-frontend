import React from "react";

import Hero from "./section/about/hero.component";
import WorkExperience from "./section/about/work-experience.component";
import Skills from "./section/about/skills.component";
import Portifolio from "./section/about/portifolio.component";
import Blog from "./section/about/blog.component";

function About(props) {
  return (
    <React.Fragment>
      <Hero />
      <WorkExperience />
      <Skills />
      <Portifolio />
      <Blog />
    </React.Fragment>
  );
}

export default About;
