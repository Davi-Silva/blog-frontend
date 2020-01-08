/* eslint-disable no-tabs */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { opacity } from '../animations';

export const LoadingRelatedPostLabel = styled.b`
	font-size: 14px;
	animation: ${opacity} 2s ease-in-out infinite;
`;

export const RelatedPostList = styled.ul`
	margin-top: 10px;
	margin-bottom: 120px;
	width: 100%;

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
	font-size: 24px;
	/* font-weight: 900; */
	margin: 10px 0;
	overflow: hidden;
	@media (max-width: 991px) {
		display: block!important;
		height: 86px;
    line-height: 29px;
	}
	@media (max-width: 574px) {
		font-size: 16px;
	}
`;

export const AuthorInfoDiv = styled.div`
	@media (max-width: 991px) {
		margin-left: 10px;
	}
	ul {
		li {
			display: block;
			@media (max-width: 991px) {
				display: block!important;
			}
		}
	}
`;

export const Author = styled.ul`
	li {
		display: inline-block!important;
		@media (max-width: 991px) {
			display: inline-block!important;
		}
		img {
			height: 38px;
			width: 38px;
			border-radius: 50px;
			transform: translateY(-8px);
		}
	}
	.author-profile-img {
		@media (max-width: 991px) {
			width: 40px!important;
			display: inline-block!important;
		}
	}
	.author-name {
		margin-left: 7px;
		@media (max-width: 991px) {
			width: 120px!important;
			display: inline-block!important;
		}
		b {
			color: #333;
			font-size: 14px;
		}
		p {
			color: #999;
			font-weight: 900;
			font-size: 12px;
			margin-bottom: 0;
			line-height: 6px;
		}
	}
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


export const RelatedPost = styled(Link)`
	text-decoration: none;
	&:hover {
		text-decoration: none;
	}
	ul {
		height: 160px;
		margin-bottom: 15px;
		.info-div {
			@media (max-width: 991px) {
				width: 77%;
				transform: translateY(-13px);
			}
			@media (max-width: 768px) {
				width: 68%;
			}
			.li-info {
				width: 100%;
				transform: translateY(-10px);
			}
		}
		li {
			list-style: none;
			@media (max-width: 991px) {
				display: inline-block;
				width: 160px;
			}
			div {
				width: unset;
				height: 200px!important;
				@media (max-width: 991px) {
					height: 160px!important;
				}
				@media (max-width: 768px) {
					margin-bottom: 4px;
				}
				@media (max-width: 574px) {
					height: 180px!important;
					margin-bottom: 10px;
				}
			}

		}
	}
`;

export const ColumnLeft = styled.div`
	padding: 0 7px 0 15px;
	@media (max-width: 768px) {
		padding: 0;
	}
`;


export const ColumnCenter = styled.div`
	padding: 0 7px;
	@media (max-width: 768px) {
		padding: 0;
	}
`;

export const ColumnRight = styled.div`
	padding: 0 15px 0 7px;
	@media (max-width: 768px) {
		padding: 0;
	}
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
