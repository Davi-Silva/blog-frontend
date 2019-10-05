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
            padding: "12px 30px",
            display: "inline-block",
            width: "100%",
            textAlign: "center",
            borderRadius: "3px",
            fontSize: "14px"
          }}
        >
          <div className="row">
            <div className="col-2 p-0">
              <i
                className={`fab fa-${this.state.icon}`}
                style={{ fontSize: "20px" }}
              ></i>
            </div>
            <div className="col-10 p-0">
              <span style={{ textDecoration: "none" }}>
                Login with {this.state.providerName}
              </span>
            </div>
          </div>
        </a>
      </React.Fragment>
    );
  }
}
