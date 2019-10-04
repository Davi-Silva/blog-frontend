import React, { Component } from "react";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      created_on: ""
    };

    this.componentDidMount.bind(this);
    this.getUserInfo.bind(this);
  }

  async getUserInfo() {
    console.log("props:", this.props);
    // const { name, email, created_on } = this.props;
    const name = "Davi";
    const email = "davi@davi.com";
    const created_on = "2019";
    const userInfo = {
      name: name,
      email: email,
      created_on: created_on
    };
    console.log("userInfo:", userInfo);

    let response = await fetch("http://localhost:5000/users/user", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    let data = await response.json();
    return data;
  }

  componentDidMount() {
    this.getUserInfo()
      .then(res => {
        console.log("RESPONSE DIDMOUNT:", res);
        this.setState({
          name: res.name,
          email: res.email,
          created_on: res.created_on
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <header>
              <h4>Course</h4>
            </header>
          </div>
          <div className="col-4">
            <header>
              <h4>Course</h4>
            </header>
          </div>
          <div className="col-4">
            <header>
              <h4>Course</h4>
            </header>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
