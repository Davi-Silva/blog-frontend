import React, { Component } from "react";

import { Input } from "../styled-components/forms.styled-components";

export default class UploadNewPodcast extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slug_exists: false,
			slug: "",
			title: ""
		};
		this.getPodcastBySlug = this.getPodcastBySlug.bind(this);
	}

	async getPodcastBySlug(slug) {
		let response = await fetch(
			// `https://course-backend.herokuapp.com/podcasts/get/${}`,
			`http://localhost:5000/podcasts/get/${slug}`,
			{
				method: "GET",
				mode: "cors",
				cache: "no-cache",
				credentials: "same-origin",
				headers: {
					"Content-Type": "application/json"
				}
			}
		);
		let data = await response.json();
		return data;
	}

	setStateAsync(state) {
		return new Promise(resolve => {
			this.setState(state, resolve);
		});
	}

	async onChangeSlug(slug) {
		await this.setStateAsync({ slug });
		console.log(this.state.slug);
	}

	render() {
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h1>Upload New Podcast</h1>
							<Input
								type="text"
								id="title"
								name="title"
								placeholder="Title"
								value={this.state.title}
								// onChange={this.onChangeSlug()}
							/>
							<Input
								type="text"
								id="slug"
								name="slug"
								placeholder="Slug"
								value={this.state.slug}
								// onChange={this.onChangeSlug()}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
