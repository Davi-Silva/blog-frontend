
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';

import {
  FaLaptopCode,
  FaBlog,
  FaPodcast,
  FaCog,
  FaPlus,
  FaSearch,
  // FaEdit,
  FaListUl,
  FaSpinner,
} from 'react-icons/fa';


import PublishBlogPost from './PublishBlogPost';
import UploadNewPodcast from './UploadNewPodcast';
// import EditPost from './EditPost';
// import EditPodcast from './EditPodcast';

import BlogPostContent from '../components/admin/panel/content/blog/blogContent.component';
import PodcastContent from '../components/admin/panel/content/podcast/podcastContent.component';

import {
  Column,
  AdminWrapper,
  AdminUl,
  AdminLi,
  AdminLi2,
  AdminButton,
  AdminSubButton,
  LoadingAllContent,
} from '../styled-components/admin.styled-components';

const Admin = (props) => {
  const user = useSelector((state) => state.user);
  const [coursesState, setCoursesState] = useState({
    courses: false,
  });
  const [blogState, setBlogState] = useState({
    blog: false,
  });
  const [podcastsState, setPodcastsState] = useState({
    podcasts: false,
  });
  const [settingsState, setSettingsState] = useState({
    settings: false,
  });
  const [subMenuState, setSubMenuState] = useState({
    subMenu: {
      add: false,
      edit: false,
      search: false,
    },
  });
  const {
    history,
  } = props;

  const onChangeCourse = () => {
    setCoursesState({
      courses: !coursesState.courses,
    });
    setBlogState({
      blog: false,
    });
    setPodcastsState({
      podcasts: false,
    });
    setSettingsState({
      settings: false,
    });
    setSubMenuState({
      subMenu: {
        add: false,
        edit: false,
        search: false,
      },
    });
  };

  const onChangeBlog = () => {
    setCoursesState({
      courses: false,
    });
    setBlogState({
      blog: !blogState.blog,
    });
    setPodcastsState({
      podcasts: false,
    });
    setSettingsState({
      settings: false,
    });
    setSubMenuState({
      subMenu: {
        add: false,
        edit: false,
        search: false,
      },
    });
  };

  const onChangePodcasts = () => {
    setCoursesState({
      courses: false,
    });
    setBlogState({
      blog: false,
    });
    setPodcastsState({
      podcasts: !podcastsState.podcasts,
    });
    setSettingsState({
      settings: false,
    });
    setSubMenuState({
      subMenu: {
        add: false,
        edit: false,
        search: false,
      },
    });
  };

  const onChangeSettings = () => {
    setCoursesState({
      courses: false,
    });
    setBlogState({
      blog: false,
    });
    setPodcastsState({
      podcasts: false,
    });
    setSettingsState({
      settings: !settingsState.settings,
    });
    setSubMenuState({
      subMenu: {
        add: false,
        edit: false,
        search: false,
      },
    });
  };

  const onChangeAdd = () => {
    setSubMenuState({
      subMenu: {
        add: !subMenuState.add,
        edit: false,
        search: false,
      },
    });
  };

  const onChangeEdit = () => {
    setSubMenuState({
      subMenu: {
        add: false,
        edit: !subMenuState.edit,
        search: false,
      },
    });
  };


  const onChangeSearch = () => {
    setSubMenuState({
      subMenu: {
        add: false,
        edit: false,
        search: !subMenuState.search,
      },
    });
  };


  let content;
  let coursesVar;
  let blogVar;
  let podcastsVar;
  let settingsVar;
  let subMenuVar;
  let addVar;
  let listAllVar;
  let searchVar;
  let allBlogPost;
  let allPodcast;
  // let editPost;
  // let editPodcast;
  const {
    courses,
  } = coursesState;
  const {
    blog,
  } = blogState;
  const {
    podcasts,
  } = podcastsState;
  const {
    settings,
  } = settingsState;
  const {
    subMenu,
  } = subMenuState;

  if (user.loading) {
    content = (
      <>
        <LoadingAllContent>
          <FaSpinner />
        </LoadingAllContent>
      </>
    );
  } else if (user.fetched) {
    if (!_.isEmpty(user.data)) {
      if (courses || blog || podcasts || settings) {
        addVar = (
          <>
            <AdminSubButton
              onClick={onChangeAdd}
            >
              <FaPlus />
            </AdminSubButton>
          </>
        );
        searchVar = (
          <>
            <AdminSubButton
              onClick={onChangeSearch}
            >
              <FaSearch />
            </AdminSubButton>
          </>
        );

        if (subMenu.add) {
          addVar = (
            <>
              <AdminSubButton
                onClick={onChangeAdd}
                style={{
                  color: '#e0b528',
                }}
              >
                <FaPlus />
              </AdminSubButton>
            </>
          );
          if (blog) {
            allBlogPost = (
              <>
                <PublishBlogPost History={history} userInfo={user.data} />
              </>
            );
            allPodcast = (
              <>
              </>
            );
          }
          if (podcasts) {
            allBlogPost = (
              <>
              </>
            );
            allPodcast = (
              <>
                <UploadNewPodcast History={history} />
              </>
            );
          }
        } else {
          addVar = (
            <>
              <AdminSubButton
                onClick={onChangeAdd}
              >
                <FaPlus />
              </AdminSubButton>
            </>
          );
        }

        if (subMenu.edit) {
          listAllVar = (
            <>
              <AdminSubButton
                onClick={onChangeEdit}
                style={{
                  color: '#e0b528',
                }}
              >
                <FaListUl />
              </AdminSubButton>
            </>
          );
          if (blog) {
            allBlogPost = (
              <>
                <BlogPostContent />
              </>
            );
            allPodcast = (
              <>
              </>
            );
          }
          if (podcasts) {
            allBlogPost = (
              <>
              </>
            );
            allPodcast = (
              <>
                <PodcastContent />
              </>
            );
          }
        } else {
          listAllVar = (
            <>
              <AdminSubButton
                onClick={onChangeEdit}
              >
                <FaListUl />
              </AdminSubButton>
            </>
          );
        }


        if (subMenu.search) {
          searchVar = (
            <>
              <AdminSubButton
                onClick={onChangeSearch}
                style={{
                  color: '#e0b528',
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
                onClick={onChangeSearch}
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
        listAllVar = (
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
              onClick={onChangeCourse}
              style={{
                color: '#e0b528',
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
              onClick={onChangeCourse}
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
              onClick={onChangeBlog}
              style={{
                color: '#e0b528',
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
              onClick={onChangeBlog}
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
              onClick={onChangePodcasts}
              style={{
                color: '#e0b528',
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
              onClick={onChangePodcasts}
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
              onClick={onChangeSettings}
              style={{
                color: '#e0b528',
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
              onClick={onChangeSettings}
            >
              <FaCog />
              <span>
                  Settings
              </span>
            </AdminButton>
          </>
        );
      }
      content = (
        <>
          <AdminWrapper className="container-fluid">
            <div className="row">
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
                    {searchVar}
                  </AdminLi2>
                  <AdminLi2>
                    {listAllVar}
                  </AdminLi2>
                </AdminUl>
              </Column>
              <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                {allBlogPost}
                {allPodcast}
              </div>
            </div>
          </AdminWrapper>
        </>
      );
    } else {
      history.push('/');
    }
  }


  return (
    <>
      {content}
    </>
  );
};

export default Admin;
