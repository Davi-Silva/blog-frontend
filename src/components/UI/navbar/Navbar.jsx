import React, { useState, useContext, useEffect } from 'react';
import _ from 'lodash';

import {
  FaBars,
  FaSearch,
} from 'react-icons/fa';

import SideDrawer from './side-drawer/SideDrawer';
import UserMenu from './user-menu/UserMenu';
import SearchForm from './search-form/SearchForm';

import UserProvider from '../../../contexts/UserProvider';

import StationNavbar from './StationNavbar';

import {
  NavBar,
  LinkA,
  Brand,
  ToggleButton,
  SignUp,
  // LinkAProfile,
  ButtonProfile,
} from '../../../styled-components/navbar.styled-components';

const Navbar = (props) => {
  const {
    location
  } = props;
  const { pathname } = location;
  console.log('slug:', pathname);
  const [sideDrawerState, setSideDrawerState] = useState({
    showSideDrawer: false,
  });
  const [userMenuState, setUserMenuState] = useState({
    showUserMenu: false,
  });
  const [searchFormState, setSearchFormState] = useState({
    showSearchForm: false,
  });

  let UserDiv;
  let UserMenuDiv;
  let SearchFormDiv;
  const userInfo = useContext(UserProvider.context);

  const handleUserMenu = () => {
    if (userMenuState.showUserMenu) {
      setUserMenuState({
        showUserMenu: false,
      });
    } else {
      setUserMenuState({
        showUserMenu: true,
      });
    }
  };

  const handleSearchForm = () => {
    handleCloseSideDrawer()
    if (searchFormState.showSearchForm) {
      setSearchFormState({
        showSearchForm: false,
      });
    } else {
      setSearchFormState({
        showSearchForm: true,
      });
    }
  };

  const closeUserMenuOnClick = () => {
    setUserMenuState({
      showUserMenu: false,
    });
  };

  const closeSearchFormOnClick = () => {
    setSearchFormState({
      showSearchForm: false,
    });
  };

  const onScroll = () => {
    if (window.scrollY > 0) {
      setUserMenuState({
        showUserMenu: false,
      });
    }
  };

  if (!_.isEmpty(userInfo)) {
    const {
      profileImage,
      name,
    } = userInfo[0];
    UserDiv = (
      <>
        <ButtonProfile
          onClick={handleUserMenu}
        >
          <img
            src={profileImage}
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
    if (userMenuState.showUserMenu) {
      UserMenuDiv = (
        <>
          <UserMenu displayName={name} CloseUserMenuOnClick={closeUserMenuOnClick} />
        </>
      );
    } else {
      UserMenuDiv = (
        <>
        </>
      );
    }
    if (searchFormState.showSearchForm) {
      SearchFormDiv = (
        <>
          <SearchForm SearchFormOnClick={closeSearchFormOnClick} />
        </>
      );
    } else {
      SearchFormDiv = (
        <>
        </>
      );
    }
  } else {
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

    if (searchFormState.showSearchForm) {
      SearchFormDiv = (
        <>
          <SearchForm SearchFormOnClick={closeSearchFormOnClick} />
        </>
      );
    } else {
      SearchFormDiv = (
        <>
        </>
      );
    }
  }

  const handleCloseSideDrawer = () => {
    const sideDrawer = window.document.body.children[1].children[1];
    const sideBackgroundDrawer = window.document.body.children[1].children[0];
    if (sideDrawerState.showSideDrawer) {
      sideDrawer.classList.remove('showSideDrawer');
      sideBackgroundDrawer.classList.remove('showBackgroundSideDrawer');
      sideDrawer.classList.add('hideSideDrawer');
      sideBackgroundDrawer.classList.add('hideBackgroundSideDrawer');
      setSideDrawerState({ showSideDrawer: false });
    }
  };

  const handleSideDrawer = () => {
    const sideDrawer = window.document.body.children[1].children[1];
    const sideBackgroundDrawer = window.document.body.children[1].children[0];
    if (!sideDrawerState.showSideDrawer) {
      sideDrawer.classList.remove('hideSideDrawer');
      sideBackgroundDrawer.classList.remove('hideBackgroundSideDrawer');
      sideDrawer.classList.add('showSideDrawer');
      sideBackgroundDrawer.classList.add('showBackgroundSideDrawer');
      setSideDrawerState({ showSideDrawer: true });
    } else {
      sideDrawer.classList.remove('showSideDrawer');
      sideBackgroundDrawer.classList.remove('showBackgroundSideDrawer');
      sideDrawer.classList.add('hideSideDrawer');
      sideBackgroundDrawer.classList.add('hideBackgroundSideDrawer');
      setSideDrawerState({ showSideDrawer: false });
    }
  };

  let navbar;
  if (pathname.includes('/course') || pathname.includes('/courses') || pathname.includes('/my-courses')) {
    navbar = (
      <>
        <StationNavbar />
      </>
    );
  } else {
    navbar = (
      <>
        <SideDrawer
          ShowSideDrawer={sideDrawerState.showSideDrawer}
          HandleSideDrawer={handleSideDrawer}
          UserData={userInfo}
          style={{
            top: '30px',
          }}
        />
        <NavBar
          className="navbar navbar-expand-md"
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
              <FaSearch
                onClick={handleSearchForm}
              />
              {SearchFormDiv}
            </ToggleButton>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
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
                    Station
                  </LinkA>
                </li>
                <li className="nav-item">
                  {UserDiv}
                </li>
              </ul>
            </div>
          </div>
        </NavBar>
        {UserMenuDiv}
      </>
    );
  }

  return (
    <>
      {navbar}
    </>
  );
};

export default Navbar;
