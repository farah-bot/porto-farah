import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import '../styles/Home.css';

const Home = () => {
  const services = [
    {
      title: 'Web Development',
      imageSrc: './assets/images/web.png',
    },
    {
      title: 'UI/UX Design',
      imageSrc: './assets/images/uiux.png',
    },
    {
      title: 'Cloud Computing',
      imageSrc: './assets/images/cc.png',
    },
        {
      title: 'Graphic Design',
      imageSrc: './assets/images/gd.png',
    },
  ];

  const experiences = [
    {
      title: 'Frontend Developer',
      description: 'Developed responsive and dynamic user interfaces for web applications.',
    },
    {
      title: 'Backend Developer',
      description: 'Built scalable server-side applications and RESTful APIs.',
    },
    {
      title: 'DevOps Engineer',
      description: 'Managed cloud infrastructure and automated deployment pipelines.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <header className="hello-section">
        <img src="./porto-farah/assets/images/farah.png" alt="Farah's Profile" className="hello-image" />
        <h1 className="hello-heading">
          I'm <span className="highlight">Farah</span>,
        </h1>
        <h1 className="hello-heading-it">IT Enthusiast</h1>
      </header>

      {/* Services Section */}
      <section className="service-cards">
        <div className="service-cards-header">
          <h2>My Services</h2>
          <p>I provide services in web development, UI design, graphic desi</p>
        </div>
        <div className="service-card-container">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      {/* <section className="experience-section">
        <h2>My Experience</h2>
        <div className="experience-container">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
              <h3>{exp.title}</h3>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </section> */}
{/* Portfolio Section */}
<section className="portfolio-section">
  <div className="portfolio-content">
          <h2>Let’s have a look at my Portfolio</h2>
    <Link to="/projects" className="see-all-link">
      See All
    </Link>
  </div>

  <div className="portfolio-cards">
    <div className="portfolio-card">
      <img src="/path/to/project1.jpg" alt="Project 1" />
      <h3>BajetBijak</h3>
      <p>Brief description of Project 1.</p>
    </div>
    <div className="portfolio-card">
      <img src="/path/to/project2.jpg" alt="Project 2" />
      <h3>Project Title 2</h3>
      <p>Brief description of Project 2.</p>
    </div>
    <div className="portfolio-card">
      <img src="/path/to/project3.jpg" alt="Project 3" />
      <h3>Project Title 3</h3>
      <p>Brief description of Project 3.</p>
    </div>
  </div>
</section>

    </>
  );
};

export default Home;
