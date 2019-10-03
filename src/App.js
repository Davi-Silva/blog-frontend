import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/UI/Navbar.component";
import Footer from "./components/UI/Footer.component";

import Admin from "./pages/Admin";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import BlogHome from "./pages/BlogHome";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Course from "./pages/Course";
import CoursesCategories from "./pages/CoursesCategories";
import CoursesCategory from "./pages/CoursesCategory";
import CoursesList from "./pages/CoursesList";
import Podcast from "./pages/Podcast";

import UserProvider from "./contexts/UserProvider";
// import history from "./history";

function App() {
	return (
		<Router>
			<UserProvider>
				<Navbar />
				<Route path="/" exact component={Homepage} />
				<Route path="/admin" component={Admin} />
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/blog" component={BlogHome} />
				<Route path="/about" component={About} />
				<Route path="/profile" component={Profile} />
				<Route path="/course" component={Course} />
				<Route path="/courses/categories" component={CoursesCategories} />
				<Route path="/courses/category" component={CoursesCategory} />
				<Route path="/courses" component={CoursesList} />
				<Route path="/podcast" component={Podcast} />
			</UserProvider>
			<Footer />
		</Router>
	);
}

export default App;
