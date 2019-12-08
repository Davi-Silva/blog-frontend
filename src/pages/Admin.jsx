import React, { Component } from 'react';

import {
  FaLaptopCode,
  FaBlog,
  FaPodcast,
  FaCog,
} from 'react-icons/fa';

import CoursePanel from '../components/admin/panel/course.component';
import PodcastPanel from '../components/admin/panel/podcast.component';
import BlogPanel from '../components/admin/panel/blog.component';
import SettingsPanel from '../components/admin/panel/settings.component';

import {
  Column,
  AdminWrapper,
  AdminUl,
  AdminLi,
  AdminButton,
} from '../styled-components/admin.styled-components';

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: false,
      blog: false,
      podcasts: false,
      settings: false,
    };
    this.onChangeCourse = this.onChangeCourse.bind(this);
    this.onChangeBlog = this.onChangeBlog.bind(this);
    this.onChangePodcasts = this.onChangePodcasts.bind(this);
    this.onChangeSettings = this.onChangeSettings.bind(this);
  }

  onChangeCourse() {
    this.setState({
      courses: true,
      blog: false,
      podcasts: false,
      settings: false,
    });
  }

  onChangeBlog() {
    this.setState({
      courses: false,
      blog: true,
      podcasts: false,
      settings: false,
    });
  }

  onChangePodcasts() {
    this.setState({
      courses: false,
      blog: false,
      podcasts: true,
      settings: false,
    });
  }

  onChangeSettings() {
    this.setState({
      courses: false,
      blog: false,
      podcasts: false,
      settings: true,
    });
  }

  render() {
    const {
      courses,
      blog,
      podcasts,
      settings,
    } = this.state;

    let coursesVar;
    let blogVar;
    let podcastsVar;
    let settingsVar;

    if (courses) {
      coursesVar = (
        <>
          <AdminButton
            onClick={this.onChangeCourse}
            style={{
              color: '#0058e4',
            }}
          >
            <FaLaptopCode />
            <span>
              Course
            </span>
          </AdminButton>
        </>
      );
    } else {
      coursesVar = (
        <>
          <AdminButton
            onClick={this.onChangeCourse}
          >
            <FaLaptopCode />
            <span>
              Course
            </span>
          </AdminButton>
        </>
      );
    }

    if (blog) {
      blogVar = (
        <>
          <AdminButton
            onClick={this.onChangeBlog}
            style={{
              color: '#0058e4',
            }}
          >
            <FaBlog />
            <span>
              Blog
            </span>
          </AdminButton>
        </>
      );
    } else {
      blogVar = (
        <>
          <AdminButton
            onClick={this.onChangeBlog}
          >
            <FaBlog />
            <span>
              Blog
            </span>
          </AdminButton>
        </>
      );
    }

    if (podcasts) {
      podcastsVar = (
        <>
          <AdminButton
            onClick={this.onChangePodcasts}
            style={{
              color: '#0058e4',
            }}
          >
            <FaPodcast />
            <span>
              Podcast
            </span>
          </AdminButton>
        </>
      );
    } else {
      podcastsVar = (
        <>
          <AdminButton
            onClick={this.onChangePodcasts}
          >
            <FaPodcast />
            <span>
              Podcast
            </span>
          </AdminButton>
        </>
      );
    }

    if (settings) {
      settingsVar = (
        <>
          <AdminButton
            onClick={this.onChangeSettings}
            style={{
              color: '#0058e4',
            }}
          >
            <FaCog />
            <span>
              Settings
            </span>
          </AdminButton>
        </>
      );
    } else {
      settingsVar = (
        <>
          <AdminButton
            onClick={this.onChangeSettings}
          >
            <FaCog />
            <span>
              Settings
            </span>
          </AdminButton>
        </>
      );
    }


    return (
      <>
        <AdminWrapper
          className="container-fluid"
          // style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
        >
          <div className="row">
            {/* <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-0">
              <CoursePanel />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-0">
              <PodcastPanel />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-0">
              <BlogPanel />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-0">
              <SettingsPanel />
            </div> */}

            <Column className="col-lg-1 col-md-1 col-sm-12 col-12">
              <AdminUl>
                <AdminLi>
                  {coursesVar}
                </AdminLi>
                <AdminLi>
                  {blogVar}
                </AdminLi>
                <AdminLi>
                  {podcastsVar}
                </AdminLi>
                <AdminLi>
                  {settingsVar}
                </AdminLi>
              </AdminUl>
            </Column>


          </div>
        </AdminWrapper>
      </>
    );
  }
}
