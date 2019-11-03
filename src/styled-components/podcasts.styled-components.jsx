import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Wrapper = styled(Link)`
	border-radius: 8px;
	box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);
	margin: 20px auto;
	display: block;
	overflow: hidden;
	padding-bottom: 10px;
	transition: all 0.2s ease-in-out;
	&:hover {
		text-decoration: none;
		box-shadow: 0px 3px 13px rgba(0, 0, 0, 0.4);
	}
`;

export const Cover = styled.div`
	height: 150px;
	width: 100%;
	background-position: center !important;
	background-size: cover !important;
	display: block;
`;

export const Description = styled.div`
	color: #999;
	text-align: justify;
`;

export const UploadedOn = styled.p`
	color: #999;
	margin-bottom: 0px;
`;

export const Category = styled.b`
	color: #999;
	margin-bottom: 0px;
	float: left;
	font-size: 14px;
	line-height: 24px;
`;
