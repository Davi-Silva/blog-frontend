/* eslint-disable no-tabs */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
	margin: 20px auto 0px auto;
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.2);
`;

export const UploadedOn = styled.p`
	color: #999;
	margin: 10px 25px;
`;

export const Title = styled.h1`
	color: #0058e4;
	text-transform: uppercase;
	font-size: 26px;
	font-weight: 700;
	letter-spacing: 1px;
	margin: 10px 25px;
`;

export const Description = styled.div`
	color: #999;
	font-size: 18px;
	margin: 10px 25px;
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
