import React from 'react';
// import './styles.css';

const ProjectDetails = () => {
  const projectData = [
    {
      title: 'Fast, secure, global',
      description: 'Quickly process global crypto transactions with robust security and efficiency.',
      icon: '🔒',
    },
    {
      title: 'Smart Payments',
      description: 'AI-based payment automation with instant reporting and insights.',
      icon: '🤖',
    },
    {
      title: 'Blockchain Integrated',
      description: 'Next-gen apps with built-in blockchain authentication and logging.',
      icon: '🧱',
    },
    {
      title: 'Cloud Scalable',
      description: 'Scale on-demand with cloud-native architecture.',
      icon: '☁️',
    },
  ];

  return (
    <div className="project-wrapper">
      {projectData.map((project, idx) => (
        <div className="card-container" key={idx}>
          <div className="glow-bg" />
          <div className="card-content">
            <div className="card-icon">{project.icon}</div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href="#">Learn more</a>
            <div className="view-details">View Details</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetails;
