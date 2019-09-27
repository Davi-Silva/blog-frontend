import React from "react";

import {
	WorkExperienceSection,
	WorkExperienceH3,
	Company,
	Image,
	CompanyB,
	CompanyH6
} from "../../../styled-components/about.styled-components";

import canadaecigs from "../../../../static/img/canada-ecigs.gif";
import nerit from "../../../../static/img/nerit.gif";
import freelance from "../../../../static/img/freelance.gif";

function WorkExperience() {
	return (
		<React.Fragment>
			<WorkExperienceSection className="work-experience">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<header>
								<WorkExperienceH3>WORK EXPERIENCE</WorkExperienceH3>
							</header>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 col-12">
							<Company>
								<Image src={canadaecigs} alt="Canada E-cigs"></Image>
								<CompanyB>Canada E-Cigs</CompanyB>
								<CompanyH6>CTO</CompanyH6>
							</Company>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 col-12">
							<Company>
								<Image src={nerit} alt="Nerit"></Image>
								<CompanyB>Nerit</CompanyB>
								<CompanyH6>Web Designer</CompanyH6>
							</Company>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 col-12">
							<Company>
								<Image src={freelance} alt="Freelance"></Image>
								<CompanyB>Freelance</CompanyB>
								<CompanyH6>Full Stack Developer</CompanyH6>
							</Company>
						</div>
					</div>
				</div>
			</WorkExperienceSection>
		</React.Fragment>
	);
}

export default WorkExperience;
