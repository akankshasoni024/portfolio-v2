import "./styles.css";
import React from "react";
import headerImg from "../../static/headerImg.jpeg";

const Header = () => {

    return (
        <div className="wrapper">

            <div className="flex-wrapper">
                <div className="text-wrapper">
                    <div className="heading">Hi There,</div>
                    <div className="name fullname">I'm Akanksha <span className="surname">Soni</span></div>
                    <div className="sub-heading"> I am into <span className="work" >Web Development</span> </div>
                    <button className="aboutme-button">About Me </button>
                    <div className="social-icon-container">
                        <div className="social-icon"><i className="fa-brands fa-linkedin-in"></i></div>
                        <div className="social-icon"><i className="fa-brands icon fa-instagram"></i></div>
                        <div className="social-icon"><i className="fa-brands icon fa-whatsapp"></i></div>
                        <div className="social-icon"><i className="fa-regular fa-envelope"></i></div>
                        <div className="social-icon"><i className="fa-brands fa-github"></i></div>
                        <div className="social-icon"><i className="fa-brands fa-telegram"></i></div>
                    </div>
                </div>
                <div className="image-wrapper">
                    <img className="img-container" src={headerImg} alt="Akanksha Soni" />
                </div>
            </div>
        </div >
    )
}

export default Header;

