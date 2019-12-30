/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Provider } from 'react-redux';
import Navbar from './components/UI/navbar/Navbar';
import Footer from './components/UI/footer/Footer';

import Admin from './pages/Admin';
import RegisterAdmin from './pages/RegisterAdmin';

import Homepage from './pages/Homepage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Profile from './pages/Profile';
import PublicProfile from './pages/PublicProfile';

import Blog from './pages/blog/Blog';
import BlogPostByTags from './pages/blog/BlogPostsByTags';
import BlogPostByCategory from './pages/blog/BlogPostsByCategory';
import Post from './pages/blog/Post';

import Course from './pages/courses/Course';
import CoursesHome from './pages/courses/CoursesHome';
import CoursesRelatedProgram from './pages/courses/CoursesRelatedProgram';
import CoursesRelatedPrograms from './pages/courses/CoursesRelatedPrograms';
import CoursesCategories from './pages/courses/CoursesCategories';
import CoursesCategory from './pages/courses/CoursesCategory';
import MyCourses from './pages/courses/MyCourses';

import Podcast from './pages/podcasts/Podcast';
import EditPodcast from './pages/EditPodcast';
import EditPost from './pages/blog/EditPost';
import Podcasts from './pages/podcasts/Podcasts';
import PodcastsByTags from './pages/podcasts/PodcastsByTags';
import PodcastsByCategory from './pages/podcasts/PodcastsByCategory';
import UploadNewPodcast from './pages/UploadNewPodcast';
import PublishBlogPost from './pages/PublishBlogPost';
import PageNotFound from './pages/PageNotFound';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';

import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Route path="/" component={Navbar} />
        <Route exact path="/admin/register" component={RegisterAdmin} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/course/:slug" component={Course} />
        <Route exact path="/courses" component={CoursesHome} />
        <Route
          exact
          path="/courses/program/:slug"
          component={CoursesRelatedProgram}
        />
        <Route
          exact
          path="/courses/programs"
          component={CoursesRelatedPrograms}
        />
        <Route path="/courses/categories" component={CoursesCategories} />
        <Route path="/courses/category/:slug" component={CoursesCategory} />
        <Route path="/my-courses" component={MyCourses} />

        <Route path="/" exact component={Homepage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route path="/user/:user" component={PublicProfile} />
        <Route path="/terms-and-conditions" component={TermsConditions} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />

        <Route exact path="/podcasts" component={Podcasts} />
        <Route
          exact
          path="/podcast/:slug"
          component={Podcast}
        />

        <Route
          exact
          path="/blog"
          component={Blog}
        />
        <Route
          exact
          path="/blog/:slug"
          component={Post}
        />
        <Route
          exact
          path="/blog/tags/:slug"
          component={BlogPostByTags}
        />
        <Route
          exact
          path="/blog/category/:slug"
          component={BlogPostByCategory}
        />
        <Route
          exact
          path="/podcasts/tags/:slug"
          component={PodcastsByTags}
        />
        <Route
          exact
          path="/podcasts/category/:slug"
          component={PodcastsByCategory}
        />
        <Route
          exacth
          path="/edit/podcast/:slug"
          render={(props) => <EditPodcast {...props} />}
        />
        <Route
          exact
          path="/edit/post/:slug"
          render={(props) => <EditPost {...props} />}
        />
        <Route exact path="/404" component={PageNotFound} />
        <Route path="/upload/podcast" component={UploadNewPodcast} />
        <Route path="/publish/blog" component={PublishBlogPost} />
        <Footer />
      </Provider>
    </Router>
  );
}

export default App;
