import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/layouts/Navbar.component";
import Footer from "./components/layouts/Footer.component";

import Admin from "./components/pages/admin.component";
import Homepage from "./components/pages/homepage.component";
import Login from "./components/pages/login.component";
import Register from "./components/pages/register.component";
import Dashboard from "./components/pages/dashboard.component";
import BlogHome from "./components/pages/blog-home.component";
import About from "./components/pages/about.component";

function App() {
	return (
		<Router>
			<Navbar />
			<Route path="/" exact component={Homepage} />
			<Route path="/admin" component={Admin} />
			<Route path="/dashboard" component={Dashboard} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
			<Route path="/blog" component={BlogHome} />
			<Route path="/about" component={About} />
			<Footer />
		</Router>
	);
}

export default App;
