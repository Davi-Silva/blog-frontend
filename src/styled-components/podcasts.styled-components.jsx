/* eslint-disable no-tabs */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { rotate } from './animations';

export const Wrapper = styled(Link)`
	margin: 20px auto;
	display: table;
	transition: all 0.2s ease-in-out;
	width: 100%;
	&:hover {
		text-decoration: none;
	}
`;

export const Cover = styled.img`
	height: 120px;
	width: 120px;
	display: table;
	margin: 0 auto;
	border-radius: 10px;
	@media (max-width: 1199px) {
			width: 100px;
			height: 100px;
			border-radius: 9px;
	}
	@media (max-width: 525px) {
			width: 90px;
			height: 90px;
	}
	@media (max-width: 464px) {
			width: 80px;
			height: 80px;
	}
	@media (max-width: 420px) {
			width: 75px;
			height: 75px;
	}
	@media (max-width: 398px) {
			width: 70px;
			height: 70px;
	}
	@media (max-width: 378px) {
			width: 65px;
			height: 65px;
	}
	@media (max-width: 352px) {
			width: 55px;
			height: 55px;
  }
`;

export const Title = styled.div`
	color: #333;
	font-weight: 900;
	font-size: 18px;
	margin-bottom: 0px;
	@media (max-width: 991px) {
		font-size: 17px;
	}
	@media (max-width: 768px) {
		font-size: 16px;
	}
	@media (max-width: 498px) {
		font-size: 16px;
		line-height: 20px;
		margin-top: 2px;
		margin-bottom: 2px;
	}
	@media (max-width: 464px) {
		font-size: 15px;
	}
	@media (max-width: 420px) {
		font-size: 14px;
		line-height: 15px;
	}
	@media (max-width: 398px) {
		font-size: 13px;
		line-height: 13px;
	}
`;

export const UploadedOn = styled.p`
	color: #999;
	margin-bottom: 0px;
	font-size: 13px;
	text-transform: uppercase;
	@media (max-width: 991px) {
		font-size: 12px;
	}
	@media (max-width: 420px) {
		font-size: 11px;
	}
	@media (max-width: 398px) {
		font-size: 10px;
	}
	@media (max-width: 340px) {
		font-size: 9px;
	}
`;

export const Category = styled.b`
	color: #999;
	margin-bottom: 0px;
	float: left;
	font-size: 14px;
	line-height: 24px;
	@media (max-width: 991px) {
		font-size: 13px;
	}
	@media (max-width: 420px) {
		font-size: 12px;
	}
	@media (max-width: 398px) {
		font-size: 11px;
	}
	@media (max-width: 340px) {
		font-size: 10px;
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

export const InfinitePodcastList = styled.ul`
	margin-bottom: 0px;
	div {
		overflow: hidden;
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
	}
`;
