import React from 'react';
import '../components/AboutMe.css';

const AboutMe = () => {
  return (
    <div className="aboutme-container">
      <div className="aboutme-header">
        <h1 className="hello-heading">About Me</h1>
        <p>Here’s a detailed look at my background, education, projects, experience, and skills.</p>
      </div>

      <div className="contact-info">
        <p>
          FARAH FAIRUZ | 0889-9080-4014 | 
          <a href="mailto:farahfairuz00@gmail.com">farahfairuz00@gmail.com</a> | 
          <a href="https://www.linkedin.com/in/farah-fairuz" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
          <a href="https://github.com/farah-bot" target="_blank" rel="noopener noreferrer">GitHub</a> | 
          <a href="https://bit.ly/PortofolioFarahBI" target="_blank" rel="noopener noreferrer">Portfolio</a> | 
          JL. KYAI GHOZALI NO. 109
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
          Bachelor's in Information Technology | IPK: 3.86 / 4.00 <br />
          2022 - Present <br />
          Recipient of Generasi Baru Indonesia (GenBI) Scholarship 2024.
        </p>
      </div>

      <div className="projects">
        <h2>Projects</h2>
        <h3>Subur: Mobile Application for Rice Disease Detection Using AI</h3>
        <p>
          <strong>Cloud Computing Cohort - Bangkit Academy</strong> <br />
          Description: Developed a mobile application for detecting rice diseases using AI, leveraging machine learning models to analyze images of rice plants. As part of the Cloud Computing cohort, I was responsible for deploying the machine learning models and setting up the cloud infrastructure using Google Cloud Platform (GCP). This involved configuring services like Cloud Storage, Cloud Functions, and AI tools to ensure scalability and reliability of the system, enabling real-time disease detection and analysis through the mobile app. <br />
          Technologies Used: Machine Learning, Google Cloud Platform (GCP), Mobile Application Development.
        </p>

        <h3>Aquascape Monitoring and Control System</h3>
        <p>
          Description: Collaborative project with faculty advisor. Designed an automated system for monitoring and controlling aquariums, aimed at maintaining optimal conditions for aquatic life. The system integrates various sensors and actuators to automate the process. Collaborated closely with a faculty advisor to ensure alignment with academic objectives and practical implementation. The system is also connected to a mobile application for remote monitoring and control. <br />
          Technologies Used: Arduino, IoT, Mobile Application Development.
        </p>

        <h3>AIMS (Agro-Industrial Monitoring System)</h3>
        <p>
          <strong>Back End Developer</strong> <br />
          Description: Developed as part of a Software Engineering course, AIMS is a hydroponic system monitoring platform. My responsibilities included ensuring seamless integration between the web application, database, and IoT devices. <br />
          Technologies Used: Laravel, MySQL, Arduino, IoT sensors.
        </p>

        <h3>BajetBijak</h3>
        <p>
          <strong>UI/UX Designer</strong> <br />
          Description: Designed and developed the user interface and experience for BajetBijak, a financial tracking app. The project aimed to create an intuitive interface to help users manage their expenses and financial goals. Tools like Trello, Figma, and Maze were used for project management, design, and user testing. <br />
          Technologies Used: Trello, Figma, Maze.
        </p>
      </div>

      <div className="experience">
        <h2>Experience</h2>
        <h3>Co-PDD Proker GenBI (Personality Development)</h3>
        <p>
          <strong>Generasi Baru Indonesia (GenBI)</strong> - 2024 <br />
          Designed and coordinated programs to enhance leadership skills and personal growth among GenBI members. Oversaw task allocation, progress monitoring, and ensured smooth execution.
        </p>

        <h3>Head of UKM LAOS (Linux and Open Source)</h3>
        <p>
          <strong>UKM LAOS</strong> - 2023-2024 <br />
          Coordinated 9 programs on Linux and open-source technologies, achieving high member satisfaction and ensuring program success through effective team management.
        </p>

        <h3>Laboratory Teaching of Computer Networking</h3>
        <p>
          <strong>Infrastructure Technology Laboratory, Faculty of Computer Science, University of Jember</strong> - 2023-2024 <br />
          Assisted in the management of computer networking labs, providing student guidance and support during practical sessions.
        </p>

        <h3>Laboratory Teaching of Operating Systems</h3>
        <p>
          <strong>Infrastructure Technology Laboratory, Faculty of Computer Science, University of Jember</strong> - 2023-2024 <br />
          Supported students in learning Linux OS installation, configuration, and troubleshooting during practical sessions.
        </p>

        <h3>Head of Knowledge Development Division</h3>
        <p>
          <strong>Infrastructure Technology Laboratory</strong> - 2023 - Present <br />
          Managed educational resources and materials for the department, ensuring accessibility and effectiveness.
        </p>

        <h3>Staff of OS and Networking Division</h3>
        <p>
          <strong>UKM LAOS</strong> - 2022-2023 <br />
          Assisted in OS and networking-related technical support and participated in event organization.
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
