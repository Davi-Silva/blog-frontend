/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const AdSquare = styled.div`
	background-color: #fff;
	box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
	border: 1px solid rgba(0, 0, 0, 0.15);
	width: 100%;
	height: 200px;
	margin-bottom: 20px;
	/* position: fixed; */
	@media (max-width: 768px) {
		min-height: 200px;
		max-height: 400px;
	}
`;
