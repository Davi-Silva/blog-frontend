import styled from "styled-components";

// ###################
// ###### HERO #######
// ###################

export const Title = styled.h1`
	color: #6345ba;
	font-weight: 900;
	margin-top: 120px;
	margin-bottom: 0px;

	@media (max-width: 991px) {
		font-size: 2.25rem;
	}

	@media (max-width: 768px) {
		font-size: 1.75rem;
	}

	@media (max-width: 575px) {
		font-size: 2.25rem;
		text-align: center;
	}
`;

export const SubTitle = styled.h2`
	color: #a9a7ad;
	font-weight: 600;
	font-size: 18px;
	line-height: 15px;
	margin-bottom: 0px;

	@media (max-width: 1199px) {
		line-height: 22px;
	}

	@media (max-width: 991px) {
		font-size: 17px;
	}

	@media (max-width: 768px) {
		font-size: 16px;
		line-height: 19px;
	}

	@media (max-width: 575px) {
		text-align: center;
	}

	@media (max-width: 340px) {
		line-height: 10px;
	}

	@media (max-width: 320px) {
		line-height: 18px;
	}
`;

export const SubtitleSpan = styled.span`
	color: #6345ba;
	margin: 0px 5px;
	font-size: 40px;
	transform: translateY(-3px);
	display: inline-block;
`;

export const Button = styled.button`
	@keyframes float {
		0% {
			transform: translateY(0px) scale(2.5, 1.3);
		}
		50% {
			transform: translateY(-30px) scale(2.5, 1.3);
		}
		100% {
			transform: translateY(0px) scale(2.5, 1.3);
		}
	}

	margin: 65px auto 0 auto;
	display: table;
	padding: 2px 5px;
	background: transparent;
	border: none;
	color: #6345ba;
	transform: scale(2.5, 1.3);
	animation: float 2s ease-in-out infinite;
`;

export const DivAnim = styled.div`
	@media (max-width: 575px) {
		height: 100px;
	}
`;

export const DivAnim0 = styled.div`
	@keyframes float0 {
		0% {
			transform: rotate(0deg) translateX(0px) rotate(0deg);
		}
		50% {
			transform: rotate(360deg) translateX(80px) rotate(-360deg);
			background-color: #a9a7ad;
		}
		100% {
			transform: rotate(360deg) translateX(0px) scale(1, 1) rotate(-360deg);
			background-color: #6345ba;
		}
	}

	height: 20px;
	width: 20px;
	background-color: #6345ba;
	position: absolute;
	left: 50%;
	top: 65%;
	animation: float0 3s ease-in-out infinite;
	animation-delay: 0.2s;
	border-radius: 100%;

	@media (max-width: 575px) {
		top: 85%;
		left: 47%;
	}
`;

export const DivAnim1 = styled.div`
	@keyframes float1 {
		0% {
			transform: rotate(0deg) translateX(0px) rotate(0deg);
		}
		50% {
			transform: rotate(360deg) translateX(80px) rotate(-360deg);
		}
		100% {
			transform: rotate(360deg) translateX(0px) scale(1, 1) rotate(-360deg);
		}
	}

	height: 20px;
	width: 20px;
	background-color: #6345ba;
	position: absolute;
	left: 50%;
	top: 65%;
	animation: float1 3s ease-in-out infinite;
	animation-delay: 0.9s;
	border-radius: 100%;

	@media (max-width: 575px) {
		top: 85%;
		left: 47%;
	}
`;

export const DivAnim2 = styled.div`
	@keyframes float2 {
		0% {
			transform: rotate(0deg) translateX(0px) rotate(0deg);
		}
		50% {
			transform: rotate(360deg) translateX(80px) rotate(-360deg);
			background-color: #9d45ba;
		}
		100% {
			transform: rotate(360deg) translateX(0px) rotate(-360deg);
			background-color: #6345ba;
		}
	}

	height: 20px;
	width: 20px;
	background-color: #6345ba;
	position: absolute;
	left: 50%;
	top: 65%;
	animation: float2 3s ease-in-out infinite;
	animation-delay: 1.6s;
	border-radius: 100%;

	@media (max-width: 575px) {
		top: 85%;
		left: 47%;
	}
`;

export const DivAnim3 = styled.div`
	@keyframes float3 {
		0% {
			transform: rotate(0deg) translateX(0px) rotate(0deg);
		}
		50% {
			transform: rotate(360deg) translateX(80px) rotate(-360deg);
			background-color: #4562ba;
		}
		100% {
			transform: rotate(360deg) translateX(0px) rotate(-360deg);
			background-color: #6345ba;
		}
	}

	height: 20px;
	width: 20px;
	background-color: #6345ba;
	position: absolute;
	left: 50%;
	top: 65%;
	animation: float3 3s ease-in-out infinite;
	animation-delay: 2.3s;
	border-radius: 100%;

	@media (max-width: 575px) {
		top: 85%;
		left: 47%;
	}
`;

// #############################
// ###### WORK EXPERIENCE ######
// #############################

export const WorkExperienceSection = styled.section`
	padding: 40px 0px;
`;

export const WorkExperienceH3 = styled.h3`
	color: #6345ba;
	font-size: 16px;
	font-weight: 900;
	margin: 20px auto;
	display: table;
	text-align: center;

	@media (max-width: 575px) {
		font-size: 16px;
	}

	@media (max-width: 440px) {
		font-size: 15px;
	}
`;

export const Company = styled.div`
	@media (max-width: 575px) {
		margin: 0px auto 20px auto;
	}
`;

export const Image = styled.img`
	box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.3);
	border-radius: 100px;
	height: 200px;
	width: 200px;
	border: 2px solid #6345ba;
	display: table;
	margin: 0 auto;
	transition: all 0.4s ease-in-out;

	:hover {
	}

	:hover {
		border: 2px solid #9d45ba;
		transform: scale(1.04, 1.04);
		box-shadow: 0px 6px 7px rgba(0, 0, 0, 0.3);
	}

	@media (max-width: 991px) {
		height: 170px;
		width: 170px;
	}

	@media (max-width: 768px) {
		height: 150px;
		width: 150px;
	}

	@media (max-width: 575px) {
		height: 170px;
		width: 170px;
	}

	@media (max-width: 440px) {
		height: 150px;
		width: 150px;
	}

	@media (max-width: 397px) {
		height: 130px;
		width: 130px;
	}
`;

export const CompanyB = styled.b`
	margin: 10px auto 5px auto;
	display: table;
	color: #6345ba;
	text-transform: uppercase;
	text-align: center;

	@media (max-width: 768px) {
		font-size: 14px;
	}

	@media (max-width: 575px) {
		font-size: 16px;
	}

	@media (max-width: 440px) {
		font-size: 15px;
	}

	@media (max-width: 397px) {
		font-size: 14px;
	}
`;

export const CompanyH6 = styled.h6`
	margin: 5px auto;
	display: table;
	color: #a9a7ad;
	text-transform: uppercase;
	text-align: center;

	@media (max-width: 768px) {
		font-size: 14px;
	}

	@media (max-width: 575px) {
		font-size: 16px;
	}

	@media (max-width: 440px) {
		font-size: 15px;
	}

	@media (max-width: 397px) {
		font-size: 14px;
	}
`;

// ##################
// ##### SKILLS #####
// ##################

export const SkillsContainer = styled.div`
	background: #6345ba;
	transform: rotate(2deg);
	padding: 20px 30px;
	box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.3);

	@media (max-width: 575px) {
		transform: rotate(0deg);
	}
`;

export const SkillsH3 = styled.h3`
	text-align: center;
	color: #fff;
	font-size: 16px;
	font-weight: 900;
`;

export const SkillsH5 = styled.h5`
	text-align: center;
	color: #fff;
	font-size: 15px;
	font-weight: 900;
`;

export const SkillsH6 = styled.h5`
	text-align: center;
	color: #fff;
	font-size: 14px;
`;

export const SkillsUl = styled.ul`
	display: table;
	margin: 0 auto;
`;

export const SkillsDevOpsUl = styled.ul`
	display: table;
	margin: 0 auto;
`;

export const SkillsLi = styled.li`
	display: inline-block;
	margin: 12px;
	color: #fff;
`;

export const SkillsImg = styled.img`
	height: 48px;

	@media (max-width: 526px) {
		height: 44px;
	}

	@media (max-width: 446px) {
		height: 40px;
	}

	@media (max-width: 286px) {
		height: 36px;
	}
`;

// ######################
// ##### PROTIFOLIO #####
// ######################

export const PortifolioH3 = styled.h3`
	color: #6345ba;
	font-size: 16px;
	font-weight: 900;
	margin: 30px auto 0 auto;
	display: table;
	text-align: center;

	@media (max-width: 575px) {
		font-size: 16px;
	}

	@media (max-width: 440px) {
		font-size: 15px;
	}
`;

export const PortifolioColumnLeft = styled.div`
	overflow: hidden;
	padding-right: 0px;
`;

export const PortifolioColumnRight = styled.div`
	overflow: hidden;
	padding-left: 0px;
`;

export const PortifolioDiv = styled.div`
	width: 100%;
	height: 400px;
	// background-color: #6345ba;
	box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.3);
	margin: 15px 0;
	overflow: hidden;

	@media (max-width: 1199px) {
		height: 380px;
	}

	@media (max-width: 991px) {
		height: 320px;
	}

	@media (max-width: 991px) {
		height: 250px;
	}

	@media (max-width: 440px) {
		height: 200px;
	}

	@media (max-width: 320px) {
		height: 170px;
	}
`;

export const PortifolioImg = styled.img`
	width: 100%;
	transition: all 0.2s ease-in-out;

	:hover {
		transform: scale(1.1, 1.1);
	}
`;

// ##################
// ###### Blog ######
// ##################

export const BlogH3 = styled.h3`
	color: #6345ba;
	font-size: 16px;
	font-weight: 900;
	margin: 20px auto 5px auto;
	display: table;
	text-align: center;

	@media (max-width: 575px) {
		font-size: 16px;
	}

	@media (max-width: 440px) {
		font-size: 15px;
	}
`;

export const BlogContainer = styled.div`
	overflow: scroll;
	border: 1px solid #6345ba;
	height: 300px;
	max-width: 700px;
	display: block;
	margin: 0 auto;
	box-shadow: inset 0px 0px 15px rgba(0, 0, 0, 0.3);

	::-webkit-scrollbar {
		height: 0px;
	}

	::-webkit-scrollbar-track {
		background: transparent;
	}

	::-webkit-scrollbar-thumb {
		background: #6345ba;
		width: 3px;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #9d45ba;
	}
`;

// #######################
// ###### Blog Post ######
// #######################

export const BlogPostUl = styled.ul`
	overflow: scroll;
	margin: 15px 30px;

	::-webkit-scrollbar {
		display: none;
	}

	::-webkit-scrollbar-track {
		display: none;
	}

	::-webkit-scrollbar-thumb {
		display: none;
	}

	::-webkit-scrollbar-thumb:hover {
		display: none;
	}
`;

export const BlogPostLi = styled.li`
	box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.3);
	border: 1px solid #6345ba;
	margin: 15px 0;
	background: #fff;
`;
