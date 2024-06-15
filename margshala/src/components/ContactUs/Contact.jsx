import React from 'react';
import './Contact.css';
import Contact from '../../Image/bg1.png';

const ContactUs = () => {
    return (
        <div className="contact-form">
            <h1></h1>
            <div className="container">
                <div className="main">
                    <div className="content">
                        <h2>Contact Us</h2>
                        <form action="#" method="post">
                            <input type="text" name="name" placeholder="Enter Your Name" />
                            <input type="email" name="email" placeholder="Enter Your Email" />
                            <textarea name="message" placeholder="Your Message"></textarea>
                            <button type="submit" className="btn">Send <i className="fas fa-paper-plane"></i></button>
                        </form>
                    </div>
                    <div className="form-img">
                        <img src={Contact} alt="Form Background" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;