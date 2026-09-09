import React from "react";
import { whyChooseUs } from "../data/products";

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us" id="why-choose-us">
      <div className="section-header text-center">
        <span className="section-tag">UNCOMPROMISING QUALITY</span>
        <h2>Why Choose <span>Hygienica?</span></h2>
        <p>
          We blend clinical-grade germ defense with pure botanical freshness for safer, healthier homes.
        </p>
      </div>

      <div className="features-grid">
        {whyChooseUs.map((item) => (
          <div className="feature-card" key={item.id}>
            <div className="feature-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
