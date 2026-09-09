import React from "react";
import { Link } from "react-router-dom";

export default function VideoSection() {
  return (
    <section className="video-showcase" id="video-showcase">
      <div className="video-text">
        <span>HYGIENE IN ACTION</span>

        <h2>
          Clean.
          <br />
          Fresh.
          <br />
          Protected.
        </h2>

        <p>
          Experience our hygiene products through premium cinematic visuals. Formulated with cutting-edge science and pure plant-based extracts.
        </p>

        <div className="video-cta-group">
          <Link to="/products" className="video-btn">
            Explore All Products →
          </Link>
        </div>
      </div>

      <div className="video-wrapper">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/products/hygiene-poster.jpg"
        >
          <source
            src="/videos/cleaning.mp4"
            type="video/mp4"
          />
        </video>
        <div className="video-badge">4K Ultra HD Showcase</div>
      </div>
    </section>
  );
}
