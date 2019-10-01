import React, { Component } from "react";

import {
  Header,
  Input,
  Button,
  P,
  A
} from "../styled-components/forms.styled-components";

import LoginButton from "../components/buttons/ThirdPartyLoginButton.component";

class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: ""
    };
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

  async loginUser(loginInfo) {
    // let response = await fetch("http://localhost:5000/users/login", {
    let response = await fetch(
      "https://davi-silva-blog-backend.herokuapp.com/users/login",
      {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginInfo)
      }
    );
    let data = await response.json();
    return data;
  }

  onSubmit(e) {
    e.preventDefault();

    const loginInfo = {
      email: this.state.email,
      password: this.state.password
    };

    this.loginUser(loginInfo)
      .then(res => {
        console.log(res.json());
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <div className="row m-5">
          <div className="col-lg-3 col-md-6 col-sm-8 col-12 m-auto">
            <div className="form-container">
              <Header className="text-center mb-3">
                <i className="fas fa-sign-in-alt"></i> Login
              </Header>
              <form onSubmit={this.onSubmit}>
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
                  value={this.state.password}
                  onChange={this.onChangePassword}
                />
                <Button type="submit">Login</Button>
              </form>
              <P className="mt-1">
                No Account? <A href="/register">Register</A>
              </P>
            </div>
          </div>
          <div className="col-12 m-auto">
            <ul style={{ display: "table", margin: "0 auto" }}>
              {/* <LoginButton
              endpoint="davi-silva-blog-backend.herokuapp.com/auth/google"
              providerName="Google"
						></LoginButton> */}
              <li style={{ listStyle: "none", margin: "5px 0px" }}>
                <LoginButton
                  icon="google"
                  backgroundColor="#4285f4"
                  endpoint="https://davi-silva-blog-backend.herokuapp.com/auth/google"
                  providerName="Google"
                ></LoginButton>
              </li>
              <li style={{ listStyle: "none", margin: "5px 0px" }}>
                <LoginButton
                  icon="github"
                  backgroundColor="#333"
                  endpoint="https://davi-silva-blog-backend.herokuapp.com/auth/github"
                  providerName="Github"
                ></LoginButton>
              </li>
              <li style={{ listStyle: "none", margin: "5px 0px" }}>
                <LoginButton
                  icon="facebook"
                  backgroundColor="#3a5797"
                  endpoint="https://davi-silva-blog-backend.herokuapp.com/auth/facebook"
                  providerName="Facebook"
                ></LoginButton>
              </li>
              <li style={{ listStyle: "none", margin: "5px 0px" }}>
                <LoginButton
                  icon="instagram"
                  backgroundColor="#4285f4"
                  endpoint="https://davi-silva-blog-backend.herokuapp.com/auth/instagram"
                  providerName="Instagram"
                ></LoginButton>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
