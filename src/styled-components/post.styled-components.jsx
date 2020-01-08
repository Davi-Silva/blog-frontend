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
	line-height: 10px;
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
	padding: 6px 13px;
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


export const LoadingTags = styled.p`
	font-size: 14px;
	animation: ${opacity} 2s ease-in-out infinite;
`;

export const Fluid = styled.div`
	padding: 0;
	margin-top: 60px;
	@media (max-width: 768px) {
		padding: 0 15px;
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
	top: 55px;
`;


export const AsideDiv = styled.div`
	width: 100%;
	height: 50%;
	@media (max-width: 768px) {
		height: 480px;
	}
	div {
		.last {
			margin-bottom: 60px;
		}
	}
`;
