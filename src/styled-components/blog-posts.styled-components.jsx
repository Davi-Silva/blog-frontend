/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { rotate } from './animations';

export const ColumnLeft = styled.div`
	padding: 0 15px 0 0;
	@media (max-width: 768px) {
		padding: 0 7px 0 15px;
	}
	@media (max-width: 576px) {
		padding: 0 15px 0 15px;
	}
`;

export const ColumnRight = styled.div`
	padding: 0 15px 0 0;
	@media (max-width: 768px) {
		padding: 0 15px 0 7px;
	}
	@media (max-width: 576px) {
		padding: 0 15px 0 15px;
	}
`;

export const BlogTopPost = styled.div`
	width: 100%;
`;

export const BlogToPostMainDiv = styled.div`
	height: 400px;
	width: 100%;
`;

export const Card = styled(Link)`
  text-decoration: none;
  margin-bottom: 20px;
  &:hover {
    text-decoration: none;
  }
`;

export const CardTopMain = styled(Link)`
  text-decoration: none;
  margin-bottom: 20px;
	width: 100%;
	height: 400px;
  &:hover {
    text-decoration: none;
  }
`;

export const Cover = styled.div`
	height: 170px;
	width: 100%;
	@media (max-width: 1199px) {
		height: 130px;
	}
	@media (max-width: 574px) {
		height: 145px;
	}
`;

export const PublishedOn = styled.b`
  color: #333;
  font-size: 12px;
`;

export const Title = styled.h5`
  color: #333;
  font-size: 18px;
	margin: 5px 0;
  font-weight: 900;
`;

export const CategoryDiv = styled.div`
	background: #0058e4;
	padding: 5px 8px;
	top: 136px;
	left: 15px;
	position: absolute;
	@media (max-width: 1199px) {
		top: 96px;
	}
	@media (max-width: 574px) {
		top: 111px;
	}
`;

export const Category = styled.span`
	color: #333;
	text-align: center;
	color: #fff;
	font-weight: 700;
	font-size: 15px;
	@media (max-width: 1199px) {
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

export const PostList = styled.ul`
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

export const ByTagDiv = styled.ul`
	display: block;
	margin: 8px 0;
`;

export const ByTag = styled.b`
	color: #333;
	font-size: 11px;
	margin: 15px 5px 15px 0px;
	font-weight: 900;
	width: 20px;
	text-transform: uppercase;
	letter-spacing: 1px;
`;

export const ByTagName = styled.span`
	color: #999;
	font-size: 13px;
	margin-top: 15px;
	margin-bottom: 15px;
	text-transform: uppercase;
	letter-spacing: 1px;
`;

export const StickyWrapper = styled.div`
	margin-top: 0px;
	position: sticky;
	top: 55px;
`;

export const WrapperAd = styled.div`
	@media (max-width: 768px) {
		margin-bottom: 20px;
	}
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
