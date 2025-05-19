import React from "react";
import "./styles.css";
import akankshaImg from "../../static/akankshaImg.jpeg";

const AboutComponent = () => {
  return (
    <div className="card-container" id="about">
      <div className="flexbox">
        <div className="image-wrapper">
          <img src={akankshaImg} alt="Akanksha Soni" className="profile-image" />
        </div>
        <div className="text-wrapper">
          <h2 className="heading">About Me</h2>
          <h3 className="fullname1">
            I'm Akanksha <span className="surname">Soni</span>
          </h3>
          <p className="sub-heading">
            I am a passionate full-stack developer and Computer
            Science Engineering student at MBM University, Jodhpur, with a
            strong academic record and hands-on experience across multiple
            internships and projects. Throughout my journey, I have developed
            robust web and mobile applications using React.js, Next.js, React
            Native, and Node.js, combined with efficient backend integration and
            database management with MySQL and REST APIs. My internships at
            Gigagrid Systems and DRDO have given me the opportunity to work on
            live client projects such as Employee Management Systems and
            cross-platform apps, where I focused on creating scalable,
            high-performance solutions with clean, maintainable code.
            Additionally, my frontend development experience at Yapita Health
            Pvt. Ltd. honed my skills in building responsive and user-friendly
            web applications using Redux, Styled Components, and modern UI/UX
            principles.
          </p>
          <button className="aboutme-button">
            <a className="navbar-link" href="#contact">
              Contact Me
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
