import styled from "styled-components";

export const Header = styled.h5`
	color: #6345ba;
`;

export const Input = styled.input`
	border: 1px solid #6345ba;
	width: 100%;
	padding: 5px 10px;
	margin: 3px 0px;
	color: #a9a7ad;
	:focus {
		outline: #9d45ba;
	}
	::placeholder {
		color: #a9a7ad;
	}
`;

export const Button = styled.button`
	background-color: #6345ba;
	border: none;
	border-radius: 3px;
	color: #fff;
	width: 100%;
	padding: 8px 0px;
	transition: all 0.3s ease-in-out;
	font-size: 14px;

	:hover {
		background-color: #45317f;
	}
`;

export const P = styled.p`
	font-size: 14px;
`;

export const A = styled.a`
	color: #6345ba;
	:hover {
		color: #a9a7ad;
	}
`;

export const Alert = styled.div`
	display: none;
`;
