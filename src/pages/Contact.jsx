import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Product Inquiry",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="page-hero">
        <p className="section-label">GET IN TOUCH</p>
        <h1>Contact <span>Us</span></h1>
        <p>Have questions about our products, bulk orders, or wellness workshops? We're here to help.</p>
      </div>

      <div className="contact-content-grid">
        {/* Contact Form */}
        <div className="contact-card">
          <h2>Send Us a Message</h2>
          <p>Fill out the form below and our health & wellness team will respond within 24 hours.</p>

          {submitted ? (
            <div className="form-success-box">
              <span className="success-icon">✓</span>
              <h3>Thank you, {formData.name}!</h3>
              <p>Your message has been received. Our team will contact you at <strong>{formData.email}</strong> shortly.</p>
              <button className="primary-btn" onClick={() => setSubmitted(false)}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Inquiry Type</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                >
                  <option value="Product Inquiry">Product Inquiry & Ingredients</option>
                  <option value="Order Support">Order & Shipping Support</option>
                  <option value="Bulk Orders">Institutional & Bulk Orders</option>
                  <option value="Workshops">Community Hygiene Workshops</option>
                </select>
              </div>

              <div className="form-group">
                <label>Your Message</label>
                <textarea
                  rows="5"
                  required
                  placeholder="How can we assist you today?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="primary-btn submit-btn">
                Send Message →
              </button>
            </form>
          )}
        </div>

        {/* Contact Info Sidebar */}
        <div className="contact-sidebar">
          <div className="info-card">
            <span className="info-icon">📍</span>
            <div>
              <strong>Headquarters</strong>
              <p>Hygienica Wellness Hub, 42 Greenview Avenue, Sector 18, Bangalore, India</p>
            </div>
          </div>

          <div className="info-card">
            <span className="info-icon">📞</span>
            <div>
              <strong>Customer Care Helpline</strong>
              <p>+91 (800) 494-4364</p>
              <small>Mon - Sat: 9:00 AM - 7:00 PM IST</small>
            </div>
          </div>

          <div className="info-card">
            <span className="info-icon">✉️</span>
            <div>
              <strong>Email Inquiries</strong>
              <p>support@hygienica.health</p>
              <small>Typical response time &lt; 4 hours</small>
            </div>
          </div>

          <div className="faq-mini-box">
            <h4>Frequently Asked Questions</h4>
            <details>
              <summary>Are Hygienica products safe for kids?</summary>
              <p>Yes, all our formulations are hypoallergenic, dermatologist tested, and free from toxic chemicals.</p>
            </details>
            <details>
              <summary>What is your shipping policy?</summary>
              <p>We deliver nationwide across India with free shipping on all orders above ₹499.</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
