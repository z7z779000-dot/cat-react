// src/components/Form.jsx
import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="container py-5" id="contact">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card border-0 shadow-lg">
            <div className="card-body p-5">
              <h2 className="text-center mb-4">
                <i className="bi bi-envelope text-warning me-2"></i>
                Contact Us
              </h2>
              
              {submitted ? (
                <div className="alert alert-success text-center">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  Thank you! Your message has been sent successfully.
                </div>
              ) : (
                <p className="text-center text-muted mb-4">
                  Have questions about our books? Want to suggest an author?
                  Send us a message!
                </p>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label fw-semibold">
                      <i className="bi bi-person me-1"></i> Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label fw-semibold">
                      <i className="bi bi-envelope me-1"></i> Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label fw-semibold">
                    <i className="bi bi-tag me-1"></i> Subject
                  </label>
                  <select
                    className="form-select"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Question</option>
                    <option value="suggestion">Book Suggestion</option>
                    <option value="author">Author Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-semibold">
                    <i className="bi bi-chat-left-text me-1"></i> Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                
                <div className="d-grid">
                  <button type="submit" className="btn btn-warning btn-lg fw-semibold">
                    <i className="bi bi-send me-2"></i>
                    {submitted ? 'Message Sent!' : 'Send Message'}
                  </button>
                </div>
              </form>
              
              <div className="row mt-5 text-center">
                <div className="col-md-4 mb-3">
                  <div className="p-3 border rounded bg-light">
                    <i className="bi bi-geo-alt text-warning fs-2 mb-2"></i>
                    <h5>Visit Us</h5>
                    <p className="mb-0">123 Book Street<br />Reading City, RC 12345</p>
                  </div>
                </div>
                
                <div className="col-md-4 mb-3">
                  <div className="p-3 border rounded bg-light">
                    <i className="bi bi-telephone text-warning fs-2 mb-2"></i>
                    <h5>Call Us</h5>
                    <p className="mb-0">+1 (555) 123-4567<br />Mon-Fri, 9AM-6PM</p>
                  </div>
                </div>
                
                <div className="col-md-4 mb-3">
                  <div className="p-3 border rounded bg-light">
                    <i className="bi bi-envelope text-warning fs-2 mb-2"></i>
                    <h5>Email Us</h5>
                    <p className="mb-0">info@literaryworld.com<br />support@literaryworld.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;