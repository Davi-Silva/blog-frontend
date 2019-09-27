import React from "react";
import { Link } from "react-router-dom";

import {
	PortifolioH3,
	PortifolioColumnLeft,
	PortifolioColumnRight,
	PortifolioDiv,
	PortifolioImg
} from "../../../styled-components/about.styled-components";

import canadaecigs from "../../../../static/img/canadaecigs.gif";

function Protifolio() {
	return (
		<React.Fragment>
			<section className="container">
				<div className="row">
					<div className="col-12">
						<header>
							<PortifolioH3>PORTIFOLIO</PortifolioH3>
						</header>
						<PortifolioDiv>
							<div className="row">
								<PortifolioColumnLeft className="col-lg-6 col-md-6 col-sm-6 col-12">
									<Link to="//www.canadaecigs.com" target="_blank">
										<PortifolioImg src={canadaecigs}></PortifolioImg>
									</Link>
								</PortifolioColumnLeft>
								<PortifolioColumnRight className="col-lg-6 col-md-6 col-sm-6 col-12">
									davicunhasilva.me
								</PortifolioColumnRight>
							</div>
						</PortifolioDiv>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}

export default Protifolio;
