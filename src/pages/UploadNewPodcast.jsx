import React, { Component } from "react";

// import debounce from "lodash/debounce";

import { Input } from "../styled-components/forms.styled-components";

export default class UploadNewPodcast extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slug_exists: false,
			id: "",
			slug: "",
			category: "",
			title: "",
			description: "",
			tags: "",
			filepath: "",
			length: "",
			isTyping: null,
			isSlugValid: false
		};
		this.onChangeTitle = this.onChangeTitle.bind(this);
		this.changeSlugFromTitle = this.changeSlugFromTitle.bind(this);
	}

	async getPodcastBySlug(slug) {
		let response = await fetch(
			// `https://course-backend.herokuapp.com/podcasts/get/${}`,
			`http://localhost:5000/podcasts/validation/slug/${slug}`,
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

	async onChangeTitle(e) {
		this.setStateAsync({
			title: e.target.value,
			isTyping: true
		});
		this.changeSlugFromTitle(this.state.title);
		setTimeout(() => {
			this.changeSlugFromTitle(this.state.title);
		}, 0);
		setTimeout(() => {
			this.setStateAsync({
				isTyping: false
			});

			return;
			// if (this.state.isTyping === false) {
			// 	console.log("Is not typing");
			// }
		}, 4000);
	}

	async changeSlugFromTitle() {
		let slug = this.state.title
			.toLowerCase()
			.split(" ")
			.join("-");
		await this.setStateAsync({ slug });
	}

	render() {
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-6 col-sm-6 col-12">
							<Input
								type="text"
								id="title"
								name="title"
								placeholder="Title"
								value={this.state.title}
								onChange={this.onChangeTitle}
							/>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-6 col-12">
							<Input
								type="text"
								id="title"
								name="title"
								placeholder="Title"
								value={this.state.slug}
								// onChange={this.onChangeTitle}
								disabled
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
