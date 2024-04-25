import React from "react";
import "./styles.css";
import akankshaImg from "../../static/akankshaImg.jpeg";

const AboutComponent = () => {
    return (<div className="card-container" id="about">
        <div className="flexbox">
            <div className="image-wrapper">
                <div className="image"><img src={akankshaImg} alt="Akanksha Soni" /></div>

            </div>
            <div className="text-wrapper">
                <div className="heading">About Me</div>
                <div className="name fullname">I'm Akanksha <span className="surname">Soni</span></div>
                <p className="sub-heading">
                    (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    <br />The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. </p>
                <button className="aboutme-button" ><a className="navbar-link" href="#contact">Contact Me</a> </button>

            </div>
        </div>
    </div>)
}

export default AboutComponent;