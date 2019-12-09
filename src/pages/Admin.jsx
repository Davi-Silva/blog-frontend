import React, { Component } from 'react';

import {
  FaLaptopCode,
  FaBlog,
  FaPodcast,
  FaCog,
  FaPlus,
  FaSearch,
  FaEdit,
} from 'react-icons/fa';

import CoursePanel from '../components/admin/panel/course.component';
import PodcastPanel from '../components/admin/panel/podcast.component';
import BlogPanel from '../components/admin/panel/blog.component';
import SettingsPanel from '../components/admin/panel/settings.component';

import PublishBlogPost from './PublishBlogPost';
import UploadNewPodcast from './UploadNewPodcast';
import EditPost from './EditPost';
import EditPodcast from './EditPodcast';

import {
  Column,
  AdminWrapper,
  AdminUl,
  AdminLi,
  AdminLi2,
  AdminButton,
  AdminSubButton,
} from '../styled-components/admin.styled-components';

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: false,
      blog: false,
      podcasts: false,
      settings: false,
      subMenu: {
        add: false,
        edit: false,
        search: false,
      },
    };
    this.onChangeCourse = this.onChangeCourse.bind(this);
    this.onChangeBlog = this.onChangeBlog.bind(this);
    this.onChangePodcasts = this.onChangePodcasts.bind(this);
    this.onChangeSettings = this.onChangeSettings.bind(this);
    this.onChangeAdd = this.onChangeAdd.bind(this);
    this.onChangeEdit = this.onChangeEdit.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);
  }

  onChangeCourse() {
    this.setState({
      courses: true,
      blog: false,
      podcasts: false,
      settings: false,
      subMenu: {
        add: false,
        edit: false,
        search: false,
      },
    });
  }

  onChangeBlog() {
    this.setState({
      courses: false,
      blog: true,
      podcasts: false,
      settings: false,
      subMenu: {
        add: false,
        edit: false,
        search: false,
      },
    });
  }

  onChangePodcasts() {
    this.setState({
      courses: false,
      blog: false,
      podcasts: true,
      settings: false,
      subMenu: {
        add: false,
        edit: false,
        search: false,
      },
    });
  }

  onChangeSettings() {
    this.setState({
      courses: false,
      blog: false,
      podcasts: false,
      settings: true,
      subMenu: {
        add: false,
        edit: false,
        search: false,
      },
    });
  }

  onChangeAdd() {
    this.setState({
      subMenu: {
        add: true,
        edit: false,
        search: false,
      },
    });
  }

  onChangeEdit() {
    this.setState({
      subMenu: {
        add: false,
        edit: true,
        search: false,
      },
    });
  }

  onChangeSearch() {
    this.setState({
      subMenu: {
        add: false,
        edit: false,
        search: true,
      },
    });
  }

  render() {
    const {
      courses,
      blog,
      podcasts,
      settings,
      subMenu,
    } = this.state;

    let coursesVar;
    let blogVar;
    let podcastsVar;
    let settingsVar;
    let subMenuVar;
    let addVar;
    let editVar;
    let searchVar;
    let publishBlogPost;
    let uploadNewPodcast;
    let editPost;
    let editPodcast;

    if (courses || blog || podcasts || settings) {
      addVar = (
        <>
          <AdminSubButton
            onClick={this.onChangeAdd}
          >
            <FaPlus />
          </AdminSubButton>
        </>
      );
      editVar = (
        <>
          <AdminSubButton
            onClick={this.onChangeEdit}
          >
            <FaEdit />
          </AdminSubButton>
        </>
      );
      searchVar = (
        <>
          <AdminSubButton
            onClick={this.onChangeSearch}
          >
            <FaSearch />
          </AdminSubButton>
        </>
      );

      if (subMenu.add) {
        addVar = (
          <>
            <AdminSubButton
              onClick={this.onChangeAdd}
              style={{
                color: '#0058e4',
              }}
            >
              <FaPlus />
            </AdminSubButton>
          </>
        );
        if (blog) {
          publishBlogPost = (
            <>
              <PublishBlogPost />
            </>
          );
          uploadNewPodcast = (
            <>
            </>
          );
        }
        if (podcasts) {
          publishBlogPost = (
            <>
            </>
          );
          uploadNewPodcast = (
            <>
              <UploadNewPodcast />
            </>
          );
        }
      } else {
        addVar = (
          <>
            <AdminSubButton
              onClick={this.onChangeAdd}
            >
              <FaPlus />
            </AdminSubButton>
          </>
        );
      }

      if (subMenu.edit) {
        editVar = (
          <>
            <AdminSubButton
              onClick={this.onChangeEdit}
              style={{
                color: '#0058e4',
              }}
            >
              <FaEdit />
            </AdminSubButton>
          </>
        );
        if (blog) {
          publishBlogPost = (
            <>
              <EditPost />
            </>
          );
          uploadNewPodcast = (
            <>
            </>
          );
        }
        if (podcasts) {
          publishBlogPost = (
            <>
            </>
          );
          uploadNewPodcast = (
            <>
              <EditPodcast />
            </>
          );
        }
      } else {
        editVar = (
          <>
            <AdminSubButton
              onClick={this.onChangeEdit}
            >
              <FaEdit />
            </AdminSubButton>
          </>
        );
      }

      if (subMenu.search) {
        searchVar = (
          <>
            <AdminSubButton
              onClick={this.onChangeSearch}
              style={{
                color: '#0058e4',
              }}
            >
              <FaSearch />
            </AdminSubButton>
          </>
        );
      } else {
        searchVar = (
          <>
            <AdminSubButton
              onClick={this.onChangeSearch}
            >
              <FaSearch />
            </AdminSubButton>
          </>
        );
      }
    } else {
      addVar = (
        <>
        </>
      );
      editVar = (
        <>
        </>
      );
      searchVar = (
        <>
        </>
      );
    }

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
                  {' '}
                  {subMenuVar}
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
            <Column className="col-lg-1 col-md-1 col-sm-12 col-12">
              <AdminUl>
                <AdminLi2>
                  {addVar}
                </AdminLi2>
                <AdminLi2>
                  {editVar}
                </AdminLi2>
                <AdminLi2>
                  {searchVar}
                </AdminLi2>
              </AdminUl>
            </Column>
            <div className="col-lg-10 col-md-10 col-sm-12 col-12">
              {publishBlogPost}
              {uploadNewPodcast}
            </div>
          </div>
        </AdminWrapper>
      </>
    );
  }
}
