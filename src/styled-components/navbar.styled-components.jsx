import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkA = styled(Link)`
	color: #999;
	text-decoration: none;
	font-weight: 900;
	font-size: 13px;
	text-transform: uppercase;
	letter-spacing: 2px;
	transition: all 0.2s ease-in-out;
	:hover {
		color: #0058e4;
	}
`;

export const Brand = styled(Link)`
	color: #0058e4;
	font-weight: 900;
	text-transform: uppercase;
	letter-spacing: 1px;
`;

export const ToggleButton = styled.button`
	color: #0058e4;
`;
