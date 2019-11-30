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
	@media (max-width: 768px) {
		&::before {
			margin-bottom: 45px;
		}
	}
`;

export const P = styled.p`
	color: #a9a7ad;
	margin: 15px 0px 3px 0px;
	font-size: 12px;
	text-align: center;
	/* text-transform: uppercase; */
	@media (max-width: 440px) {
		font-size: 11px;
	}
	@media (max-width: 380px) {
		font-size: 10px;
	}
	@media (max-width: 310px) {
		font-size: 9px;
	}
`;

export const Github = styled(Link)`
	color: #999;
	font-weight: 900;
	font-size: 13px;
	transition: all .25s ease-in-out;
	:hover {
		text-decoration: none;
		color: #0058e4;
	}
	@media (max-width: 440px) {
		font-size: 12px;
	}
	@media (max-width: 380px) {
		font-size: 11px;
	}
	@media (max-width: 310px) {
		font-size: 10px;
	}
`;

export const Header = styled.h6`
	color: #0058e4;
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 1px;
	text-transform: uppercase;
	@media (max-width: 768px) {
		text-align: center;
		margin-bottom: 0px;
	}
`;

export const Ul = styled.ul`
	list-style: none;
	@media (max-width: 768px) {
		display: table;
		margin: 0 auto 15px auto;
	}
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

export const LinkToPolicies = styled(Link)`
	color: #999;
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 1px;
	transition: all .3s ease-in-out;
	&:hover {
		text-decoration: none;
	}
	@media (max-width: 768px) {
		display: table;
		margin: 5px auto;
	}
`;

export const SocialMediaTitle = styled.h6`
	color: #999;
	font-size: 10px;
	text-transform: uppercase;
	font-weight: 700;
	@media (max-width: 991px) {
		font-size: 9px;
	}
	@media (max-width: 768px) {
		text-align: center;
	}
`;

export const SocialMediaUl = styled.ul`
	margin: 7px 0px;
	@media (max-width: 768px) {
		margin: 7px auto;
		display: table;
	}
`;

export const SocialMediaLi = styled.li`
	display: inline;
	margin: 0px 7px;
`;

export const SocialMediaLink = styled(Link)`
	svg {
		color: #999;
		font-size: 20px;
		transition: all .25s ease-in-out;
		&:hover {
			color: #0058e4;
		}
	}
`;

export const Donate = styled.div`
	color: #999;
	font-size: 12px;
	font-weight: 700;
	letter-spacing: 1px;
	margin-bottom: 3px;
	margin-top: -3px;
	@media (max-width: 768px) {
		font-size: 13px;
		text-align: center;
	}
`;

export const QRCode = styled.img`
	height: 90px;
	width: 90px;
	display: block;
	@media (max-width: 768px) {
		height: 100px;
		width: 100px;
		display: table;
		margin: 0 auto 20px auto;
	}
`;
