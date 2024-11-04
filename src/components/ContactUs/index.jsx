import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import thankYou from "../../static/thankYou.png";
import "./styles.css";

export const ContactUs = () => {
    const [success, setSuccess] = useState(false);
    const [formDisabled, setFormDisabled] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (formDisabled) {
            return; // Prevent resubmission if form is already disabled
        }

        emailjs
            .sendForm('service_v0skxgc', 'template_4d88j8t', form.current, {
                publicKey: 'T538ds27_NLuSZJzd',
            })
            .then(
                (response) => {
                    if (response.status === 200) {
                        setSuccess(true);
                        setFormDisabled(true); // Disable the form
                        form.current.reset(); // Clear the form
                    }
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    const closePopup = () => {
        setSuccess(false);
    };

    return (
        <div>
            {!formDisabled ? (
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
                        <button className="app-form-button" type="button">CANCEL</button>
                        <button className="app-form-button" type="submit" value="Send">SEND</button>
                    </div>
                </form>
            ) : (
                <p className="already-sent">You have already sent a message.</p>
            )}

            {success && (
                <div className="popupContainer">
                    <div className="backContainer">
                        <div className="popupContent" id="thankYouPopup">
                            <button className="close" onClick={closePopup}>✖</button>
                            <img className="thanksImg" src={thankYou} alt="Thank You" />
                            <p className="popupText">Thank you for connecting with me! Your message has been sent successfully.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactUs;
