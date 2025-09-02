import React, { useState } from "react";
import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    if (message.length < 10) {
      setError("Message should be at least 10 characters.");
      return;
    }

    setError("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    console.log("Message sent:", formData);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <h1>Get in Touch with Us</h1>
        <p>We’d love to hear from you! Reach out for support, inquiries, or suggestions.</p>
      </div>

      {/* Contact Form */}
      <div className="contact-form-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            minLength={10}
          ></textarea>
          <button type="submit">Send Message</button>
          {error && <p className="error-message">{error}</p>}
          {submitted && <p className="success-message">Message sent successfully!</p>}
        </form>
      </div>

      {/* Contact Information */}
      <div className="contact-info">
        <h2>Contact Information</h2>
        <div className="info-grid">
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <p>DAIICT, Gandhinagar</p>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <p>+91 7984544515</p>
          </div>
          <div className="info-item">
            <a href="mailto:bookverse@gmail.com">
              <FaEnvelope className="info-icon" />
            </a>
            <p>bookverse@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="social-media">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  );
}

export default Contact;