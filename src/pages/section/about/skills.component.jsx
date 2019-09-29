import React from "react";

import {
	SkillsContainer,
	SkillsH3,
	SkillsH5,
	SkillsH6,
	SkillsUl,
	SkillsDevOpsUl,
	SkillsLi,
	SkillsImg
} from "../../../styled-components/about.styled-components";

function Skills() {
	return (
		<React.Fragment>
			<section className="container">
				<div className="row">
					<div className="col-12">
						<SkillsContainer>
							<SkillsH3>SKILLS</SkillsH3>
							<div className="row">
								<div className="col-md-6 col-12">
									<SkillsH5>BACK-END</SkillsH5>
									<SkillsH6>Programming Language/Framework</SkillsH6>
									<SkillsUl>
										<SkillsLi>
											<SkillsImg src="https://davi-course.s3.amazonaws.com/static/prog-langs/c-icon.png"></SkillsImg>
										</SkillsLi>
										<SkillsLi>
											<SkillsImg src="https://davi-course.s3.amazonaws.com/static/prog-langs/cpp-icon.png"></SkillsImg>
										</SkillsLi>
										<SkillsLi>
											<SkillsImg src="https://davi-course.s3.amazonaws.com/static/prog-langs/csharp-icon.png"></SkillsImg>
										</SkillsLi>
										<SkillsLi>
											<SkillsImg src="https://davi-course.s3.amazonaws.com/static/prog-langs/java-icon.png"></SkillsImg>
										</SkillsLi>
										<SkillsLi>
											<SkillsImg src="https://davi-course.s3.amazonaws.com/static/prog-langs/js-icon.png"></SkillsImg>
										</SkillsLi>
										<SkillsLi>
											<SkillsImg src="https://davi-course.s3.amazonaws.com/static/prog-langs/nodejs-icon.png"></SkillsImg>
										</SkillsLi>
										<SkillsLi>
											<SkillsImg src="https://davi-course.s3.amazonaws.com/static/prog-langs/django-icon.png"></SkillsImg>
										</SkillsLi>
										<SkillsLi>
											<SkillsImg src="https://davi-course.s3.amazonaws.com/static/prog-langs/solidity-icon.png"></SkillsImg>
										</SkillsLi>
										<SkillsLi>
											<SkillsImg src="https://davi-course.s3.amazonaws.com/static/prog-langs/ts-icon.png"></SkillsImg>
										</SkillsLi>
										<SkillsLi>
											<SkillsImg src="https://davi-course.s3.amazonaws.com/static/prog-langs/c-icon.png"></SkillsImg>
										</SkillsLi>
									</SkillsUl>
								</div>
								<div className="col-md-6 col-12">
									<SkillsH5>FRONT-END</SkillsH5>
									<SkillsH6>Programming Language/Framework</SkillsH6>
									<SkillsUl>
										<SkillsLi>
											<SkillsImg src="https://davi-course.s3.amazonaws.com/static/prog-langs/html5-icon.png"></SkillsImg>
										</SkillsLi>
										<SkillsLi>
											<SkillsImg src="https://davi-course.s3.amazonaws.com/static/prog-langs/css3-icon.png"></SkillsImg>
										</SkillsLi>
										<SkillsLi>
											<SkillsImg src="https://davi-course.s3.amazonaws.com/static/prog-langs/react-icon.png"></SkillsImg>
										</SkillsLi>
										<SkillsLi>
											<SkillsImg src="https://davi-course.s3.amazonaws.com/static/prog-langs/sass-icon.png"></SkillsImg>
										</SkillsLi>
									</SkillsUl>
								</div>
								<div className="col-12">
									<SkillsH5>DEVOPS</SkillsH5>
									<SkillsDevOpsUl>
										<SkillsLi>
											<SkillsImg src="https://davi-course.s3.amazonaws.com/static/prog-langs/aws-icon.png"></SkillsImg>
										</SkillsLi>
										<SkillsLi>
											<SkillsImg src="https://davi-course.s3.amazonaws.com/static/prog-langs/cpanel-icon.png"></SkillsImg>
										</SkillsLi>
										<SkillsLi>
											<SkillsImg src="https://davi-course.s3.amazonaws.com/static/prog-langs/heroku-icon.png"></SkillsImg>
										</SkillsLi>
									</SkillsDevOpsUl>
								</div>
							</div>
						</SkillsContainer>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}

export default Skills;
