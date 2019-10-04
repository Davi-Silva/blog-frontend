import React, { Component } from "react";

import {
  Header,
  Input,
  Button,
  P,
  A,
  Alert
} from "../styled-components/forms.styled-components";

class Register extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePassword2 = this.onChangePassword2.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      alertMsg: {
        msgs: []
      }
    };
  }

  onChangeAlert(e) {}

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangePassword2(e) {
    this.setState({
      password2: e.target.value
    });
  }

  async registerUser(registerInfo) {
    let response = await fetch("http://localhost:5000/users/register", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(registerInfo)
    });
    let data = await response.json();
    return data;
  }

  onSubmit(e) {
    e.preventDefault();

    const registerInfo = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.registerUser(registerInfo)
      .then(() => {
        console.log("Registerd successully");
        window.location = "/login";
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="row m-5">
        <div className="col-lg-3 col-md-6 col-sm-8 col-12 m-auto">
          <Alert
            className="alert alert-danger"
            role="alert"
            onChange={this.onChangeAlert}
          >
            {this.state.alertMsg.msgs.map(msg => {
              return msg;
            })}
          </Alert>
          <div className="form-container">
            <Header className="text-center mb-3">
              <i className="fas fa-user-plus"></i> Sign Up
            </Header>
            <form onSubmit={this.onSubmit}>
              <Input
                type="name"
                id="name"
                name="name"
                placeholder="Name"
                onChange={this.onChangeName}
              />
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={this.onChangePassword}
              />
              <Input
                type="password"
                id="password2"
                name="password2"
                placeholder="Confirm Password"
                onChange={this.onChangePassword2}
              />
              <Button type="submit">Register</Button>
            </form>
            <P className="mt-1">
              Have An Account? <A href="/login">Login</A>
            </P>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
