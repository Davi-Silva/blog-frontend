/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import {
  FaPlus,
} from 'react-icons/fa';
import {
  BackgroundDrawer,
  Drawer,
  ProfileImage,
  ProfileName,
  SideDrawerUl,
  SideDrawerLi,
  SideDrawerLinkTo,
  SideDrawerLinkToAdmin,
  Button,
} from '../../../../styled-components/side-drawer.styled-components';

import ProfilePlaceholder from '../../../../static/img/profile-placeholder.png';

export default class SideDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // showDrawer: true,
    };
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    const { HandleSideDrawer } = this.props;
    const closeDrawer = HandleSideDrawer;
    closeDrawer();
  }

  render() {
    return (
      <>
        <BackgroundDrawer onClick={this.handleClose} />
        <Drawer>
          <SideDrawerLinkToAdmin to="/admin">
            <ul>
              <li
                style={{
                  listStyle: 'none',
                  display: 'inline',
                }}
              >
                <ProfileImage
                  src={ProfilePlaceholder}
                />
              </li>
              <li
                style={{
                  listStyle: 'none',
                  display: 'inline',
                }}
              >
                <ProfileName>
                Name
                </ProfileName>
              </li>
            </ul>
          </SideDrawerLinkToAdmin>
          <Button
            onClick={this.handleClose}
          >
            <FaPlus
              className="closeDrawer"
            />
          </Button>
          <SideDrawerUl>
            <SideDrawerLi>
              <SideDrawerLinkTo to="/blog">
                  Blog
              </SideDrawerLinkTo>
            </SideDrawerLi>
            <SideDrawerLi>
              <SideDrawerLinkTo to="/podcasts">
                  Podcasts
              </SideDrawerLinkTo>
            </SideDrawerLi>
            <SideDrawerLi>
              <SideDrawerLinkTo to="/courses">
                  Courses
              </SideDrawerLinkTo>
            </SideDrawerLi>
          </SideDrawerUl>
        </Drawer>
      </>
    );
  }
}
