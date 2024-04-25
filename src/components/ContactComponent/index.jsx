import React from "react";
import "./styles.css";
import ContactUs from "../ContactUs";

const ContactComponent = () => {

    return (<div className="background" id="contact">
        <div className="container">
            <div className="screen">
                <div className="screen-header">
                    <div className="screen-header-left">
                        <div className="screen-header-button close"></div>
                        <div className="screen-header-button maximize"></div>
                        <div className="screen-header-button minimize"></div>
                    </div>
                    <div className="screen-header-right">
                        <div className="screen-header-ellipsis"></div>
                        <div className="screen-header-ellipsis"></div>
                        <div className="screen-header-ellipsis"></div>
                    </div>
                </div>
                <div className="screen-body">
                    <div className="screen-body-item left">
                        <div className="app-title">
                            <span>CONTACT</span>
                            <span>US</span>
                        </div>
                        <div className="app-contact" href="+91 8955370140">CONTACT INFO : 8955370140 </div>
                    </div>
                    <div className="screen-body-item">
                        <div className="app-form">
                            <ContactUs />

                        </div>
                    </div>
                </div>
            </div>

        </div >
    </div >
    )

}

export default ContactComponent;