/* eslint-disable no-tabs */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
	margin: 20px auto 0px auto;
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
`;

export const UploadedOn = styled.p`
	color: #999;
	margin: 10px 0px;
`;

export const Title = styled.h1`
	color: #333;
	font-size: 26px;
	font-weight: 700;
	letter-spacing: 1px;
	margin: 10px 0px;
`;

export const Category = styled.p`
	color: #999;
	margin: 10px 0px;
`;

export const Description = styled.div`
	color: #999;
	font-size: 16px;
	margin: 10px 0px;
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
