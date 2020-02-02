/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TopAuthorDiv = styled.div`
	padding: 35px 0;
	margin: 20px 0 0 0;
	background-color: #f2f3f5;
`;

export const Title = styled.h1`
	color: #333;
	font-size: 20px;
	letter-spacing: 1px;
	font-weight: 900;
	display: block;
	text-align: center;
	margin-bottom: 20px;
`;

export const SeeAll = styled(Link)`
	font-size: 16px;
	text-transform: uppercase;
	border-radius: 4px;
	color: #999;
	display: block;
	padding: 5px 10px;
	transform: translateY(-5px);
	font-weight: 900;
	float: right;
	transition: .2s all ease-in-out;
	&:hover {
		background-color: #f2f3f5;
		text-decoration: none;
		color: #999;
	}
	&:active {
		background-color: #e0e0e0;
		color: #0058e4;
	}
`;


export const ProfileLink = styled(Link)`
	text-decoration: none;
	display: table;
	margin: 0 auto;
	transition: all .2s ease-in-out;
	&:hover {
		text-decoration: none;
		border-color: #ffcd2b;
		h2 {
			color: #333;
		}
	}
	@media (max-width: 576px) {
		margin: 0 auto 25px auto;
	}
`;

export const ProfileImage = styled.img`
	height: 110px;
	width: 110px;
	display: table;
	margin: 0 auto;
	border-radius: 60px;
	border: 2px solid #fff;
`;

export const AuthorName = styled.h2`
	color: #333;
	font-size: 16px;
	display: block;
	text-align: center;
	font-weight: 900;
	margin-top: 10px;
`;

export const AuthorNumberOfPosts = styled.h2`
	color: #333;
	font-size: 16px;
	display: block;
	text-align: center;
	margin-top: 10px;
`;
