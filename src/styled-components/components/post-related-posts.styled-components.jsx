/* eslint-disable no-tabs */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { opacity } from '../animations';

export const Wrapper = styled.div`
	@media( max-width: 991px) {
		margin-bottom: -50px
	}
`;

export const LoadingRelatedPostLabel = styled.b`
	font-size: 14px;
	animation: ${opacity} 2s ease-in-out infinite;
`;

export const RelatedPostList = styled.ul`
	margin-top: 10px;
	margin-bottom: 120px;
	width: 100%;
	@media (max-width: 991px) {
		margin-bottom: 50px;
	}
`;

export const RelatedPost = styled(Link)`
	text-decoration: none;
	&:hover {
		text-decoration: none;
	}
	ul {
		height: 160px;
		margin-bottom: 16px;
		@media (max-width: 489px) {
			margin-bottom: 20px;
			height: 150px;
		}
		@media (max-width: 439px) {
			margin-bottom: 20px;
			height: 140px;
		}
		@media (max-width: 431px) {
			margin-bottom: 20px;
			height: 130px;
		}
		@media (max-width: 402px) {
			margin-bottom: 20px;
			height: 120px;
		}
		@media (max-width: 375px) {
			margin-bottom: 20px;
			height: 110px;
		}
		@media (max-width: 347px) {
			margin-bottom: 20px;
			height: 100px;
		}
		@media (max-width: 315px) {
			margin-bottom: 20px;
			height: 90px;
		}
		@media (max-width: 315px) {
			margin-bottom: 7px;
			height: 90px;
		}
		.info-div {
			@media (max-width: 991px) {
				width: 77%;
				transform: translateY(-13px);
			}
			@media (max-width: 768px) {
				width: 68%;
			}
			@media (max-width: 575px) {
				width: 70%;
				transform: translateY(-21px);
			}
			@media (max-width: 567px) {
				width: 65%;
			}
			@media (max-width: 489px) {
				width: 60%;
				transform: translateY(-12px);
			}
			@media (max-width: 431px) {
				width: 65%;
			}
			@media (max-width: 402px) {
				transform: translateY(-12px);
			}
			@media (max-width: 375px) {
				width: 65%!important;
			}
			.li-info {
				width: 100%;
				transform: translateY(-10px);
				@media (max-width: 402px) {
					width: 100%;
				}
				@media (max-width: 375px) {
					width: 100%!important;
				}
			}
		}
		li {
			list-style: none;
			@media (max-width: 991px) {
				display: inline-block;
				width: 160px;
			}
			@media (max-width: 439px) {
				width: 140px;
			}
			@media (max-width: 431px) {
				width: 130px;
			}
			@media (max-width: 402px) {
				width: 120px;
			}
			@media (max-width: 373px) {
				width: 110px!important;
			}
			@media (max-width: 347px) {
				width: 100px!important;
			}
			@media (max-width: 315px) {
				height: 90px!important;
				width: 90px!important;
				transform: translateY(-41px);
			}
			@media (max-width: 288px) {
				height: 80px!important;
				width: 80px!important;
			}
			.cover {
				width: unset;
				height: 200px!important;
				@media (max-width: 991px) {
					height: 160px!important;
					width: 160px!important;
				}
				@media (max-width: 768px) {
					margin-bottom: 4px;
				}
				@media (max-width: 574px) {
					height: 158px!important;
					width: 158px!important;
					margin-bottom: 10px;
				}
				@media (max-width: 489px) {
					height: 150px!important;
					width: 150px!important;
					margin-bottom: 5px;
				}
				@media (max-width: 439px) {
					height: 140px!important;
					width: 140px!important;
				}
				@media (max-width: 431px) {
					height: 130px!important;
					width: 130px!important;
				}
				@media (max-width: 404px) {
					height: 120px!important;
					width: 120px!important;
				}
				@media (max-width: 373px) {
					height: 110px!important;
					width: 110px!important;
				}
				@media (max-width: 347px) {
					height: 100px!important;
					width: 100px!important;
				}
				@media (max-width: 315px) {
					height: 90px!important;
					width: 90px!important;
				}
				@media (max-width: 288px) {
					height: 80px!important;
					width: 80px!important;
				}
			}

		}
	}
`;


export const RelatedPostLi = styled.li`
	list-style: none;
	display: inline-block;
	width: 180px!important;
	margin: 0 5px;
	width: unset;
	height: 140px;
	@media (max-width: 480px) {
		margin: 0 3px!important;
		height: 120px;
		width: 150px!important;
	}
`;

export const RelatedPostH6 = styled.h6`
	color: #333;
	font-size: 24px;
	/* font-weight: 900; */
	margin: 10px 0;
	overflow: hidden;
	@media (max-width: 991px) {
		display: block!important;
		height: 86px;
    line-height: 29px;
	}
	@media (max-width: 574px) {
		font-size: 22px;
	}
	@media (max-width: 489px) {
		font-size: 20px;
	}
	@media (max-width: 439px) {
		font-size: 19px;
	}
	@media (max-width: 431px) {
		font-size: 18px;
    height: 72px;
    line-height: 24px;
	}
	@media (max-width: 403px) {
    height: 63px;
    line-height: 22px;
	}
	@media (max-width: 373px) {
		height: 63px;
    line-height: 21px;
	}
	@media (max-width: 347px) {
		height: 59px;
    line-height: 20px;
    font-size: 16px;
    transform: translateY(10px);
	}
	@media (max-width: 315px) {
		height: 59px;
    line-height: 20px;
    font-size: 16px;
    transform: translateY(3px);
	}
	@media (max-width: 288px) {
    height: 54px;
    line-height: 17px;
    font-size: 15px;
    transform: translateY(3px);
	}
`;

export const AuthorInfoDiv = styled.div`
	@media (max-width: 991px) {
		margin-left: 10px;
	}
	@media (max-width: 489px) {
		margin-left: 0px;
	}
	@media (max-width: 439px) {
		margin-left: 10px;
		height: 137px;
	}
	@media (max-width: 431px) {
		margin-left: 10px;
		height: 130px;
	}
	@media (max-width: 402px) {
		margin-left: 10px;
		height: 137px;
		transform: translateY(4px);
	}
	@media (max-width: 375px) {
		transform: translateY(6px);
	}
	ul {
		li {
			display: block;
			@media (max-width: 991px) {
				display: block!important;
			}
		}
	}
`;

export const Author = styled.ul`
	transform: translateY(10px);
	li {
		display: inline-block!important;
		@media (max-width: 991px) {
			display: inline-block!important;
		}
		img {
			height: 38px;
			width: 38px;
			border-radius: 50px;
			transform: translateY(-8px);
			@media (max-width: 575px) {
				height: 35px;
				width: 35px;
			}
			@media (max-width: 489px) {
				height: 33px;
				width: 33px;
			}
			@media (max-width: 402px) {
				height: 30px;
				width: 30px;
			}
			@media (max-width: 375px) {
				height: 27px;
				width: 27px;
			}
			@media (max-width: 347px) {
				height: 25px;
				width: 25px;
			}
			@media (max-width: 288PX) {
				height: 22px;
				width: 22px;
			}
		}
	}
	.author-profile-img {
		@media (max-width: 991px) {
			width: 40px!important;
			display: inline-block!important;
		}
		@media (max-width: 575px) {
			width: 35px;
		}
		@media (max-width: 489px) {
			width: 33px;
		}
		@media (max-width: 402px) {
			width: 30px!important;
			display: inline-block!important;
		}
	}
	.author-name {
		margin-left: 7px;
		@media (max-width: 991px) {
			width: 120px!important;
			display: inline-block!important;
		}
		@media (max-width: 575px) {
			margin-left: 5px;
		}
		@media (max-width: 489px) {
			width: 5px;
		}
		@media (max-width: 402px) {
			margin-left: 5px;
		}
		@media (max-width: 345px) {
			margin-left: 0px;
		}
		b {
			color: #333;
			font-size: 14px;
			@media (max-width: 402px) {
				font-size: 13px;
			}
			@media (max-width: 345px) {
				font-size: 12px;
			}
			@media (max-width: 288PX) {
				font-size: 11px;
			}
		}
		p {
			color: #999;
			font-weight: 900;
			font-size: 12px;
			margin-bottom: 0;
			line-height: 6px;
			@media (max-width: 402px) {
				margin-bottom: 10px;
				height: 120px;
			}
			@media (max-width: 402px) {
				font-size: 11px;
			}
			@media (max-width: 345px) {
				font-size: 10px;
			}
			@media (max-width: 288PX) {
				font-size: 9px;
			}
		}
	}
`;


export const RelatedPostBackgroundWrapper = styled.div`
	background: linear-gradient(0deg, rgba(0,0,0,0.8491771708683473) 0%, rgba(0,212,255,0) 100%);
	height: 170px;
	width: 100%;
	@media (max-width: 1199px) {
		height: 140px;
	}
	@media (max-width: 991px) {
		height: 105px;
	}
	@media (max-width: 769px) {
		height: 135px;
	}
	@media (max-width: 574px) {
		height: 145px;
	}
`;


export const ColumnLeft = styled.div`
	padding: 0 7px 0 15px;
	@media (max-width: 768px) {
		padding: 0;
	}
`;


export const ColumnCenter = styled.div`
	padding: 0 7px;
	@media (max-width: 768px) {
		padding: 0;
	}
`;

export const ColumnRight = styled.div`
	padding: 0 15px 0 7px;
	@media (max-width: 768px) {
		padding: 0;
	}
`;

export const RelatedPostLabel = styled.b`
	margin: 10px 0 0 15px;
	ul {
		::-webkit-scrollbar {
			height: 5px;
			width: 10px;
		}

		::-webkit-scrollbar-track {
			background: transparent;
		}

		::-webkit-scrollbar-thumb {
			background: #fff;
			border: 1px solid #0058e4;
		}

		::-webkit-scrollbar-thumb:hover {
			background: #0058e4;
		}
	}
`;
