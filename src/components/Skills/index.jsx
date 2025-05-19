import React from "react";
import "./styles.css";
import ProgressBar from "../ProgressBar";

const Skills = () => {
  return (
    <div className="skills-wrapper" id="skills">
      <h1 className="heading">Skills</h1>
      <div className="grid-wrapper">
        <div className="card">
          <ProgressBar subject="HTML" percentage="95%" icon="fa-brands fa-html5" />
        </div>
        <div className="card">
          <ProgressBar subject="CSS3" percentage="95%" icon="fa-brands fa-css3-alt" />
        </div>
        <div className="card">
          <ProgressBar subject="JavaScript" percentage="100%" icon="fa-brands fa-square-js" />
        </div>
        <div className="card">
          <ProgressBar subject="React.js" percentage="90%" icon="fa-brands fa-react" />
        </div>
        <div className="card">
          <ProgressBar subject="Next.js" percentage="85%" icon="fa-brands fa-react" />
        </div>
        <div className="card">
          <ProgressBar subject="React Native" percentage="85%" icon="fa-brands fa-react" />
        </div>
        <div className="card">
          <ProgressBar subject="Node.js" percentage="80%" icon="fa-brands fa-node" />
        </div>
        <div className="card">
          <ProgressBar subject="MySQL" percentage="85%" icon="fa-solid fa-database" />
        </div>
        <div className="card">
          <ProgressBar subject="REST APIs" percentage="90%" icon="fa-solid fa-network-wired" />
        </div>
        <div className="card">
          <ProgressBar subject="Redux" percentage="80%" icon="fa-brands fa-js" />
        </div>
        <div className="card">
          <ProgressBar subject="Styled Components" percentage="75%" icon="fa-solid fa-paintbrush" />
        </div>
        <div className="card">
          <ProgressBar subject="Python" percentage="95%" icon="fa-brands fa-python" />
        </div>
        <div className="card">
          <ProgressBar subject="C++" percentage="100%" icon="fa-solid fa-code" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
