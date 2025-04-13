import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "../styles/Contact.css";
// import config from "../config/constants.json";


const Contact = ({ config }) => {
  const emailJSConfig = config.contactUs;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        emailJSConfig.service_id,
        emailJSConfig.template_id,
        e.target,
        emailJSConfig.public_key
      )
      .then(
        (result) => {
          console.log('SUCCESS:', result.text);
        },
        (error) => {
          console.log('FAILED:', error.text);
        }
      );
  };

  return (
    <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
      <input type="hidden" name="time" value={new Date().toString()} />
      
      <label className="contact-label">Name</label>
      <input
        type="text"
        name="name"
        className="contact-input"
        value={formData.name}
        onChange={handleChange}
        required
      />
      
      <label className="contact-label">Email</label>
      <input
        type="email"
        name="email"
        className="contact-input"
        value={formData.email}
        onChange={handleChange}
        required
      />
      
      <label className="contact-label">Subject</label>
      <input
        type="text"
        name="title"
        className="contact-input"
        value={formData.title}
        onChange={handleChange}
        required
      />
      
      <label className="contact-label">Message</label>
      <textarea
        name="message"
        className="contact-textarea"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      
      <input type="submit" className="contact-submit" value="Send" />
    </form>
  );
};

export default Contact;
