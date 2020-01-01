
import React, { useContext, useState, useEffect } from 'react';
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
} from '../styled-components/admin.styled-components';

const Admin = (props) => {
  const userInfo = useSelector((state) => state.user.userInfo);
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
  console.log('user in admin:', userInfo);

  if (!_.isEmpty(userInfo)) {
    console.log('userInfo:', userInfo);
  }

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

  const { history } = props;

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
  console.log('coursesState:', courses);

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
              color: '#0058e4',
            }}
          >
            <FaPlus />
          </AdminSubButton>
        </>
      );
      if (blog) {
        allBlogPost = (
          <>
            <PublishBlogPost History={history} userInfo={userInfo} />
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
              color: '#0058e4',
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
    console.log('coursesState:', coursesState);
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


  return (
    <>
      <AdminWrapper
        className="container-fluid"
      >
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
};

export default Admin;
