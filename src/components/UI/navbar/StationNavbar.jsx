import React, { useState, useContext, useEffect } from 'react';
import _ from 'lodash';

import {
  FaBars,
  FaSearch,
  FaTh,
  FaShoppingCart,
} from 'react-icons/fa';

import SideDrawer from './side-drawer/SideDrawer';
import UserMenu from './user-menu/UserMenu';
import CoursesSearchForm from './search-form/CoursesSearchForm';
import CoursesSearchFormDesktop from './search-form/CoursesSearchFormDesktop';

import UserProvider from '../../../contexts/UserProvider';

import {
  NavBar,
  LinkA,
  LinkIcon,
  LinkIconGrid,
  Brand,
  ToggleButton,
  SignUp,
  Separator,
  // LinkAProfile,
  ButtonProfile,
} from '../../../styled-components/navbar-station.styled-components';

const Navbar = () => {
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
          <CoursesSearchForm SearchFormOnClick={closeSearchFormOnClick} />
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
          <CoursesSearchForm SearchFormOnClick={closeSearchFormOnClick} />
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


  return (
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
          <Brand className="navbar-brand" to="/courses">
            <p>
              CrypticActivist
            </p>
            <p>
              <span>
                Station
              </span>
            </p>
          </Brand>
          <LinkIconGrid>
            <FaTh />
          </LinkIconGrid>
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
                <CoursesSearchFormDesktop />
              </li>
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
                      <p>Go to</p> <p>CrypticActivist</p>
                </LinkA>
              </li>
              <li
                style={{
                  margin: '16px 5px 0px 7px',
                }}
              >
                <Separator />
              </li>
              <li className="nav-item">
                <LinkIcon
                  className="nav-link"
                  // onClick={() => {
                  //   document
                  //     .querySelector('#navbarResponsive')
                  //     .classList.remove('show');
                  // }}
                >
                  <FaShoppingCart />
                </LinkIcon>
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
};

export default Navbar;
