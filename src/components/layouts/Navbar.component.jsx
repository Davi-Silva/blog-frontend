import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  styles = {
    navbar: {
      a: {
        color: "#6345ba",
        textDecoration: "none"
      },
      brand: {
        color: "#6345ba",
        fontWeight: "900"
      },
      toggleButton: {
        color: "#6345ba"
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-sm">
          <div className="container">
            <Link
              className="navbar-brand"
              to="/"
              style={this.styles.navbar.brand}
            >
              Course
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={this.styles.navbar.toggleButton}
            >
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/"
                    style={this.styles.navbar.a}
                  >
                    Home
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/blog"
                    style={this.styles.navbar.a}
                  >
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/dashboard"
                    style={this.styles.navbar.a}
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/admin"
                    style={this.styles.navbar.a}
                    params={{
                      name: "Davi Silva",
                      email: "davi@davi.com",
                      created_on: "2019"
                    }}
                  >
                    Admin
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/about"
                    style={this.styles.navbar.a}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/login"
                    style={this.styles.navbar.a}
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://davi-silva-blog-backend.herokuapp.com/auth/logout"
                    style={this.styles.navbar.a}
                  >
                    Logout
                  </a>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/register"
                    style={this.styles.navbar.a}
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
