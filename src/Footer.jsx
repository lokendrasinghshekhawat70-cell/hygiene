import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      {/* Top Footer */}
      <div className="footer-top">

        {/* Company */}
        <div className="footer-company">
          <img
            src="/logo.png"
            alt="Deevora Hygiene Private Limited"
            className="footer-logo-img"
          />

          <span>
            Healthy Women | Happy Families | A Cleaner Tomorrow
          </span>
        </div>

        {/* Managing Directors */}
        <div className="footer-managers">
          <h2>Managing Directors</h2>

          <div className="manager">
            <div className="phone-icon">☎</div>

            <div>
              <h3>Digvijay Singh Rathore</h3>
              <a href="tel:8800570023">
                8800570023
              </a>
            </div>
          </div>

          <div className="manager">
            <div className="phone-icon">☎</div>

            <div>
              <h3>Vijendra Kushwah</h3>
              <a href="tel:9685024074">
                9685024074
              </a>
            </div>
          </div>
        </div>

        {/* GST */}
        <div className="footer-gst">
          <h3>GSTIN</h3>
          <p>23AAMCD9263H1ZE</p>
        </div>

      </div>


      {/* Products */}
      <div className="footer-products">

        <div className="footer-tagline">
          <h2>Quality Hygiene Products</h2>
          <h2>for a Healthier You</h2>
        </div>

        <div className="product-item">
          <div className="product-icon">🩷</div>
          <h3>Sanitary Pads</h3>
          <p>Comfort & Protection</p>
        </div>

        <div className="product-item">
          <div className="product-icon">👶</div>
          <h3>Diapers</h3>
          <p>Soft Care for Little Ones</p>
        </div>

        <div className="product-item">
          <div className="product-icon">🧻</div>
          <h3>Wet Wipes</h3>
          <p>Freshness Anytime</p>
        </div>

        <div className="product-item">
          <div className="product-icon">💗</div>
          <h3>Period Pain Relief Roll On</h3>
          <p>Fast Relief, Anytime</p>
        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © 2026 Deevora Hygiene Private Limited. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
