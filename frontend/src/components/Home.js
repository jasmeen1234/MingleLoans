import React, { useState } from "react";
import { Link } from "react-router-dom";
import './home.css'; // Assuming this file exists with the styling
import Login from "./Login"; // Importing the Login component (if necessary)
import Footer from "./Footer";
import MainContent from "./MainContent";

let userInfo = {
  email: "",
  username: "",
  firstName: "",
  profileImage: "",
  token: "",
  refreshToken: ""
};

const Home = () => {
  const [user, setUser] = useState(userInfo);

  return (
    <div className="page-container">
      {/* Header Section */}
      <header className="header">
        <div className="logo-container">
          <a href="/">
            <img
              src="https://mingleloans.com/assets/mingleloan-xuMOeewO.svg"
              alt="Logo"
              className="logo"
            />
          </a>
        </div>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/login" className="nav-link">Login</Link>
        </nav>
      </header>

      {/* Main Content */}
      <div className="main-content">
        <MainContent/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
