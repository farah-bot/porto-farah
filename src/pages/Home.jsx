import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import '../styles/Home.css';

const Home = () => {
  return (
    <>
      <div className="hello-section">
        <img src="assets/images/farah.png" alt="Farah" className="hello-image" />
        <h1 className="hello-heading">
          I'm <span className="highlight">Farah</span>,
        </h1>
        <h1 className="hello-heading-it">
          IT Enthusiast
        </h1>
        {/* <p>lorem ipsum blalalalalalaalalalala</p> */}
      </div>

      <div className="service-cards">
        <div className="service-cards-header">
          <h2>My Services</h2>
          <p>lorem ipsum blalalalalalaalalalala</p>
        </div>
        <div className="service-card-container">
          <ServiceCard
            title="Web Development"
            imageSrc="assets/images/farah.png"
            iconSrc="assets/icons/service-bg.png"
          />
          <ServiceCard
            title="App Development"
            imageSrc="assets/images/app-development.jpg"
            iconSrc="assets/icons/app-icon.png"
          />
          <ServiceCard
            title="App Development"
            imageSrc="assets/images/app-development.jpg"
            iconSrc="assets/icons/app-icon.png"
          />
          <ServiceCard
            title="App Development"
            imageSrc="assets/images/app-development.jpg"
            iconSrc="assets/icons/app-icon.png"
          />
        </div>
      </div>

      <div className="experience-section">
        <h2>My Experience</h2>
        <div className="experience-container">
          <div className="experience-card">
            <h3>Frontend Developer</h3>
            <p>lorem ipsum blalalalalalaalalalala</p>
          </div>
          <div className="experience-card">
            <h3>Backend Developer</h3>
            <p>lorem ipsum blalalalalalaalalalala</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Projects</h2>
        <p>lorem ipsum blalalalalalaalalalala</p>
        <Link to="/projects" className="see-all-link">See All</Link>
      </div>
    </>
  );
};

export default Home;
