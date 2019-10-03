import React, { Component } from "react";

import {
	LinkA,
	Brand,
	ToggleButton
} from "../../styled-components/navbar.styled-components";

class Navbar extends Component {
	render() {
		return (
			<React.Fragment>
				<nav className="navbar navbar-expand-sm">
					<div className="container">
						<Brand className="navbar-brand" to="/">
							Name
						</Brand>
						<ToggleButton
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarResponsive"
							aria-controls="navbarResponsive"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<i className="fas fa-bars"></i>
						</ToggleButton>
						<div className="collapse navbar-collapse" id="navbarResponsive">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<LinkA className="nav-link" to="/">
										Home
										<span className="sr-only">(current)</span>
									</LinkA>
								</li>
								<li className="nav-item">
									<LinkA className="nav-link" to="/blog">
										Blog
									</LinkA>
								</li>
								<li className="nav-item">
									<LinkA className="nav-link" to="/courses">
										Courses
									</LinkA>
								</li>
								<li className="nav-item">
									<LinkA className="nav-link" to="/podcast">
										Podcast
									</LinkA>
								</li>
								<li className="nav-item">
									<LinkA className="nav-link" to="/dashboard">
										Dashboard
									</LinkA>
								</li>
								<li className="nav-item">
									<LinkA
										className="nav-link"
										to="/admin"
										params={{
											name: "Davi Silva",
											email: "davi@davi.com",
											created_on: "2019"
										}}
									>
										Admin
									</LinkA>
								</li>
								<li className="nav-item">
									<LinkA className="nav-link" to="/about">
										About
									</LinkA>
								</li>
								<li className="nav-item">
									<LinkA className="nav-link" to="/login">
										Login
									</LinkA>
								</li>
								<li className="nav-item">
									<LinkA className="nav-link" to="/register">
										Register
									</LinkA>
								</li>
								<li className="nav-item">
									<LinkA
										className="nav-link"
										to="//localhost:5000/auth/logout"
										onClick={() => {
											window.location.href =
												"http://localhost:5000/auth/logout";
										}}
										// to="https://davi-silva-blog-backend.herokuapp.com/auth/logout"
									>
										Logout
									</LinkA>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</React.Fragment>
		);
	}
}

export default Navbar;
