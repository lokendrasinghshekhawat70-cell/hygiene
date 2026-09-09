import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  const values = [
    {
      icon: "🌱",
      title: "Pure & Organic",
      text: "Every formulation is crafted from non-toxic, biodegradable ingredients that protect your health without polluting waterways."
    },
    {
      icon: "🔬",
      title: "Science-Backed",
      text: "We adhere strictly to WHO and international dermatological standards, ensuring true efficacy against harmful pathogens."
    },
    {
      icon: "🌍",
      title: "Zero Waste Mission",
      text: "Our packaging utilizes recyclable aluminum, post-consumer recycled plastic, and compostable plant fibers."
    },
    {
      icon: "🤝",
      title: "Community Outreach",
      text: "For every kit sold, we provide hygiene supplies and educational workshops to underserved rural schools."
    }
  ];

  return (
    <div className="about-page">
      <div className="page-hero">
        <p className="section-label">OUR MISSION</p>
        <h1>About <span>Hygienica</span></h1>
        <p>
          Empowering communities through clean habits, accessible hygiene education,
          and organic wellness essentials.
        </p>
      </div>

      <div className="about-content">
        <div className="about-story-grid">
          <div className="story-text">
            <p className="section-label">THE STORY</p>
            <h2>Clean Living <span>Without Compromise.</span></h2>
            <p>
              Founded with the belief that personal wellness begins with the simplest everyday
              actions, Hygienica bridges clinical sanitization standards with sustainable,
              gentle plant-based care.
            </p>
            <p>
              Traditional disinfectants often rely on harsh chemicals and overwhelming artificial
              fragrances that irritate skin and harm the environment. We formulated our lineup to
              be deeply effective, family-safe, and pleasurable to use daily.
            </p>

            <div className="about-metrics">
              <div>
                <strong>50,000+</strong>
                <span>Families Protected</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Cruelty-Free</span>
              </div>
              <div>
                <strong>98%</strong>
                <span>Bio-Degradable</span>
              </div>
            </div>
          </div>

          <div className="story-image">
            <img src="/images/home-hygiene.jpg" alt="Clean lifestyle" />
          </div>
        </div>

        {/* Core Values */}
        <div className="values-section">
          <div className="section-heading text-center">
            <p className="section-label">OUR PILLARS</p>
            <h2>What We <span>Stand For</span></h2>
          </div>

          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card" key={i}>
                <span className="value-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA banner */}
        <div className="about-cta-card">
          <h2>Ready to transform your daily hygiene routine?</h2>
          <p>Explore our organic collection or get in touch with our wellness consultants.</p>
          <div className="hero-buttons" style={{ justifyContent: "center" }}>
            <Link to="/products" className="primary-btn">
              Explore All Products →
            </Link>
            <Link to="/contact" className="secondary-btn">
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
