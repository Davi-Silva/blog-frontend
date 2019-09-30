import React, { Component } from "react";
// import { Link } from "react-router-dom";

// import { Container } from './styles';

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);

    this.state = {
      icon: "",
      backgroundColor: "",
      providerName: "",
      endpoint: ""
    };
  }

  componentDidMount() {
    this.setState({
      icon: this.props.icon,
      backgroundColor: this.props.backgroundColor,
      providerName: this.props.providerName,
      endpoint: this.props.endpoint
    });
  }

  render() {
    return (
      <React.Fragment>
        <a
          href={this.state.endpoint}
          style={{
            color: "#fff",
            backgroundColor: `${this.state.backgroundColor}`,
            padding: "10px 15px",
            display: "inline-block",
            width: "100%",
            textAlign: "center",
            borderRadius: "3px",
            fontSize: "14px"
          }}
        >
          Login with <i className={`fab fa-${this.state.icon}`}></i>{" "}
          {this.state.providerName}
        </a>
      </React.Fragment>
    );
  }
}
