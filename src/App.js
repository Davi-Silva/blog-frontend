import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/layouts/Navbar.component";
import Footer from "./components/layouts/Footer.component";

import Admin from "./pages/admin.component";
import Homepage from "./pages/homepage.component";
import Login from "./pages/login.component";
import Register from "./pages/register.component";
import Dashboard from "./pages/dashboard.component";
import BlogHome from "./pages/blog-home.component";
import About from "./pages/about.component";
import Profile from "./pages/Profile";
import UserProvider from "./contexts/UserProvider";
import history from "./history";

function App() {
  return (
    <Router history={history}>
      <Navbar />
      <Route path="/" exact component={Homepage} />
      <Route path="/admin" component={Admin} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/blog" component={BlogHome} />
      <Route path="/about" component={About} />
      <UserProvider>
        <Route path="/profile" component={Profile} />
      </UserProvider>
      <Footer />
    </Router>
  );
}

export default App;
