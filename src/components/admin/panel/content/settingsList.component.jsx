import React, { Component } from "react";

import {
	ToggleButton,
	Expand
} from "../../../../styled-components/admin.styled-components";

export default class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			settingName: "",
			description: "",
			status: "",
			path: "",
			subSettings: null,
			liID: ""
		};
		this.componentDidMount = this.componentDidMount.bind(this);
	}

	componentDidMount() {
		this.setState({
			settingName: this.props.settingName,
			description: this.props.description,
			status: this.props.status,
			path: this.props.path,
			subSettings: this.props.subSettings,
			liID: this.props.liID
		});
	}

	render() {
		return (
			<li style={{ margin: "0px 15px 6px 0px" }}>
				<ToggleButton
					type="button"
					data-toggle="collapse"
					data-target={`#${this.props.liID}`}
					aria-expanded="false"
					aria-controls="collapseExample"
				>
					<div className="row">
						<div className="col-10">
							<h5
								style={{
									color: "#0058e4",
									marginBottom: "0px",
									float: "left"
								}}
							>
								{this.state.settingName}
							</h5>
							<br />
							<p style={{ color: "#999", float: "left" }}>
								{this.state.description}
							</p>
						</div>
						<div className="col-2">
							<Expand to={`/admin/course/${this.state.path}`}>
								<i className="fas fa-sort-down"></i>
							</Expand>
						</div>
					</div>
				</ToggleButton>
				<div
					className="collapse"
					id={this.state.liID}
					style={{ padding: "10px 10px 40px 10px" }}
				>
					{/* {this.state.subSettings.map(subSetting => {
            return <p>{subSetting.settingName}</p>;
          })} */}
					{/* {this.state.subSettings} */}
				</div>
			</li>
		);
	}
}
