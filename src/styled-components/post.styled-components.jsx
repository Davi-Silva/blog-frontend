/* eslint-disable no-tabs */
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import { opacity } from './animations';

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
`;

export const Title = styled.h1`
	color: #333;
	font-size: 30px;
	font-weight: 700;
	text-align: center;
	letter-spacing: 1px;
	margin: 30px 0px;
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

export const Tags = styled.p`
	font-size: 14px;
`;

export const LoadingTags = styled.p`
	font-size: 14px;
	animation: ${opacity} 2s ease-in-out infinite;
`;

export const RelatedPost = styled(Link)`
	text-decoration: none;
	 &:hover {
		 text-decoration: none;
	 }
`;