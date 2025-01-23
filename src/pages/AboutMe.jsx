import React from 'react';
import '../components/AboutMe.css';

const AboutMe = () => {
  return (
    <div className="aboutme-container">
      <div className="aboutme-header">
        <h1>About Me</h1>
      </div>

      <div className="contact-info">
        <p>
          FARAH FAIRUZ |
          <a href="mailto:farahfairuz00@gmail.com">farahfairuz00@gmail.com</a> | 
          <a href="https://www.linkedin.com/in/farah-fairuz" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
          <a href="https://github.com/farah-bot" target="_blank" rel="noopener noreferrer">GitHub</a> |  
          Lumajang
        </p>
      </div>

      <div className="summary">
        <h2>Summary</h2>
        <p>
          I am an Information Technology student at the Faculty of Computer Science, University of Jember, with a strong passion for cybersecurity, web development, and design. 
          My academic and extracurricular experiences have equipped me with a solid skill set in these areas. I have a proven track record of success in competitive environments, 
          having won awards in cybersecurity and animation. Currently, I serve as the Secretary of UKM LAOS, where I demonstrate strong leadership and organizational skills.
        </p>
      </div>

      <div className="education">
        <h2>Education</h2>
        <p>
          <strong>University of Jember</strong> - Jember <br />
          Bachelor's in Information Technology | IPK: 3.89 / 4.00 <br />
          2022 - Present <br />
          Recipient of Generasi Baru Indonesia (GenBI) Scholarship 2024.
        </p>
      </div>

      <div className="certification">
        <h2>Certification</h2>
        <p>
          Ethical Hacking Essentials (EHE), EC-Council, Number: 324701, 2024 <br />
          Network Defense Essentials (NDE), EC-Council, Number: 324708, 2024
        </p>
      </div>

      <div className="award">
        <h2>Award</h2>
        <p>
          1st Place, Capture The Flag (CTF) Competition, Laos Arena, UKM LAOS (Linux and Open Source), 2023 <br />
          1st Place, Animation Competition, ITEC, HIMATIF University of Jember, 2023
        </p>
      </div>

      <div className="skills">
        <h2>Skills</h2>
        <h3>Hard Skills:</h3>
        <p>Cyber Security, Graphic Design, Digital Art, Web Development, IoT Systems, Database Management, Cloud Computing, Networking, Control Systems, UI/UX.</p>
        
        <h3>Soft Skills:</h3>
        <p>Creativity, Time Management, Problem Solving, Communication, Team Collaboration.</p>

        <h3>Software Skills:</h3>
        <p>Linux, Python, VS Code, Adobe Illustrator, Ibis Paint, Figma, Trello, Maze, Arduino IDE, MySQL, Postman, Burp Suite, Docker, Git.</p>
      </div>
    </div>
  );
};

export default AboutMe;
