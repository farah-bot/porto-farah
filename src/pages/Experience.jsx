import React from 'react';
import '../components/AboutMe.css';

const Experience = () => {
  return (
    <div className="aboutme-container">
      <div className="aboutme-header">
        <h1>Experience</h1>
        <p>Showcasing my project and work experiences</p>
      </div>

      <div className="section">
        <h2>Project Experience</h2>

        <div className="project">
          <h3>Subur: Mobile Application for Rice Disease Detection Using AI</h3>
          <p><strong>Cloud Computing Cohort - Bangkit Academy</strong></p>
          <p>Developed a mobile application for detecting rice diseases using AI, leveraging machine learning models to analyze images of rice plants. As part of the Cloud Computing cohort, I was responsible for deploying the machine learning models and setting up the cloud infrastructure using Google Cloud Platform (GCP). This involved configuring services like Cloud Storage, Cloud Functions, and AI tools to ensure the scalability and reliability of the system, allowing real-time disease detection and analysis through the mobile app.</p>
          <p><strong>Technologies Used:</strong> Machine Learning, Google Cloud Platform (GCP), Mobile Application Development</p>
        </div>

        <div className="project">
          <h3>Aquascape Monitoring and Control System</h3>
          <p><strong>Programmer</strong></p>
          <p>Collaborative project with faculty advisor. Designed an automated system for monitoring and controlling aquariums, aimed at maintaining optimal conditions for aquatic life. The system integrates various sensors and actuators to automate the process. Collaborated closely with a faculty advisor to ensure alignment with academic objectives and practical implementation. Additionally, the system is connected to a mobile application for remote monitoring and control, providing users with convenient access to real-time data and adjustments.</p>
          <p><strong>Technologies Used:</strong> Arduino, IoT, Mobile Application Development</p>
        </div>

        <div className="project">
          <h3>AIMS (Agro-Industrial Monitoring System)</h3>
          <p><strong>Back End Developer</strong></p>
          <p>Developed as part of a Software Engineering (PPL) course, AIMS is a hydroponic system monitoring platform. My responsibilities included ensuring seamless integration between the web application, database, and IoT devices.</p>
          <p><strong>Technologies Used:</strong> Laravel, MySQL, Arduino, IoT sensors</p>
        </div>

        <div className="project">
          <h3>BajetBijak</h3>
          <p><strong>UI/UX Designer</strong></p>
          <p>Worked on the design and development of the user interface and user experience for BajetBijak, a financial tracking application aimed at helping users manage and monitor their expenses. The project involved designing a clean, intuitive interface to improve user interaction and overall usability. Utilized tools like Trello for project management, Figma for prototyping and design, and Maze for user testing to gather feedback and iterate on designs. The app features easy expense tracking, budget planning, and financial goal-setting functionalities.</p>
          <p><strong>Technologies Used:</strong> Trello, Figma, Maze</p>
        </div>

        <div className="project">
          <h3>Kribocu Project</h3>
          <p><strong>Designer</strong></p>
          <p>Designed all the visual materials for Kribocu, including social media designs, logos, and other assets for the entrepreneurship course.</p>
          <p><strong>Technologies Used:</strong> Adobe Illustrator, Photoshop, CapCut</p>
        </div>
      </div>

      <div className="section">
        <h2>Work Experience</h2>

        <div className="work-experience">
          <h3>Head of Knowledge Development Division</h3>
          <p><strong>Infrastructure Technology Laboratory, Faculty of Computer Science, University of Jember</strong> - 2023 - Present</p>
          <p>Participated in a Cloud Computing program focusing on cloud infrastructure, including deployment, management, and optimization of cloud systems. Gained hands-on experience with cloud architectures, services, and real-world problem-solving in collaboration with industry leaders.</p>
        </div>

        <div className="work-experience">
          <h3>Co-PDD Proker GenBI (Personality Development)</h3>
          <p><strong>Generasi Baru Indonesia (GenBI)</strong> - 2024</p>
          <p>Designed the program requirements and objectives for Personality Development initiatives aimed at enhancing personal growth and leadership skills among GenBI members. Coordinated with team members to ensure smooth workflow, task completion, and high-quality results.</p>
        </div>

        <div className="work-experience">
          <h3>Head of UKM LAOS (Linux and Open Source)</h3>
          <p><strong>UKM LAOS</strong> - 2023 - 2024</p>
          <p>Designed and coordinated 9 annual programs to enhance members' understanding of Linux and open-source technologies. Supervised daily activities, organized meetings, and conducted Capture The Flag (CTF) workshops to improve students' cybersecurity and problem-solving skills.</p>
        </div>

        <div className="work-experience">
          <h3>Laboratory Teaching of Computer Networking</h3>
          <p><strong>Infrastructure Technology Laboratory, Faculty of Computer Science, University of Jember</strong> - 2023 - 2024</p>
          <p>Assisted in setting up and managing computer networking labs, providing tutorials, offering technical support, and contributing to lab module development.</p>
        </div>

        <div className="work-experience">
          <h3>Laboratory Teaching of Operating Systems</h3>
          <p><strong>Infrastructure Technology Laboratory, Faculty of Computer Science, University of Jember</strong> - 2023 - 2024</p>
          <p>Guided students in Linux OS installations, configurations, troubleshooting, and contributed to the development of course materials and lab modules.</p>
        </div>

        <div className="work-experience">
          <h3>Staff of OS and Networking Division</h3>
          <p><strong>UKM LAOS</strong> - 2022 - 2023</p>
          <p>Provided technical support and assisted in organizing events related to OS and networking topics.</p>
        </div>
      </div>

      <div className="section">
        <h2>Certification</h2>
        <div className="certification">
          <p>Ethical Hacking Essentials (EHE), EC-Council, Number: 324701, 2024</p>
          <p>Network Defense Essentials (NDE), EC-Council, Number: 324708, 2024</p>
        </div>
      </div>

      <div className="section">
        <h2>Awards</h2>
        <div className="awards">
          <p>1st Place, Capture The Flag (CTF) Competition, Laos Arena, UKM LAOS, 2023</p>
          <p>1st Place, Animation Competition, ITEC, HIMATIF University of Jember, 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
