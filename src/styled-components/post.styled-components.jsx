/* eslint-disable no-tabs */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { opacity, rotate } from './animations';

export const Wrapper = styled.div`
	margin: 20px auto 0px auto;
`;

export const Cover = styled.img`
	width: 100%;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
`;

export const UploadedOn = styled.p`
	color: #999;
	margin: 10px 0px;
	font-size: 16px;
	@media (max-width: 1199px) {
		margin: 7px 0px;
	}
	@media (max-width: 991px) {
		margin: 5px 0px;
	}
	@media (max-width: 768px) {
		font-size: 14px;
	}
	@media (max-width: 400px) {
		font-size: 13px;
		margin: 5px 0px;
	}
	@media (max-width: 300px) {
		font-size: 12px;
		margin: 3px 0px;
	}
`;

export const Title = styled.h1`
	color: #333;
	font-size: 26px;
	font-weight: 700;
	/* text-align: center; */
	letter-spacing: 1px;
	margin: 30px 0px;
	@media (max-width: 1199px) {
		font-size: 25px;
	}
	@media (max-width: 991px) {
		margin: 5px 0px;
	}
	@media (max-width: 768px) {
		font-size: 14px;
	}
	@media (max-width: 400px) {
		font-size: 13px;
		margin: 5px 0px;
	}
	@media (max-width: 300px) {
		font-size: 12px;
		margin: 3px 0px;
	}
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

export const Content = styled.div`
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
`;


export const LoadingAudio = styled.p`
	color: #999;
	font-size: 14px;
	animation: ${opacity} 2s ease-in-out infinite;
`;

export const TagsUl = styled.ul`
	font-size: 14px;
`;

export const TagLi = styled.li`
	display: inline;
`;

export const Tag = styled(Link)`
	border: 1px solid #0058e4;
	background: #fff;
	color: #333;
	border-radius: 1px;
	box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
	display: inline;
	padding: 5px 10px;
	font-weight: 500;
	margin: 0px 5px;
	&:hover {
		text-decoration: none;
		color: #333;
	}
`;

export const LoadingTags = styled.p`
	font-size: 14px;
	animation: ${opacity} 2s ease-in-out infinite;
`;

export const RelatedPostLabel = styled.b`
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
		}

		::-webkit-scrollbar-thumb:hover {
			background: #0058e4;
		}
	}
`;

export const LoadingRelatedPostLabel = styled.b`
	font-size: 14px;
	animation: ${opacity} 2s ease-in-out infinite;
`;

export const RelatedPost = styled(Link)`
	text-decoration: none;
	 &:hover {
		 text-decoration: none;
	 }
	 img {
		width: unset;
		height: 125px;
		@media (max-width: 480px) {
			width: unset;
			height: 100px;
		}
	 }
	 h6 {
		 font-size: 14px;
	 }
`;

export const AllContent = styled.div`

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

export const RelatedPostList = styled.ul`
	margin-top: 10px;
	height: 140px;
	width: 100%;
	transform: translate(-5px);
	overflow-y: scroll;
	overflow-y: hidden;
	white-space: nowrap;
	@media (max-width: 480px) {
		height: 135px;
	}
`;

export const RelatedPostLi = styled.li`
	list-style: none;
	display: inline-block;
	width: 180px!important;
	margin: 0 5px;
	width: unset;
	height: 140px;
	@media (max-width: 480px) {
		margin: 0 3px!important;
		height: 120px;
		width: 150px!important;
	}
`;

export const RelatedPostH6 = styled.h6`
	color: #333;
	font-size: 20px;
	font-weight: 900;
	margin: 5px 0;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	@media (max-width: 480px) {
		font-size: 13px;
	}
`;
