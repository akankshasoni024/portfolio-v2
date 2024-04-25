import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import thankYou from "../../static/thankYou.png";
import "./styles.css";

export const ContactUs = () => {
    const [success, setSuccess] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_v0skxgc', 'template_4d88j8t', form.current, {
                publicKey: 'T538ds27_NLuSZJzd',
            })
            .then(
                (response) => {
                    response.status === 200 && setSuccess(true)
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <div className="app-form-group">
                    <input className="app-form-control" id="name" placeholder="NAME" type="text" name="from_name" autoComplete="username" required />
                </div>
                <div className="app-form-group">
                    <input className="app-form-control" id="email" placeholder="EMAIL" type="email" name="from_email" autoComplete="email" required />
                </div>
                <div className="app-form-group">
                    <input className="app-form-control" id="phone" placeholder="CONTACT NO" type="phone" name="phone" autoComplete="phone" required />
                </div>
                <div className="app-form-group message">
                    <input className="app-form-control" id="message" placeholder="MESSAGE" name="message" autoComplete="message" required />
                </div>
                <div className="app-form-group buttons">
                    <button className="app-form-button">CANCEL </button>
                    <button className="app-form-button" type="submit" value="Send" id="openModal" > SEND</button>
                </div>
            </form>

            {/* {success && */}
            <div className="popupContainer">
                <div className='backContainer'>
                    <div className="popuContent" id="cookiesPopup">
                        <button className="close">✖</button>
                        <img className="thanksImg" src={thankYou} alt="cookies-img" />
                        <p className="popupContent">Thank You for connecting with me! Your message sent successfully.</p>
                        {/* <button className="accept">Ok</button> */}
                    </div>
                </div>
            </div>
            {/* } */}
        </div>
    );
};

export default ContactUs;