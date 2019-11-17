/* eslint-disable no-tabs */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const A = styled(Link)`
	color: #0058e4;
	text-transform: uppercase;
	font-weight: 900;
	:hover {
		text-decoration: none;
	}
`;
