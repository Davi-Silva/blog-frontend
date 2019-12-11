import React, { useState, useContext, useEffect } from 'react';

import {
  FaBars,
  FaSearch,
} from 'react-icons/fa';

import SideDrawer from './side-drawer/SideDrawer';
import UserMenu from './user-menu/UserMenu';

import ProfilePlaceholder from '../../../static/img/profile-placeholder.png';

import UserProvider from '../../../contexts/UserProvider';

import {
  NavBar,
  LinkA,
  Brand,
  ToggleButton,
  SignUp,
  // LinkAProfile,
  ButtonProfile,
} from '../../../styled-components/navbar.styled-components';

const Navbar = () => {
  const [navState, setNavState] = useState({
    showSideDrawer: false,
    showUserMenu: false,
    mobile: false,
  });

  let profielImageUrl;
  let UserDiv;
  let UserMenuDiv;
  const userInfo = useContext(UserProvider.context);
  const {
    displayName,
    photos,
  } = userInfo;

  const handleUserMenu = () => {
    if (navState.showUserMenu) {
      setNavState({
        showUserMenu: false,
      });
    } else {
      setNavState({
        showUserMenu: true,
      });
    }
  };

  const closeUserMenuOnClick = () => {
    setNavState({
      showUserMenu: false,
    });
  };

  const onScroll = () => {
    console.log('scrollY:', window.scrollY);
    if (window.scrollY > 0) {
      setNavState({
        showUserMenu: false,
      });
    }
  };

  if (userInfo.photos !== undefined) {
    profielImageUrl = photos[0].value;
    UserDiv = (
      <>
        <ButtonProfile
          onClick={handleUserMenu}
        >
          <img
            src={profielImageUrl}
            alt="Profile Placeholder"
            style={{
              width: '35px',
              height: '35px',
              borderRadius: '50px',
            }}
          />
        </ButtonProfile>
      </>
    );
    if (navState.showUserMenu) {
      UserMenuDiv = (
        <>
          <UserMenu displayName={displayName} CloseUserMenuOnClick={closeUserMenuOnClick} />
        </>
      );
    } else {
      UserMenuDiv = (
        <>
        </>
      );
    }
  } else {
    profielImageUrl = ProfilePlaceholder;
    UserDiv = (
      <>
        <SignUp
          className="nav-link"
          to="/login"
          onClick={() => {
            document
              .querySelector('#navbarResponsive')
              .classList.remove('show');
          }}
        >
                      Login
        </SignUp>
      </>
    );

    UserMenuDiv = (
      <>
      </>
    );
  }

  useEffect(() => {
    if (window.screen.width <= 991) {
      setNavState({
        mobile: true,
      });
    } else if (window.screen.width > 991) {
      setNavState({
        mobile: false,
      });
    }
  }, []);

  const handleSideDrawer = () => {
    const sideDrawer = window.document.body.children[1].children[1];
    const sideBackgroundDrawer = window.document.body.children[1].children[0];
    if (!navState.showSideDrawer) {
      sideDrawer.classList.remove('hideSideDrawer');
      sideBackgroundDrawer.classList.remove('hideBackgroundSideDrawer');
      sideDrawer.classList.add('showSideDrawer');
      sideBackgroundDrawer.classList.add('showBackgroundSideDrawer');
      setNavState({ showSideDrawer: true });
    } else {
      sideDrawer.classList.remove('showSideDrawer');
      sideBackgroundDrawer.classList.remove('showBackgroundSideDrawer');
      sideDrawer.classList.add('hideSideDrawer');
      sideBackgroundDrawer.classList.add('hideBackgroundSideDrawer');
      setNavState({ showSideDrawer: false });
    }
  };


  return (
    <>
      <SideDrawer
        ShowSideDrawer={navState.showSideDrawer}
        HandleSideDrawer={handleSideDrawer}
        UserData={userInfo}
      />
      <NavBar
        className="navbar navbar-expand-lg"
        onScroll={onScroll}
      >
        <div className="container">
          <ToggleButton
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            onClick={handleSideDrawer}
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars />
          </ToggleButton>
          <Brand className="navbar-brand" to="/">
                CrypticActivist
          </Brand>
          <ToggleButton
            className="navbar-toggler"
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaSearch />
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
                {UserDiv}
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
      {UserMenuDiv}
    </>
  );
};

export default Navbar;
