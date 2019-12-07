/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { rotate } from './animations';

export const Card = styled(Link)`
  text-decoration: none;
  margin-bottom: 20px;
  &:hover {
    text-decoration: none;
  }
`;

export const Cover = styled.div`
  border-radius: 6px;
	height: 170px;
	width: 100%;
`;

export const PublishedOn = styled.b`
  color: #333;
  font-size: 12px;
`;

export const Title = styled.h5`
  color: #333;
  font-size: 16px;
  font-weight: 900;
  margin: 0;
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

export const InfinitePostList = styled.ul`
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
	position: sticky;
	top: 60px;
`;
