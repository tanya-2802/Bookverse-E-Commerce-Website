import React from "react";
import "./About.css";
import { FaCheckCircle, FaUsers, FaStar, FaGlobe } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function About() {
    const navigate = useNavigate();
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <h1>Discover the World of Books with BookVerse</h1>
        <p>Bringing book lovers together and making reading more accessible.</p>
      </div>

      {/* Mission & Vision */}
      <div className="about-section">
        <h2>📖 Our Mission & Vision</h2>
        <p>BookVerse is dedicated to connecting readers worldwide by offering a vast collection of books, personalized recommendations, and a vibrant community.</p>
      </div>

      {/* What We Offer */}
      <div className="about-section">
        <h2>📚 What We Offer</h2>
        <div className="offer-grid">
          <div className="offer-item"><FaCheckCircle /> Personalized Book Recommendations</div>
          <div className="offer-item"><FaCheckCircle /> Community Reviews & Ratings</div>
          <div className="offer-item"><FaCheckCircle /> Buy & Sell Books</div>
          <div className="offer-item"><FaCheckCircle /> Join Book Clubs & Discussions</div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="about-section highlight">
        <h2>🚀 Why Choose BookVerse?</h2>
        <p>We bring an exclusive collection of books, AI-driven recommendations, and an engaging community experience—all in one platform.</p>
      </div>

      {/* Testimonials */}
      <div className="about-section">
        <h2>📝 What Our Readers Say</h2>
        <div className="testimonial">
          <p>"BookVerse has completely changed how I discover new books! The recommendations are spot on." ⭐⭐⭐⭐⭐</p>
          <p>- Emily R.</p>
        </div>
        <div className="testimonial">
          <p>"I love the community discussions here! It makes reading even more fun." ⭐⭐⭐⭐⭐</p>
          <p>- Mark D.</p>
        </div>
      </div>

      {/* Join Us */}
      <div className="about-section join">
        <h2>🌍 Join the BookVerse Community</h2>
        <p>Connect with thousands of readers and explore your next favorite book.</p>
        <button className="join-button" onClick={() => navigate("/register")}>Join Now</button>
      </div>
    </div>
  );
}

export default About;