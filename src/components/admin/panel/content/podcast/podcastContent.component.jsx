import React, { Component } from "react";

import List from "../list.component";

export default class PodcastContent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			podcasts: []
		};

		this.componentDidMount = this.componentDidMount(this);
	}

	async getAllPodcasts() {
		let response = await fetch(
			"https://course-backend.herokuapp.com/podcasts/",
			{
				method: "GET",
				mode: "no-cors",
				cache: "no-cache",
				credentials: "same-origin",
				headers: {
					"Content-Type": "application/json"
				}
			}
		);
		let data = await response.json();
		console.log("data:", data);
		return data;
	}

	setStateAsync(state) {
		return new Promise(resolve => {
			this.setState(state, resolve);
		});
	}

	async componentDidMount() {
		const podcastsList = await this.getAllPodcasts();
		console.log("data on did mount:", podcastsList);
		await this.setStateAsync({ podcasts: podcastsList });
		console.log("state podcasts:", this.state.podcasts);
	}

	render() {
		return (
			<div style={{ height: "100%" }}>
				<ul>
					{this.state.podcasts.map((podcast, key) => {
						return (
							<List
								key={key}
								type={podcast.type}
								category={podcast.category}
								title={podcast.title}
								date={podcast.uploaded_on}
								description={podcast.description}
								liID={`p-${key}`}
							/>
						);
					})}
				</ul>
			</div>
		);
	}
}
