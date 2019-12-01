import React from 'react';
import {
  BrowserRouter as Router,
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
import Post from './pages/Post';
import About from './pages/About';
import Profile from './pages/Profile';
import Course from './pages/Course';
import CoursesCategories from './pages/CoursesCategories';
import CoursesCategory from './pages/CoursesCategory';
import CoursesList from './pages/CoursesList';
import Podcast from './pages/Podcast';
import EditPodcast from './pages/EditPodcast';
import EditPost from './pages/EditPost';
import Podcasts from './pages/Podcasts';
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
        <Route path="/course" component={Course} />
        <Route path="/courses/categories" component={CoursesCategories} />
        <Route path="/courses/category" component={CoursesCategory} />
        <Route path="/courses" component={CoursesList} />
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
          // render={(props) => <Post {...props} />}
        />
        <Route
          exact
          path="/blog/tags/:slug"
          component={BlogPostByTags}
        />
        <Route
          exact
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
      </UserProvider>
      <Footer />
    </Router>
  );
}

export default App;
