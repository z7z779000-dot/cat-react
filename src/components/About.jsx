// src/components/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About LiteraryWorld</h1>
        <p className="about-tagline">Your gateway to the world of literature</p>
      </header>

      <div className="about-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2023, LiteraryWorld began as a small bookstore with a big dream: 
            to connect readers with the world's greatest literary works. Today, we've grown 
            into a comprehensive online platform serving book lovers worldwide.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            To make quality literature accessible to everyone, everywhere. We believe 
            in the transformative power of books and are committed to fostering a 
            global community of readers and writers.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">📚</div>
              <h3>Vast Collection</h3>
              <p>Thousands of books across all genres</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🚚</div>
              <h3>Free Shipping</h3>
              <p>Free delivery on orders over $50</p>
            </div>
            <div className="feature">
              <div className="feature-icon">📖</div>
              <h3>Author Insights</h3>
              <p>Exclusive content from authors</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⭐</div>
              <h3>Curated Lists</h3>
              <p>Handpicked recommendations</p>
            </div>
          </div>
        </section>

        <section className="about-section contact-section">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Email:</strong> support@literaryworld.com</p>
            <p><strong>Address:</strong> 123 Book Street, Literature City</p>
            <p><strong>Hours:</strong> Monday-Friday, 9AM-6PM EST</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;