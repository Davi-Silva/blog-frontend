import React, { Component } from "react";

import { AudioPlayer } from "../styled-components/media_players.styled-component";
import {
	Wrapper,
	Title,
	Description,
	UploadedOn
} from "../styled-components/podcast.styled-components";

import AdvertisementSquare from "../components/UI/ads/AdvertisementSquare.component";

export default class Podcast extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slug: "",
			title: "",
			description: "",
			uploaded_on: null,
			audio_file_url: null,
			cover: null,
			cover_alt: ""
		};

		this.getPodcastBySlug = this.getPodcastBySlug.bind(this);
		this.setStateAsync = this.setStateAsync.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
	}

	parseDate(input) {
		var parts = input.match(/(\d+)/g);
		// new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
		return new Date(parts[0], parts[1] - 1, parts[2]); // months are 0-based
	}

	async getPodcastBySlug() {
		const response = await fetch(
			`http://localhost:5000/podcasts/get/${this.props.match.params.slug}`,
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
		let podcast = await this.getPodcastBySlug();
		if (podcast.length > 0) {
			podcast = podcast[0];
			console.log("podcast:", podcast.audio_file.url);
			let dateFormatted = this.parseDate(podcast.uploaded_on);
			const months = [
				"January",
				"February",
				"March",
				"April",
				"may",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			];
			let formattedDate =
				months[dateFormatted.getMonth()] +
				" " +
				dateFormatted.getDate() +
				" " +
				dateFormatted.getFullYear();
			await this.setStateAsync({
				slug: podcast.slug,
				title: podcast.title,
				description: podcast.description,
				uploaded_on: formattedDate,
				audio_file_url: podcast.audio_file.url,
				cover: podcast.cover.url,
				cover_alt: podcast.cover.name
			});
		} else {
			this.props.history.push("/404");
		}
	}

	render() {
		return (
			<React.Fragment>
				<div className="container">
					<div className="row">
						<div className="col-lg-9 col-md-9 col-sm-12 col-12">
							<Wrapper>
								<img
									src={this.state.cover}
									alt={this.state.cover_alt}
									style={{ width: "100%" }}
								/>
								<UploadedOn>
									Uploaded on&nbsp;
									<span style={{ color: "#0058e4" }}>
										{this.state.uploaded_on}
									</span>
								</UploadedOn>
								<Title>{this.state.title}</Title>
								<AudioPlayer
									controls
									name="podcast"
									style={{
										width: "100%",
										padding: "0px 25px"
									}}
								>
									<source src={this.state.audio_file_url} type="audio/mp3" />
									Your browser does not support this feature.
								</AudioPlayer>
								<Description
									dangerouslySetInnerHTML={{ __html: this.state.description }}
									style={{ textAlign: "justify" }}
								></Description>
							</Wrapper>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-12 col-12">
							<aside style={{ marginTop: "20px" }}>
								<AdvertisementSquare />
							</aside>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
