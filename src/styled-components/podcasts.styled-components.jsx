/* eslint-disable no-tabs */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { rotate } from './animations';

export const AvailableOn = styled.div`
	display: table;
	margin: 15px auto 0 auto;
	h6 {
		font-weight: 900;
		text-align: center;
		@media (max-width: 991px) {
			font-size: 14px;
		}
		@media (max-width: 590px) {
			font-size: 13px;
		}
	}
	ul {
		display: table;
		margin: 0 auto;
		li {
			display: inline-block;
			margin: 0 7px;
			img {
				height: 40px;
				width: 40px;
				@media (max-width: 991px) {
					height: 37px;
					width: 37px;
				}
				@media (max-width: 768px) {
					height: 35px;
					width: 35px;
				}
				@media (max-width: 590px) {
					height: 32px;
					width: 32px;
				}
			}
		}
	}
`;

export const Logo = styled.img`
	float: right;
	@media (max-width: 578px) {
		display: table;
		margin: 0 auto;
		float: unset;
	}
`;

export const Host = styled.div`
	transform: translateY(20px);
	padding: 10px 10px 10px 3px;
	border-radius: 4px;
	border: 1px solid #fff;
	@media (max-width: 578px) {
		display: table;
		margin: 0 auto;
	}
	a {
		color: #333;
		&:hover {
			text-decoration: none;
			color: #333;
		}
		ul {
			li {
				list-style: none;
				display: inline-block;
				img {
					height: 70px;
					width: 70px;
					border-radius: 50px;
				}
				p {
					margin-bottom: 0;
					font-size: 15px;
					font-weight: 900;
				}
				.twitter {
					color: #0058e4;
					font-size: 13px;
				}
			}
			.hostInfo {
				transform: translateY(17px);
				margin-left: 10px;
			}
		}
		.desc {
			max-width: 200px;
			font-size: 12px;
			margin-bottom: 0;
		}
	}
`;

export const Wrapper = styled(Link)`
	margin: 0 auto 20px auto;
	display: table;
	transition: all 0.2s ease-in-out;
	border-radius: 4px;
	width: 99%;
	&:hover {
		text-decoration: none;
		/* box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25); */
	}
	@media (max-width: 768px) {
		margin-bottom: 12px;
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
	@media (max-width: 424px) {
			width: 100px;
			height: 100px;
	}
`;

export const InfoDiv = styled.div`
	position: absolute;
	top: 0px;
`;

export const Ul = styled.ul`
	height: 100%;
`;

export const Title = styled.h4`
	color: #333;
	font-weight: 900;
	font-size: 18px;
	margin-bottom: 0px;
	max-width: 245px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
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
		line-height: 17px;
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

export const NoContentDiv = styled.div`
	margin: 35px auto;
	display: table;
`;

export const NoContentImg = styled.img`
	height: 90px;
	width: 90px;
	margin: 5px auto;
	display: table;
`;

export const NoContentP = styled.p`
	color: #999;
	font-size: 16px;
	margin: 0 auto;
	display: table;
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

export const StickyWrapper = styled.div`
	position: sticky;
	top: 15px;
`;
