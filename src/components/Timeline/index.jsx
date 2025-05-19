import React from "react";
import "./styles.css";

const Timeline = () => {
  return (
    <div className="timelineContainer">
    <h1 className="heading" style={{textAlign:'center',padding:'2rem'}}>My Journey</h1>
      <ul>
        <li style={{ "--accent-color": "#41516C" }}>
          <div className="date">Bachelor of Engineering </div>
          <div className="title">2023 – Present </div>
          <div className="descr">
            Computer Science Engineering student at MBM University, Jodhpur,
            maintaining a 9.08 GPA with a strong focus on software development.
          </div>
        </li>
        <li style={{ "--accent-color": "#215807" }}>
          <div className="date">Software Development Internship</div>
          <div className="title">June 2024 - August 2024</div>
          <div className="descr">
            Software Development Intern at Gigagrid Systems, Jaipur, developing
            scalable and high-performance web and mobile applications using
            React.js, Next.js, and React Native.
          </div>
        </li>
        <li style={{ "--accent-color": "#1B5F8C" }}>
          <div className="date">Application Development Internship</div>
          <div className="title">June 2024 - August 2024</div>
          <div className="descr">
            Application Development Intern at DRDO, Jodhpur, developed a
            cross-platform React Native app with Figma-to-code UI integration.
          </div>
        </li>
        <li style={{ "--accent-color": "#4CADAD" }}>
          <div className="date">Frontend Development Internship</div>
          <div className="title">Nov 2022 - May 2023</div>
          <div className="descr">
            Frontend Developer Intern at Yapita Health Pvt. Ltd., Gurgaon, where
            I built responsive web applications using Next.js, React.js, Redux,
            Styled Components, and CSS3.
          </div>
        </li>
        <li style={{ "--accent-color": "#FBCA3E" }}>
          <div className="date">Diploma In Computer Science</div>
          <div className="title">2020 – 2023 </div>
          <div className="descr">
            Completed a Diploma from Birla Technical Training Institute, Pilani
            (BTTI) with a 9.83 GPA, developing strong computer skills in
            programming, hardware, and software fundamentals.
          </div>
        </li>
        <li style={{ "--accent-color": "#E24A68" }}>
          <div className="date">Secondary Education </div>
          <div className="title">2020 </div>
          <div className="descr">
            Completed secondary education at St. Francis Senior Secondary
            School, Ajmer, under CBSE with 88.4% marks.
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
