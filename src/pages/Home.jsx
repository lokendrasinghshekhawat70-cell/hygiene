import React, { useState } from "react";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import VideoSection from "../components/VideoSection";
import Testimonials from "../components/Testimonials";
import { categories, tips, gallery } from "../data/products";

export default function Home() {
  const [checked, setChecked] = useState([]);

  const toggleCheck = (index) => {
    if (checked.includes(index)) {
      setChecked(checked.filter((item) => item !== index));
    } else {
      setChecked([...checked, index]);
    }
  };

  return (
    <div className="home-page">
      {/* HERO */}
      <Hero />

      {/* INTRO */}
      <section className="intro" id="about">
        <p className="section-label">WHY HYGIENE MATTERS</p>

        <h2>
          Small habits create
          <br />
          <span>a healthier future.</span>
        </h2>

        <p>
          Hygiene is more than just cleanliness. It is a daily practice
          that helps prevent illness, protects our health and creates
          a healthier environment for everyone.
        </p>
      </section>

      {/* CATEGORIES */}
      <section className="categories">
        <div className="section-heading">
          <div>
            <p className="section-label">EXPLORE</p>
            <h2>Hygiene <span>Essentials</span></h2>
          </div>

          <p>
            Discover simple practices that can make a big difference
            in your everyday life.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((category, index) => (
            <div className="category-card" key={index}>
              <div className="category-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <p>{category.text}</p>
              <a href="#tips">Learn more →</a>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO SECTION */}
      <VideoSection />

      {/* PRODUCTS SHOWCASE */}
      <ProductSection limit={4} title="Featured Products." />

      {/* DAILY TIPS */}
      <section className="tips-section" id="tips">
        <div className="tips-image">
          <img
            src="/images/oral-hygiene.jpg"
            alt="Hygiene products"
          />
        </div>

        <div className="tips-content">
          <p className="section-label">DAILY HABITS</p>

          <h2>
            Simple tips.
            <br />
            <span>Big impact.</span>
          </h2>

          <p>
            Make these simple hygiene habits part of your everyday routine.
          </p>

          <div className="tip-list">
            {tips.map((tip, index) => (
              <div className="tip" key={index}>
                <span className="check">✓</span>
                <p>{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-section" id="gallery">
        <div className="gallery-heading text-center">
          <p className="section-label">VISUAL STORIES</p>
          <h2>Healthy living <span>in pictures.</span></h2>
        </div>

        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <div className="gallery-item" key={index}>
              <img src={item.image} alt={item.title} />
              <div className="gallery-caption">
                <span>{item.title}</span>
                <b>↗</b>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="checklist-section" id="checklist">
        <div className="checklist-card">
          <div>
            <p className="section-label">YOUR DAILY ROUTINE</p>

            <h2>
              My Hygiene
              <br />
              <span>Checklist</span>
            </h2>

            <p>
              Complete your daily hygiene habits and build
              a healthier routine.
            </p>
          </div>

          <div className="checklist">
            {[
              "Brush your teeth (2 mins)",
              "Take a refreshing bath",
              "Wash hands with soap",
              "Wear clean clothes",
              "Drink 8 glasses of pure water",
              "Keep your living space clean",
            ].map((item, index) => (
              <label className="check-item" key={index}>
                <input
                  type="checkbox"
                  checked={checked.includes(index)}
                  onChange={() => toggleCheck(index)}
                />

                <span className="custom-check">
                  {checked.includes(index) ? "✓" : ""}
                </span>

                <span
                  className={
                    checked.includes(index) ? "completed" : ""
                  }
                >
                  {item}
                </span>
              </label>
            ))}
          </div>

          <div className="progress">
            <div>
              <span>Today's progress</span>
              <strong>
                {checked.length}/6 completed
              </strong>
            </div>

            <div className="progress-bar">
              <div
                style={{
                  width: `${(checked.length / 6) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CTA */}
      <section className="cta">
        <p className="section-label">MAKE IT A HABIT</p>

        <h2>
          Clean today.
          <br />
          <span>Healthy tomorrow.</span>
        </h2>

        <p>
          Start with one small habit and make it part of your everyday life.
        </p>

        <a href="#checklist" className="primary-btn">
          Start My Checklist →
        </a>
      </section>
    </div>
  );
}
