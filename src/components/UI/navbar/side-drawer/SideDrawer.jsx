/* eslint-disable react/prop-types */
import React, { Component } from 'react';

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
// import UserProvider from '../../../../contexts/UserProvider';

export default class SideDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // showDrawer: true,
      displayName: '',
      photo: '',
    };
    this.handleClose = this.handleClose.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    const {
      UserData,
    } = this.props;
    // console.log('UserData.photos[0].value:', UserData);
    this.setStateAsync({
      displayName: UserData.displayName,
    });
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  handleClose() {
    const {
      HandleSideDrawer,
    } = this.props;
    const closeDrawer = HandleSideDrawer;
    closeDrawer();
  }


  render() {
    const {
      UserData,
    } = this.props;
    const {
      displayName,
      photos,
    } = UserData;
    let profileImage;
    let profileImageUrl;
    let profileName;
    // UserData.photos.map((photo) => {
    //   console.log('photo:', photo);
    // });
    if (photos !== undefined) {
      console.log('userInfo NOT UNDEFINED:', photos[0].value);
      profileImageUrl = photos[0].value;
      profileImage = (
        <>
          <ProfileImage
            src={profileImageUrl}
          />
        </>
      );
      profileName = (
        <>
          <ProfileName>
            {displayName}
          </ProfileName>
        </>
      );
    } else {
      profileImage = (
        <>
          <ProfileImage
            src={ProfilePlaceholder}
          />
        </>
      );
      profileName = (
        <>
          <ProfileName>
            Signup
          </ProfileName>
        </>
      );
    }

    // if (photos !== undefined) {
    //   profileImage = (
    //     <>
    //       <ProfileImage
    //         src={ProfilePlaceholder}
    //       />
    //     </>
    //   );
    // } else {
    //   profileImage = (
    //     <>
    //       <ProfileImage
    //         src={photos[0].value}
    //       />
    //     </>
    //   );
    // }

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
                {profileImage}
              </li>
              <li
                style={{
                  listStyle: 'none',
                  display: 'inline',
                }}
              >
                {profileName}
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
