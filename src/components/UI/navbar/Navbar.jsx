import React, { Component } from 'react';

import {
  FaBars,
} from 'react-icons/fa';

import SideDrawer from './side-drawer/SideDrawer';

import ProfilePlaceholder from '../../../static/img/profile-placeholder.png';

import {
  NavBar,
  LinkA,
  Brand,
  ToggleButton,
  // SignUp,
  LinkAProfile,
} from '../../../styled-components/navbar.styled-components';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideDrawer: false,
      mobile: false,
    };
    this.handleSideDrawer = this.handleSideDrawer.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    if (window.screen.width <= 991) {
      this.setState({
        mobile: true,
      });
    } else if (window.screen.width > 991) {
      this.setState({
        mobile: false,
      });
    }
  }

  handleSideDrawer() {
    const {
      showSideDrawer,
    } = this.state;
    const sideDrawer = window.document.body.children[1].children[1];
    const sideBackgroundDrawer = window.document.body.children[1].children[0];
    if (!showSideDrawer) {
      sideDrawer.classList.remove('hideSideDrawer');
      sideBackgroundDrawer.classList.remove('hideBackgroundSideDrawer');
      sideDrawer.classList.add('showSideDrawer');
      sideBackgroundDrawer.classList.add('showBackgroundSideDrawer');
      this.setState({ showSideDrawer: true });
    } else {
      sideDrawer.classList.remove('showSideDrawer');
      sideBackgroundDrawer.classList.remove('showBackgroundSideDrawer');
      sideDrawer.classList.add('hideSideDrawer');
      sideBackgroundDrawer.classList.add('hideBackgroundSideDrawer');
      this.setState({ showSideDrawer: false });
    }
  }

  render() {
    const {
      showSideDrawer,
    } = this.state;
    return (
      <>
        <SideDrawer ShowSideDrawer={showSideDrawer} HandleSideDrawer={this.handleSideDrawer} />
        <NavBar className="navbar navbar-expand-lg">
          <div className="container">
            <Brand className="navbar-brand" to="/">
                CrypticActivist
            </Brand>
            <ToggleButton
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              onClick={this.handleSideDrawer}
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FaBars />
            </ToggleButton>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                {/* <li className="nav-item">
                  <LinkA
                    className="nav-link"
                    to="/"
                    onClick={() => {
                      document
                        .querySelector('#navbarResponsive')
                        .classList.remove('show');
                    }}
                  >
                      Home
                    <span className="sr-only">(current)</span>
                  </LinkA>
                </li> */}
                <li className="nav-item">
                  <LinkA
                    className="nav-link"
                    to="/blog"
                    onClick={() => {
                      document
                        .querySelector('#navbarResponsive')
                        .classList.remove('show');
                    }}
                  >
                      Blog
                  </LinkA>
                </li>
                <li className="nav-item">
                  <LinkA
                    className="nav-link"
                    to="/podcasts"
                    onClick={() => {
                      document
                        .querySelector('#navbarResponsive')
                        .classList.remove('show');
                    }}
                  >
                      Podcasts
                  </LinkA>
                </li>
                <li className="nav-item">
                  <LinkA
                    className="nav-link"
                    to="/courses"
                    onClick={() => {
                      document
                        .querySelector('#navbarResponsive')
                        .classList.remove('show');
                    }}
                  >
                      Courses
                  </LinkA>
                </li>
                {/* <li className="nav-item">
                  <LinkA
                    className="nav-link"
                    to="/dashboard"
                    onClick={() => {
                      document
                        .querySelector('#navbarResponsive')
                        .classList.remove('show');
                    }}
                  >
                      Dashboard
                  </LinkA>
                </li> */}
                <li className="nav-item">
                  <LinkAProfile
                    className="nav-link"
                    to="/admin"
                    params={{
                      name: 'Davi Silva',
                      email: 'davi@davi.com',
                      created_on: '2019',
                    }}
                    onClick={() => {
                      document
                        .querySelector('#navbarResponsive')
                        .classList.remove('show');
                    }}
                  >
                    <img
                      src={ProfilePlaceholder}
                      alt="Profile Placeholder"
                      style={{
                        width: '35px',
                        height: '35px',
                        borderRadius: '50px',
                      }}
                    />
                  </LinkAProfile>
                </li>
                {/* <li className="nav-item">
                  <LinkA
                    className="nav-link"
                    to="/about"
                    onClick={() => {
                      document
                        .querySelector('#navbarResponsive')
                        .classList.remove('show');
                    }}
                  >
                      About
                  </LinkA>
                </li> */}
                {/* <li className="nav-item">
                  <LinkA
                    className="nav-link"
                    to="/login"
                    onClick={() => {
                      document
                        .querySelector('#navbarResponsive')
                        .classList.remove('show');
                    }}
                  >
                      Login
                  </LinkA>
                </li> */}
                {/* <li className="nav-item">
                  <SignUp
                    className="nav-link"
                    to="/signup"
                    onClick={() => {
                      document
                        .querySelector('#navbarResponsive')
                        .classList.remove('show');
                    }}
                  >
                      Sign Up
                  </SignUp>
                </li> */}
                {/* <li className="nav-item">
                  <LinkA
                    className="nav-link"
                    // to="//cryptic-activist-backend.herokuapp.com/auth/logout"
                    to="/auth/logout"
                    // to="//localhost:5000/auth/logout"
                    // onClick={() => {
                    //   window.location.href = 'https://cryptic-activist-backend.herokuapp.com/auth/logout';
                    // }}
                    onClick={() => {
                      window.location.href = 'http://localhost:5000/auth/logout';
                    }}
                  >
                      Logout
                  </LinkA>
                </li> */}
              </ul>
            </div>
          </div>
        </NavBar>
      </>
    );
  }
}
