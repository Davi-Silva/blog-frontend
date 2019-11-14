import React from 'react';

import {
  NavBar,
  LinkA,
  Brand,
  ToggleButton,
  SignUp,
} from '../../../styled-components/navbar.styled-components';

export default function Navbar() {
  return (
    <>
      <NavBar className="navbar navbar-expand-lg">
        <div className="container">
          <Brand className="navbar-brand" to="/">
              CrypticActivist
          </Brand>
          <ToggleButton
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </ToggleButton>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
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
              </li>
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
                <LinkA
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
                    Admin
                </LinkA>
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
              <li className="nav-item">
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
              </li>
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
              <li className="nav-item">
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
              </li>
            </ul>
          </div>
        </div>
      </NavBar>
    </>
  );
}
