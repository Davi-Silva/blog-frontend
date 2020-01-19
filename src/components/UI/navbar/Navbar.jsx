import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';

import {
  FaBars,
  FaSearch,
} from 'react-icons/fa';

import SideDrawer from './side-drawer/SideDrawer';
import UserMenu from './user-menu/UserMenu';
import SearchForm from './search-form/SearchForm';

import * as UserActions from '../../../store/actions/user/user';
import * as NavbarActions from '../../../store/actions/navbar';

import StationNavbar from './StationNavbar';

import {
  NavBar,
  LinkA,
  Brand,
  ToggleButton,
  SignUp,
  ButtonProfile,
  Ul,
} from '../../../styled-components/navbar.styled-components';

const Navbar = (props) => {
  const {
    pathname,
  } = props.location;
  const [userMenuState, setUserMenuState] = useState({
    showUserMenu: false,
  });
  const [searchFormState, setSearchFormState] = useState({
    showSearchForm: false,
  });

  const user = useSelector((state) => state.user);
  const { showSideDrawer } = useSelector((state) => state.navbar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserActions.loginUser());
  }, []);

  let UserDiv;
  let UserMenuDiv;
  let SearchFormDiv;

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

  const handleCloseSideDrawer = () => {
    const sideDrawer = window.document.body.children[1].children[1];
    const sideBackgroundDrawer = window.document.body.children[1].children[0];
    if (showSideDrawer) {
      sideDrawer.classList.remove('showSideDrawer');
      sideBackgroundDrawer.classList.remove('showBackgroundSideDrawer');
      sideDrawer.classList.add('hideSideDrawer');
      sideBackgroundDrawer.classList.add('hideBackgroundSideDrawer');
      dispatch(NavbarActions.closeSideDrawer());
    }
  };

  const handleSideDrawer = () => {
    const sideDrawer = window.document.body.children[1].children[1];
    const sideBackgroundDrawer = window.document.body.children[1].children[0];
    if (!showSideDrawer) {
      sideDrawer.classList.remove('hideSideDrawer');
      sideBackgroundDrawer.classList.remove('hideBackgroundSideDrawer');
      sideDrawer.classList.add('showSideDrawer');
      sideBackgroundDrawer.classList.add('showBackgroundSideDrawer');
      dispatch(NavbarActions.openSideDrawer());
    } else {
      sideDrawer.classList.remove('showSideDrawer');
      sideBackgroundDrawer.classList.remove('showBackgroundSideDrawer');
      sideDrawer.classList.add('hideSideDrawer');
      sideBackgroundDrawer.classList.add('hideBackgroundSideDrawer');
      dispatch(NavbarActions.closeSideDrawer());
    }
  };

  const handleSearchForm = () => {
    handleCloseSideDrawer();
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

  let navbar;

  if (!_.isEmpty(user.data)) {
    const {
      profileImage,
      name,
    } = user.data;
    UserDiv = (
      <>
        <ButtonProfile
          onClick={handleUserMenu}
        >
          <img
            src={profileImage.url}
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
          <div className="row">
            <div className="col-12">
              <UserMenu displayName={name} CloseUserMenuOnClick={closeUserMenuOnClick} />
            </div>
          </div>
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
          // className="nav-link"
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
          ShowSideDrawer={showSideDrawer}
          HandleSideDrawer={handleSideDrawer}
          UserData={user.data}
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
              <Ul className="navbar-nav ml-auto">
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
                <li className="profile-li">
                  {UserDiv}
                </li>
              </Ul>
              {UserMenuDiv}
            </div>
          </div>
        </NavBar>
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

Navbar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

Navbar.defaultProps = {
  location: {
    pathname: '/',
  },
};
