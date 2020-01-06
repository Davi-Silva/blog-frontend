/* eslint-disable no-tabs */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { opacity, rotate } from './animations';

export const Wrapper = styled.div`
	margin: 20px auto 0px auto;
`;

export const Cover = styled.img`
	width: 100%;
	border-bottom-left-radius: 1px;
	border-bottom-right-radius: 1px;
`;

export const UploadedOn = styled.p`
	color: #999;
	margin: 0 0 0 9px;
	font-size: 12px!important;
	font-weight: 700;
`;

export const Title = styled.h1`
	color: #333;
	font-size: 28px;
	font-weight: 700;
	/* text-align: center; */
	letter-spacing: 1px;
	margin: 15px 0px 30px 0px;
	@media (max-width: 1199px) {
		font-size: 27px;
	}
	@media (max-width: 991px) {
		margin: 5px 0px;
		font-size: 24px;
	}
	@media (max-width: 768px) {
		font-size: 23px;
	}
	@media (max-width: 400px) {
		margin: 5px 0px;
	}
	@media (max-width: 300px) {
		margin: 3px 0px;
	}
`;

export const TimeToReadCategoryUl = styled.ul`
	li {
		list-style: none;
		display: inline-block;
		margin-right: 5px;
	}
`;

export const TimeToRead = styled.span`
	padding: 5px 13px;
	background: #eaeaea;
	border-radius: 16px;
	color: #333;
	display: table;
	font-size: 14px;
	@media (max-width: 578px) {
		font-size: 13px;
	}
`;

export const Category = styled(Link)`
	padding: 5px 13px;
	background: #0058e4;
	border-radius: 16px;
	color: #fff;
	display: table;
	font-size: 14px;
	&:hover {
		color: #fff;
		text-decoration: none;
	}
	@media (max-width: 578px) {
		font-size: 13px;
	}
`;


export const Author = styled.div`
	margin: 8px 0;
	ul {
		width: 100%;
		margin-bottom: 0px;
		li {
			list-style: none;
			display: inline-block;
			div {
				transform: translateY(12px);
				@media (max-width: 991px) {
					transform: translateY(10px);
				}
			}
			img {
				height: 50px;
				width: 50px;
				border-radius: 50px;
				@media (max-width: 991px) {
					height: 45px;
					width: 45px;
				}
			}
			span {
				color: #333;
				font-weight: 700;
				margin-left: 10px;

				@media (max-width: 991px) {
					font-size: 13px;
				}
			}
		}
	}
	@media (max-width: 991px) {
		margin: 10px 0 14px 0;
	}
`;

export const FollowButton = styled.button`
	background-color: #fff;
	border: 1px solid #00b170;
	border-radius: 3px;
	padding: 1px 5px;
	color: #00b170;
	font-size: 12px;
	transform: translateY(-3px);
	transition: .2s all ease-in-out;
	&:focus {
		outline: none;
	}
	&:hover {
		color: #fff;
		background-color: #00b170;
	}
	@media (max-width: 991px) {
		font-size: 10px;
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
	pre {
		background: #444;
		border-radius: 5px;
		padding: 7px 15px;
		code {
			color: #fff;
			font-size: 16px;
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
	padding: 5px 10px;
	font-weight: 500;
	margin-right: 10px;
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
	margin: 10px 0 0 15px;
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

export const Fluid = styled.div`
	padding: 0;
	@media (max-width: 768px) {
		padding: 0 15px;
	}
`;

export const ColumnLeft = styled.div`
	padding: 0 2px 0 15px;
	@media (max-width: 768px) {
		padding: 0 2px 0 0;
	}
	@media (max-width: 576px) {
		padding: 0;
	}
`;

export const ColumnCenterLeft = styled.div`
	padding: 0 2px;
	@media (max-width: 768px) {
		padding: 0 0 0 2px;
	}
	@media (max-width: 576px) {
		padding: 0;
	}
`;

export const ColumnCenterRight = styled.div`
	padding: 0 2px;
	@media (max-width: 768px) {
		padding: 0 2px 0 0;
	}
	@media (max-width: 576px) {
		padding: 0;
	}
`;

export const ColumnRight = styled.div`
	padding: 0 15px 0 2px;
	@media (max-width: 768px) {
		padding: 0 0 0 2px;
	}
	@media (max-width: 576px) {
		padding: 0;
	}
`;

export const RelatedPost = styled(Link)`
	text-decoration: none;
	 &:hover {
		 text-decoration: none;
	 }
	 div {
		width: unset;
		height: 125px!important;
		@media (max-width: 768px) {
			margin-bottom: 4px;
		}
		@media (max-width: 574px) {
			height: 145px!important;
			margin-bottom: 10px;
		}
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
	color: #fff;
	font-size: 17px;
	font-weight: 900;
	margin: 5px 0;
	position: absolute;
	top: 50px;
	width: 260px;
	left: 5px;
	overflow: hidden;
	@media (max-width: 574px) {
		font-size: 16px;
	}
	/* @media (max-width: 480px) {
		font-size: 13px;
	} */
`;


export const RelatedPostBackgroundWrapper = styled.div`
	background: linear-gradient(0deg, rgba(0,0,0,0.8491771708683473) 0%, rgba(0,212,255,0) 100%);
	height: 170px;
	width: 100%;
	@media (max-width: 1199px) {
		height: 140px;
	}
	@media (max-width: 991px) {
		height: 105px;
	}
	@media (max-width: 769px) {
		height: 135px;
	}
	@media (max-width: 574px) {
		height: 145px;
	}
`;

export const StickyWrapper = styled.div`
	margin-top: 33px;
	position: sticky;
	top: 55px;
`;

export const AsideDiv = styled.div`
	width: 100%;
	height: 50%;
	@media (max-width: 768px) {
		height: 480px;
	}
`;
