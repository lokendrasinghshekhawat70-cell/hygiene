import React from "react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Dr. Ananya Sharma",
      role: "Public Health Specialist",
      rating: 5,
      comment: "Hygienica's plant-based products make following daily sanitary protocols easy and enjoyable for families with young children.",
      avatar: "AS"
    },
    {
      name: "Rajesh Malhotra",
      role: "Verified Buyer",
      rating: 5,
      comment: "The smart sonic toothbrush and natural mint paste completely changed my morning routine. High quality at reasonable prices!",
      avatar: "RM"
    },
    {
      name: "Pooja Verma",
      role: "Wellness Educator",
      rating: 5,
      comment: "Their daily checklist and gentle hand wash are staples in our home. Truly clean ingredients without any artificial fragrances.",
      avatar: "PV"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="section-heading text-center">
        <p className="section-label">COMMUNITY TRUST</p>
        <h2>Loved by <span>Thousands.</span></h2>
        <p style={{ margin: "10px auto 0 auto", textAlign: "center" }}>
          Read real experiences from families and health practitioners across the nation.
        </p>
      </div>

      <div className="testimonials-grid">
        {reviews.map((rev, idx) => (
          <div className="testimonial-card" key={idx}>
            <div className="stars">{"★".repeat(rev.rating)}</div>
            <p className="testimonial-text">"{rev.comment}"</p>
            <div className="reviewer-info">
              <div className="avatar-circle">{rev.avatar}</div>
              <div>
                <strong>{rev.name}</strong>
                <small>{rev.role}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
