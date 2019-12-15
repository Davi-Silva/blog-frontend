/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // withRouter,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/UI/navbar/Navbar';
import Footer from './components/UI/footer/Footer';

import Admin from './pages/Admin';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Blog from './pages/Blog';
import BlogPostByTags from './pages/BlogPostsByTags';
import BlogPostByCategory from './pages/BlogPostsByCategory';
import Post from './pages/Post';
import About from './pages/About';
import Profile from './pages/Profile';
import Course from './pages/Course';
import CoursesHome from './pages/CoursesHome';
import CoursesRelatedProgram from './pages/CoursesRelatedProgram';
import CoursesCategories from './pages/CoursesCategories';
import CoursesCategory from './pages/CoursesCategory';
import MyCourses from './pages/MyCourses';
import Podcast from './pages/Podcast';
import EditPodcast from './pages/EditPodcast';
import EditPost from './pages/EditPost';
import Podcasts from './pages/Podcasts';
import PodcastsByTags from './pages/PodcastsByTags';
import PodcastsByCategory from './pages/PodcastsByCategory';
import UploadNewPodcast from './pages/UploadNewPodcast';
import PublishBlogPost from './pages/PublishBlogPost';
import PageNotFound from './pages/PageNotFound';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';

import UserProvider from './contexts/UserProvider';

function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Route path="/" exact component={Homepage} />
        <Route path="/admin" component={Admin} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route path="/terms-and-conditions" component={TermsConditions} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route exact path="/course/:slug" component={Course} />
        <Route exact path="/courses" component={CoursesHome} />
        <Route
          exact
          path="/courses/program/:slug"
          render={(props) => <CoursesRelatedProgram {...props} />}
        />
        <Route path="/courses/categories" component={CoursesCategories} />
        <Route path="/courses/category" component={CoursesCategory} />
        <Route path="/my-courses" component={MyCourses} />
        <Route exact path="/podcasts" component={Podcasts} />
        <Route
          exact
          path="/podcast/:slug"
          render={(props) => <Podcast {...props} />}
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
      </UserProvider>
    </Router>
  );
}

export default App;
