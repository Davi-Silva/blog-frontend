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

export const Cover = styled.img`
  border-radius: 10px;
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