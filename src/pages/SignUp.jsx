import React, { Component } from 'react';

import {
  Header,
  Input,
  Button,
  P,
  A,
  Alert,
} from '../styled-components/forms.styled-components';

class Register extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePassword2 = this.onChangePassword2.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeAlert = this.onChangeAlert.bind(this);

    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      alertMsg: {
        msgs: [],
      },
    };
  }

  onChangeAlert() {
    this.window.alert('Invalid Password');
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangePassword2(e) {
    this.setState({
      password2: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const {
      name,
      email,
      password,
      password2,
    } = this.state;
    const registerInfo = {
      name,
      email,
      password,
      password2,
    };

    this.registerUser(registerInfo)
      .then(() => {
        window.location = '/login';
      })
      .catch((err) => console.log(err));
  }

  async registerUser(registerInfo) {
    this.response = await fetch('https://cryptic-activist-backend.herokuapp.com/users/register', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerInfo),
    });
    const data = await this.response.json();
    return data;
  }


  render() {
    const {
      name,
      email,
      password,
      password2,
      alertMsg,
    } = this.state;
    return (
      <div className="row m-5">
        <div className="col-lg-3 col-md-6 col-sm-8 col-12 m-auto">
          <Alert
            className="alert alert-danger"
            role="alert"
            onChange={this.onChangeAlert}
          >
            {alertMsg.msgs.map((msg) => msg)}
          </Alert>
          <div className="form-container">
            <Header className="text-center mb-3">
              <i className="fas fa-user-plus" />
              {' '}
              Sign Up
            </Header>
            <form onSubmit={this.onSubmit}>
              <Input
                type="name"
                id="name"
                name="name"
                placeholder="Name"
                value={name}
                onChange={this.onChangeName}
              />
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.onChangeEmail}
              />
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={this.onChangePassword}
              />
              <Input
                type="password"
                id="password2"
                name="password2"
                value={password2}
                placeholder="Confirm Password"
                onChange={this.onChangePassword2}
              />
              <Button type="submit">Register</Button>
            </form>
            <P className="mt-1">
              Have An Account?
              {' '}
              <A href="/login">Login</A>
            </P>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
