import React from "react";

import {
	BlogH3,
	BlogContainer
} from "../../../styled-components/about.styled-components";

import BlogPost from "./subcompontents/blog-section/blog-post.component";

function Blog() {
	return (
		<React.Fragment>
			<section className="container">
				<div className="row">
					<div className="col-12">
						<header>
							<BlogH3>RECENT BLOG POST</BlogH3>
						</header>
						<BlogContainer>
							<BlogPost></BlogPost>
						</BlogContainer>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}

export default Blog;
