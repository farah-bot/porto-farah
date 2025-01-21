import React from "react";
                                                                                                                                                                               
const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Tech",
      duration: "Jan 2023 - Dec 2023",
      description: "lorem ipsum blalalalalalaalalalala",
    },
    {
      title: "Backend Developer",
      company: "Code",
      duration: "Feb 2022 - Dec 2022",
      description: "lorem ipsum blalalalalalaalalalala",
    },
  ];

  return (
    <div className="experience-page">
      <h1>Experience</h1>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h2>{exp.title}</h2>
            <h3>{exp.company}</h3>
            <p>{exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
