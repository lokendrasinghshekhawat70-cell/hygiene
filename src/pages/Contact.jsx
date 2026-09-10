import React, { useState } from "react";
import "../ContactForm.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    query: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();

    const phoneNumber = "918800570023"; // Managing Director Digvijay Singh Rathore

    const message = `Hello Deevora Hygiene,

Name: ${form.name}
Email: ${form.email}

Query:
${form.query}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="contact-page">
      <div className="page-hero">
        <span className="section-tag">GET IN TOUCH</span>
        <h1>Contact <span>Deevora Hygiene</span></h1>
        <p>Care in Every Stage ♡ • Healthy Women | Happy Families | A Cleaner Tomorrow. Send your query directly to our WhatsApp.</p>
      </div>

      <div className="contact-content-grid">
        {/* Contact Form for WhatsApp */}
        <div className="contact-form" style={{ margin: 0, width: "100%", maxWidth: "100%" }}>
          <h2>Send Your Query</h2>

          <form onSubmit={sendWhatsApp}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="query"
              placeholder="Enter your query"
              value={form.query}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">
              💬 Send Query on WhatsApp →
            </button>
          </form>
        </div>

        {/* Contact Info Sidebar with Visiting Card Details */}
        <div className="contact-sidebar">
          <div className="visiting-card-container">
            <div className="visiting-card-header">
              <span className="card-badge">OFFICIAL DETAILS</span>
              <span className="gstin-pill">GSTIN: 23AAMCD9263H1ZE</span>
            </div>

            <div className="card-brand-title">
              <h3>Deevora<sup>®</sup> Hygiene</h3>
              <span className="card-sub">— PRIVATE LIMITED —</span>
              <p className="card-tagline">Quality Hygiene Products for a Healthier You • Care in Every Stage ♡</p>
            </div>

            <div className="directors-list">
              <h4>Managing Directors</h4>

              <div className="director-item">
                <div className="dir-icon">👤</div>
                <div className="dir-details">
                  <strong>Digvijay Singh Rathore</strong>
                  <a href="tel:8800570023" className="dir-phone-link">
                    <span>📞</span> 8800570023
                  </a>
                </div>
              </div>

              <div className="director-item">
                <div className="dir-icon">👤</div>
                <div className="dir-details">
                  <strong>Vijendra Kushwah</strong>
                  <a href="tel:9685024074" className="dir-phone-link">
                    <span>📞</span> 9685024074
                  </a>
                </div>
              </div>
            </div>

            <div className="quick-call-actions">
              <a href="tel:8800570023" className="call-now-btn">
                Call Digvijay Singh (8800570023)
              </a>
              <a href="tel:9685024074" className="call-now-btn outline-btn">
                Call Vijendra Kushwah (9685024074)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
