import "./styles.css";
import React from "react";
import headerImg from "../../static/headerImg.jpeg";

const Header = () => {
  return (
    <div className="wrapper">
      <div className="flex-wrapper">
        <div className="text-wrapper">
          <div className="heading">Hi There,</div>
          <div className="name fullname">
            I'm Akanksha <span className="surname"> Soni</span>
          </div>
          <div className="sub-heading">
            I am into <span className="work">Web Development</span>{" "}
          </div>
          <div className="buttons-wrapper">
          <button className="aboutme-button">
            <a className="navbar-link" href="#about">
              About me
            </a>
          </button>
         
          </div>
          <div className="social-icon-container">
  <a
    className="social-icon"
    href="https://www.linkedin.com/in/akankshasoni024/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fa-brands fa-linkedin-in"></i>
  </a>

  <a
    className="social-icon"
    href="https://www.instagram.com/akanksha_soniii"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fa-brands fa-instagram"></i>
  </a>

  <a
    className="social-icon"
    href="https://wa.me/8955370140"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fa-brands fa-whatsapp"></i>
  </a>

  <a
    className="social-icon"
    href="mailto:aakankshasoni.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fa-regular fa-envelope"></i>
  </a>

  <a
    className="social-icon"
    href="https://github.com/akankshasoni024"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fa-brands fa-github"></i>
  </a>

  <a
    className="social-icon"
    href="https://www.codechef.com/users/akankshasoni02"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fa-solid fa-code"></i>
  </a>
</div>

        </div>
        <div className="image-wrapper">
          <img className="img-container" src={headerImg} alt="Akanksha Soni" />
        </div>
      </div>
    </div>
  );
};

export default Header;
