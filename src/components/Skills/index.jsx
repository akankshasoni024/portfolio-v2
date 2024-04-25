import React from "react";
import "./styles.css";
import ProgressBar from "../ProgressBar";

const Skills = () => {
    return (<div className="skills-wrapper" id="skills">
        <h1 className="heading">
            Skills                </h1>
        <div className="grid-wrapper">
            <div className="card">
                <ProgressBar subject="HTML" percentage="95%" icon="fa-brands fa-html5" />
            </div>
            <div className="card">
                <ProgressBar subject="JavaScript" percentage="100%" icon="fa-brands fa-square-js" />
            </div>
            <div className="card">
                <ProgressBar subject=" CSS3" percentage="95%" mwidth="100%" icon="fa-brands fa-css3-alt" />
            </div>
            <div className="card">
                <ProgressBar subject="React" percentage="90%" icon="fa-brands fa-react" />
            </div>
            <div className="card">
                <ProgressBar subject="Python" percentage="95%" icon="fa-brands fa-python" />
            </div>
            <div className="card">
                <ProgressBar subject="++" percentage="100%" icon="fa-solid fa-c" />
            </div>
        </div>

    </div>)
}

export default Skills;