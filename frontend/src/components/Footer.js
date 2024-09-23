import React from 'react';
import './Footer.css'; // Assuming CSS file is named footer.css

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Logo and description */}
        <div className="footer-section">
          <img
            src="https://mingleloans.com/assets/mingleloan-xuMOeewO.svg"
            alt="Mingle Loans Logo"
            className="footer-logo"
          />
          <p className="footer-description">
            At MingleLoans, we’re always happy to help you reduce your debt and achieve your financial goals. 
            As one of the top loan providers in India, we’ve been assisting clients for over 20 years in obtaining 
            instant loans. Our expertise allows us to make loan provision efficient and seamless.
          </p>
          <div className="footer-socials">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h3>MINGLELOANS</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Expert Services</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-section">
          <h3>LEGAL</h3>
          <ul>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h3>CONTACT</h3>
          <address>
            MINGLELOANS, 264, <br />
            Udyog Vihar Phase 1, <br />
            Udyog Vihar, Sector 20, <br />
            Gurugram, Pin 122016 <br />
            <a href="mailto:info@mingleloans.com">info@mingleloans.com</a><br />
            <a href="mailto:support@mingleloans.com">support@mingleloans.com</a>
          </address>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
