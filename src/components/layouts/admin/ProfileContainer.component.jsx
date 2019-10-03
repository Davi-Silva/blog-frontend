import React, { Component } from "react";

import { ProfileContainerDiv } from "../../../styled-components/admin.styled-components";

export default class ProfileContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.name,
			email: this.props.email,
			created_on: this.props.created_on
		};
	}

	render() {
		return (
			<React.Fragment>
				<ProfileContainerDiv>
					<p>{this.state.name}</p>
					<p>{this.state.email}</p>
					<p>{this.state.created_on}</p>
				</ProfileContainerDiv>
			</React.Fragment>
		);
	}
}
