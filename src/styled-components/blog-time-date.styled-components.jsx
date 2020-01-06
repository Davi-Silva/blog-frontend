/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
`;

export const DayMonthYear = styled.span`
	margin: 15px 0;
	color: #333;
	font-size: 20px;
	font-weight: 900;
	float: right;
	@media (max-width: 1199px) {
		font-size: 18px;
	}
	@media (max-width: 991px) {
		font-size: 17px;
		margin: 10px 0;
	}
	@media (max-width: 768px) {
		font-size: 16px;
		margin: 8px 0;
	}
	@media (max-width: 576px) {
		font-size: 15px;
		margin: 8px 0;
	}
`;
