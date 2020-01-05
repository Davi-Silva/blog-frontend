/* eslint-disable no-tabs */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { opacity, rotate } from './animations';


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

export const AuthorPictureLink = styled(Link)`
	&:hover {
		text-decoration: none;
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
`;
