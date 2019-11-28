/* eslint-disable no-tabs */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterDiv = styled.footer`
    background: #fff;
    padding-top: 25px;
    margin-top: 10px;
	&::before {
		content: '';
		width: 15%;
		height: 1px;
		background: #ddd;
		display: table;
		margin: 20px auto 57px auto;
		position: relative;
	}
`;

export const P = styled.p`
	color: #a9a7ad;
	margin: 15px 0px 3px 0px;
	text-align: center;
	@media (max-width: 440px) {
		font-size: 14px;
	}
	@media (max-width: 380px) {
		font-size: 13px;
	}
	@media (max-width: 310px) {
		font-size: 12px;
	}
`;

export const Github = styled(Link)`
	color: #0058e4;
	text-transform: uppercase;
	font-weight: 900;
	:hover {
		text-decoration: none;
	}
`;

export const Header = styled.h6`
	color: #0058e4;
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 1px;
	text-transform: uppercase;
`;

export const Ul = styled.ul`
	list-style: none;
`;

export const Li = styled.li`
	list-style: none;
`;

export const LinkTo = styled(Link)`
	color: #999;
	transition: all .3s ease-in-out;
	font-size: 12px;
	&:hover {
		text-decoration: none;
	}
`;