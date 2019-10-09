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
			// "https://course-backend.herokuapp.com/podcasts/",
			"http://localhost:5000/podcasts/",
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

	async componentDidMount() {
		const podcastsList = await this.getAllPodcasts();
		await this.setStateAsync({ podcasts: podcastsList });
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
