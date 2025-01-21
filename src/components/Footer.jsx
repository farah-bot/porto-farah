import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-header">
        <div className="footer-title">Lets Connect there</div>
        <div className="footer-hire">
          <div>Hire me</div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5a964a1efe119b2a5ff4c1e9b6b2efa5b53815e96e7da0342131be7f3f711da"
            alt="Hire Me Icon"
          />
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4082530684aac96da8213df831c76c85f9e483f28f5ef39337af84d0808d37b5"
        alt="Footer Background"
        className="footer-image"
      />
      <div className="footer-content">
        <div className="footer-section about">
          <div className="social-icons">
          </div>
          <div className="about-description">
            lorem ipsum blalalalalalaalalalala
          </div>
          <div className="social-media-links">
          </div>
        </div>

        <div className="footer-section">
          <div className="section-title">Navigation</div>
          <ul className="navigation-links">
            <li>Home</li>
            <li>About Us</li>
            <li>Service</li>
            <li>Resume</li>
            <li>Project</li>
          </ul>
        </div>

        <div className="footer-section">
          <div className="section-title">Contact</div>
          <ul className="contact-details">
            <li>farahfairuz00@gmail.com</li>
          </ul>
        </div>

        <div className="footer-section subscribe">
          <div className="section-title">Get the latest information</div>
          <form className="subscribe-form">
            <input
              type="email"
              placeholder="Email Address"
              className="email-input"
            />
            <button type="submit" className="submit-button">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea3801824dd3cea21d331e5ec8661fa41d9c0b2e734cfa03556e381673a8fbdf"
                alt="Submit"
              />
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div>Copyright© 2024 Farah. All Rights Reserved.</div>
        <div>User Terms & Conditions | Privacy Policy</div>
      </div>
    </div>
  );
}

export default Footer;
