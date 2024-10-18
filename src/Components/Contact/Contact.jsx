// import React from 'react'
import "./Contact.css";
import theme_pattern from "../../assets/logo2.png";
import mail_icon from "../../assets/mail_icon.png";
import location_icon from "../../assets/location_icon.png";
import call_icon from "../../assets/call_icon.png";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "56a8aa26-b79c-493d-9919-3ad9e5965fef");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };


  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" className="first-img"/>
        <img src={theme_pattern} alt="" className="second-img"/>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let&apos;s talk</h1>
          <p>
            I&apos;m currently avaliable to take on new projects, so feel free
            to send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>dhaliakram6@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>+8801881301400</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label >Your Name</label>
            <input type="text" placeholder="Enter your name" name="name" required/>
            <label >Your Email</label>
            <input type="email" placeholder="Enter your email" name="email" required/>
            <label >Write your message here</label>
            <textarea name="message" rows="8" placeholder="Enter your message" required></textarea>
            <button type="submit" className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
