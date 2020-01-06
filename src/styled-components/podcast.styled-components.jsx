/* eslint-disable no-tabs */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { opacity, rotate } from './animations';

export const Wrapper = styled.div`
	margin: 20px auto 0px auto;
	position: sticky;
	top: 30px;
`;

export const Aside = styled.aside`
	margin-top: 20px;
	position: sticky;
	top: 50px;
	@media (max-width: 768px) {
		position: relative!important;
		top: unset;
	}
`;

export const ShareButtonsDiv = styled.div`
	display: table;
	margin: 0 auto;
	ul {
		margin: 10px auto!important;
		display: table;
		li {
			margin: 0px 5px;
		}
	}
`;

export const Cover = styled.img`
	width: 320px;
	height: 320px;
	display: table;
	margin: 0 auto;
	border-radius: 10px;
	
	@media (max-width: 1543px) {
		width: 280px!important;
		height: 280px!important;
	}

	@media (max-width: 1199px) {
		width: 250px!important;
		height: 250px!important;
	}

	@media (max-width: 991px) {
		width: 220px!important;
		height: 220px!important;
	}

	@media (max-width: 870px) {
		width: 200px!important;
		height: 200px!important;
	}

	@media (max-width: 768px) {
		width: 250px!important;
		height: 250px!important;
		display: table;
		margin: 0 auto; 
	}

	@media (max-width: 400px) {
		width: 210px!important;
		height: 210px!important;
		display: table;
		margin: 0 auto; 
	}

	@media (max-width: 330px) {
		width: 180px!important;
		height: 180px!important;
		display: table;
		margin: 0 auto; 
	}

	@media (max-width: 260px) {
		width: 140px!important;
		height: 140px!important;
		display: table;
		margin: 0 auto; 
	}
`;

export const UploadedOn = styled.p`
	color: #999;
	margin: 10px 0px;
`;

export const ExternalEpisodeLabel = styled.b`
	color: #333;
	font-size: 16px;
	margin-bottom: 5px;
`;

export const ExternalEpisodeUl = styled.ul`
	margin-top: 5px;
	margin-bottom: 20px;
	li {
		list-style: none;
		margin-right: 10px;
		display: inline-block;
		@media (max-width: 537px) {
			display: block;
			margin: 0 0 10px 0;
		}
		a {
			&:hover {
				text-decoration: none;
			}
			img {
				height:	45px;
				@media (max-width: 991px) {
					height: 34px;
				}
				@media (max-width: 768px) {
					height: 39px;
				}
			}
		}
	}
`;

export const Title = styled.h1`
	color: #333;
	font-size: 26px;
	font-weight: 700;
	letter-spacing: 1px;
	margin: 10px 0px;
	overflow-wrap: break-word;
`;

export const LoadingTitle = styled.h1`
	color: #333;
	font-size: 26px;
	font-weight: 700;
	letter-spacing: 1px;
	margin: 10px 0px;
	animation: ${opacity} 2s ease-in-out infinite;
`;

export const Category = styled.p`
	color: #999;
	margin: 10px 0px;
`;

export const LoadingCategory = styled.p`
	color: #999;
	margin: 10px 0px;
	animation: ${opacity} 2s ease-in-out infinite;
`;

export const Description = styled.div`
	color: #333;
	font-size: 16px;
	margin: 10px 0px;
	img {
		width: 100%;
		height: unset;
	}
	div {
		img {
			width: 100%;
			height: unset;
		}
	}
	p {
		img {
			width: 100%;
			height: unset;
		}
	}
	a {
		img {
			width: 100%;
			height: unset;
		}
	}
	span {
		img {
			width: 100%;
			height: unset;
		}
	}
	li {
		img {
			width: 100%;
			height: unset;
		}
	}
	ul {
		li {
			img {
				width: 100%;
				height: unset;
			}
			a {
				img {
					width: 100%;
					height: unset;
				}
			}
		}
	}
`;

export const LoadingDescription = styled.div`
	color: #333;
	font-size: 16px;
	margin: 10px 0px;
	animation: ${opacity} 2s ease-in-out infinite;
`;

export const Update = styled(Link)`
	background: #0058e4;
	color: #fff;
	border-radius: 50px;
	height: 65px;
	width: 65px;
	display: table;
	position: relative;
	float: right;
	margin-top: -35px;
	margin-right: 25px;
	border: none;
	z-index: 999999;
	box-shadow: 0px 4px 7px rgba(0, 0, 0, .25);
	transition: all .2s ease-in-out;
	&:hover {
		box-shadow: 0px 6px 7px rgba(0, 0, 0, .25);
		transform: scale(1.1, 1.1);
		color: #fff;
		text-decoration: none;
	}
	&:active {
		transform: scale(0.9, 0.9);
	}
	&:focus {
		outline: none;
	}
	i {
		font-size: 25px;
		line-height: 67px;
		display: table;
		margin: 0 auto;
	}
`;

export const MoreEpisodes = styled(Link)`
	color: #0058e4;
	margin: 15px 0;
	display: block;
`;


export const LoadingAudio = styled.p`
	color: #999;
	font-size: 14px;
	animation: ${opacity} 2s ease-in-out infinite;
`;

export const TagsUl = styled.ul`
	font-size: 14px;
	height: 50px;
	padding-top: 5px;
  white-space: nowrap;
  display: flex;
	width: 100%;
	overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
	margin-bottom: 0;
	::-webkit-scrollbar {
    display: none;
  }
`;

export const TagLi = styled.li`
	display: inline-block;
	scroll-snap-align: start;
`;

export const Tag = styled(Link)`
	padding: 5px 13px;
	background: #eaeaea;
	border-radius: 16px;
	color: #333;
	display: inline;
	font-weight: 500;
	margin-right: 10px;
	font-size: 14px;
	&:hover {
		text-decoration: none;
		color: #333;
	}
`;


export const LoadingTags = styled.p`
	font-size: 14px;
	animation: ${opacity} 2s ease-in-out infinite;
`;

export const RelatedPodcastLabel = styled.b`
	margin: 10px 0;
	ul {
		::-webkit-scrollbar {
			height: 5px;
			width: 10px;
		}

		::-webkit-scrollbar-track {
			background: transparent;
		}

		::-webkit-scrollbar-thumb {
			background: #fff;
			border: 1px solid #0058e4;
			border-radius: 50px;
		}

		::-webkit-scrollbar-thumb:hover {
			background: #0058e4;
		}
	}
`;

export const LoadingRelatedPodcastLabel = styled.b`
font-size: 14px;
	animation: ${opacity} 2s ease-in-out infinite;
`;

export const RelatedPodcast = styled.div`
	text-decoration: none;
	 &:hover {
		 text-decoration: none;
	 }
	 img {
		width: 110px;
		height: 110px;
		@media (max-width: 480px) {
			width: 100px;
			height: 100px;
		}
	 }
	 h6 {
		 font-size: 13px;
	 }
`;

export const RelatedPodcastList = styled.ul`
	margin-top: 10px;
	height: 142px;
	width: 100%;
	transform: translate(-5px);
	overflow-y: scroll;
	overflow-y: hidden;
	white-space: nowrap;
	@media (max-width: 480px) {
		height: 132px;
	}
`;

export const RelatedPodcastLi = styled.li`
	list-style: none;
	display: inline-block;
	margin: 0 5px;
	width: 110px;
	height: 152px;
	@media (max-width: 480px) {
		margin: 0 3px!important;
		width: 100px;
	}
`;

export const RelatedPodcastH6 = styled.h6`
	color: #333;
	font-size: 14px;
	font-weight: 900;
	margin: 5px 0;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	@media (max-width: 480px) {
		font-size: 13px;
	}
`;

export const LoadingAllContent = styled.div`
	width: 100%;
	svg {
		animation: ${rotate} 1s infinite;
		color: #333;
		font-size: 18px;
		display: table;
		margin: 25px auto;
	}
`;

export const StickyWrapper = styled.div`
	margin-top: 33px;
	position: sticky;
	top: 63px;
`;
