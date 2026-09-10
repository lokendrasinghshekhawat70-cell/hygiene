import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Azhiva Sanitary Pads",
    category: "Women Care",
    price: 149,
    oldPrice: 179,
    image: "/products/pad.png",
    tag: "BEST SELLER",
    description:
      "Soft, comfortable and highly absorbent sanitary pads designed for everyday protection.",
    features: ["Ultra Thin", "Better Protection", "Comfort Fit"],
  },

  {
    id: 2,
    name: "Azhiva Baby Diaper",
    category: "Baby Care",
    price: 599,
    oldPrice: 699,
    image: "/products/diaper.png",
    tag: "POPULAR",
    description:
      "Soft and highly absorbent baby diapers designed for gentle and comfortable care.",
    features: ["Soft & Gentle", "Leak Guard", "Super Absorbent"],
  },

  {
    id: 3,
    name: "Azhiva Wet Wipes",
    category: "Personal Care",
    price: 129,
    oldPrice: 159,
    image: "/products/wipes.png",
    tag: "NEW",
    description:
      "Gentle wet wipes enriched with Aloe Vera for freshness and everyday hygiene.",
    features: ["Gentle on Skin", "pH Balanced", "Aloe Vera"],
  },

  {
    id: 4,
    name: "Azhiva Period Pain Relief Roll On",
    category: "Period Care",
    price: 199,
    oldPrice: 249,
    image: "/products/rollon.png",
    tag: "TRENDING",
    description:
      "Easy-to-carry period care roll-on designed for convenient use on the go.",
    features: ["Easy to Carry", "Fast Care", "Natural Ingredients"],
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // EmailJS form reference
  const contactFormRef = useRef();

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  // Checkout form state
  const [checkoutForm, setCheckoutForm] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  // Toast notification state
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 2800);
  };

  // ADD TO CART
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    showToast(`✓ Added "${product.name}" to cart!`);
    setCartOpen(true);
  };

  // INCREASE
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // DECREASE
  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // REMOVE
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // CART TOTAL
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // CART COUNT
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // FILTER PRODUCTS
  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || product.category === category;

    return matchSearch && matchCategory;
  });

  // WHATSAPP CART ORDER
  const sendWhatsApp = (customDetails = null) => {
    if (cart.length === 0) {
      alert("Please add a product to cart first.");
      return;
    }

    let message = `Hello Deevora Hygiene,

I want to order these products:

`;

    cart.forEach((item) => {
      message += `${item.name}
Quantity: ${item.quantity}
Price: ₹${item.price * item.quantity}

`;
    });

    message += `Total: ₹${cartTotal}
`;

    if (customDetails) {
      message += `
Customer Details:
Name: ${customDetails.name}
Gmail: ${customDetails.email}
Mobile: +91 ${customDetails.phone}
Address / Note: ${customDetails.query}
`;
    }

    message += `\nPlease contact me regarding this order.`;

    const phone = "918800570023";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  // HANDLE CONTACT SUBMISSION
  const handleContactSubmit = (e) => {
    e.preventDefault();

    if (contactForm.phone.length !== 10) {
      alert("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    const message = `
Hello Deevora Hygiene,

New Query - Deevora Hygiene:

Name: ${contactForm.name}
Gmail: ${contactForm.email}
Mobile: +91 ${contactForm.phone}

Query:
${contactForm.query}

Thank you!
    `;

    const whatsappNumber = "918800570023";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <a href="#home" className="logo" style={{ textDecoration: "none" }}>
          <img
            src="/logo.png"
            alt="Deevora Hygiene Private Limited"
            className="navbar-logo-img"
          />
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#categories">Categories</a>
          <a href="#why-us">Why Us</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-actions">

          <div className="search-box">
            🔎

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              maxLength={50}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <a
            href="https://wa.me/918800570023?text=Hello%20Deevora%20Hygiene%2C%20I%20want%20to%20know%20more%20about%20your%20products."
            target="_blank"
            rel="noreferrer"
            className="navbar-enquiry-btn"
            title="Chat on WhatsApp"
          >
            💬 Send Enquiry
          </a>

          <button
            className="cart-button"
            onClick={() => setCartOpen(true)}
            aria-label="Open Cart"
          >
            🛒

            {cartCount > 0 && (
              <span>{cartCount}</span>
            )}
          </button>

        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <div className="hero-content">

          <span className="eyebrow">
            PREMIUM HYGIENE CARE
          </span>

          <h1>
            Care in
            <br />
            <strong>Every Stage.</strong>
          </h1>

          <p>
            Premium hygiene products created for
            comfort, confidence and everyday care.
          </p>

          <div className="hero-buttons">

            <a
              href="#products"
              className="primary-button"
            >
              Shop Products →
            </a>

            <a
              href="#categories"
              className="outline-button"
            >
              Explore Categories
            </a>

          </div>

          <div className="trust-row">

            <span>✓ Premium Quality</span>
            <span>✓ Safe & Gentle</span>
            <span>✓ Trusted Care</span>

          </div>

        </div>


        <div className="hero-visual">

          <div className="hero-circle"></div>

          <img
            src="/products/hero-products.png"
            alt="Deevora Hygiene"
          />

        </div>

      </section>


      {/* ================= CATEGORIES ================= */}

      <section className="categories" id="categories">

        <div className="section-heading">

          <span>SHOP BY CATEGORY</span>

          <h2>
            Hygiene Care For Everyone
          </h2>

          <p>
            Choose the right care for every stage of life.
          </p>

        </div>


        <div className="category-grid">

          <button
            onClick={() => {
              setCategory("Women Care");
              const el = document.getElementById("products") || document.getElementById("shop");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="category-card women"
          >
            <div className="category-icon">🌸</div>

            <h3>Women Care</h3>

            <p>
              Sanitary Pads & everyday feminine care
            </p>

            <strong>
              Shop Now →
            </strong>
          </button>


          <button
            onClick={() => {
              setCategory("Baby Care");
              const el = document.getElementById("products") || document.getElementById("shop");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="category-card baby"
          >
            <div className="category-icon">👶</div>

            <h3>Baby Care</h3>

            <p>
              Soft & gentle care for little ones
            </p>

            <strong>
              Shop Now →
            </strong>
          </button>


          <button
            onClick={() => {
              setCategory("Personal Care");
              const el = document.getElementById("products") || document.getElementById("shop");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="category-card personal"
          >
            <div className="category-icon">🌿</div>

            <h3>Personal Care</h3>

            <p>
              Freshness for your everyday routine
            </p>

            <strong>
              Shop Now →
            </strong>
          </button>


          <button
            onClick={() => {
              setCategory("Period Care");
              const el = document.getElementById("products") || document.getElementById("shop");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="category-card period"
          >
            <div className="category-icon">💗</div>

            <h3>Period Care</h3>

            <p>
              Comfort and convenient period care
            </p>

            <strong>
              Shop Now →
            </strong>
          </button>

        </div>

      </section>


      {/* ================= PRODUCTS ================= */}

      <section className="shop-section" id="products">

        <div className="section-heading">

          <span>DEEVORA COLLECTION</span>

          <h2>
            Featured Products
          </h2>

          <p>
            Premium hygiene products for your everyday needs.
          </p>

        </div>


        {/* FILTER */}

        <div className="shop-controls">

          <div className="filter-buttons">

            {[
              "All",
              "Women Care",
              "Baby Care",
              "Personal Care",
              "Period Care",
            ].map((item) => (

              <button
                key={item}
                className={
                  category === item
                    ? "active-filter"
                    : ""
                }
                onClick={() => setCategory(item)}
              >
                {item}
              </button>

            ))}

          </div>

        </div>


        {/* PRODUCT GRID */}

        <div className="product-grid">

          {filteredProducts.map((product) => (

            <div
              className="product-card"
              key={product.id}
            >

              <div className="product-image">

                <span className="product-tag">
                  {product.tag}
                </span>

                <button className="wishlist" aria-label="Add to wishlist">
                  ♡
                </button>

                <img
                  src={product.image}
                  alt={product.name}
                />

              </div>


              <div className="product-info">

                <span className="product-category">
                  {product.category}
                </span>

                <h3>
                  {product.name}
                </h3>

                <div className="rating">
                  ★★★★★
                  <small> 4.9</small>
                </div>


                <div className="price-row">

                  <strong>
                    ₹{product.price}
                  </strong>

                  <del>
                    ₹{product.oldPrice}
                  </del>

                  <span>
                    {Math.round(
                      ((product.oldPrice - product.price) /
                        product.oldPrice) *
                      100
                    )}
                    % OFF
                  </span>

                </div>


                <div className="product-actions">

                  <button
                    className="details-button"
                    onClick={() =>
                      setSelectedProduct(product)
                    }
                  >
                    View
                  </button>

                  <button
                    className="add-button"
                    onClick={() =>
                      addToCart(product)
                    }
                  >
                    🛒 Add to Cart
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>


        {filteredProducts.length === 0 && (

          <div className="no-products">
            No products found.
          </div>

        )}

      </section>


      {/* ================= WHY DEEVORA ================= */}

      <section className="why-section" id="why-us">

        <div className="section-heading">

          <span>WHY DEEVORA</span>

          <h2>
            Care You Can Trust
          </h2>

        </div>


        <div className="why-grid">

          <div>
            <div>✓</div>
            <h3>Premium Quality</h3>
            <p>
              Products selected with quality and comfort in mind.
            </p>
          </div>

          <div>
            <div>♡</div>
            <h3>Comfort First</h3>
            <p>
              Designed around everyday comfort and convenience.
            </p>
          </div>

          <div>
            <div>⚡</div>
            <h3>Quick Support</h3>
            <p>
              Easy WhatsApp support for your queries and orders.
            </p>
          </div>

          <div>
            <div>★</div>
            <h3>Trusted Care</h3>
            <p>
              Hygiene care for women, babies and families.
            </p>
          </div>

        </div>

      </section>


      {/* ================= VIDEO ================= */}

      <section className="video-section">

        <div className="video-content">

          <span>DEEVORA HYGIENE</span>

          <h2>
            Better Hygiene.
            <br />
            Better Living.
          </h2>

          <p>
            Discover our premium hygiene collection
            designed for everyday comfort.
          </p>

          <a
            href="#shop"
            className="white-button"
          >
            Shop Collection →
          </a>

        </div>

        <video
          src="/videos/hygiene.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

      </section>


      {/* ================= NEWSLETTER ================= */}

      <section className="newsletter">

        <span>STAY UPDATED</span>

        <h2>
          Get Hygiene Updates
        </h2>

        <p>
          Enter your Gmail to receive product updates and offers.
        </p>

        <div className="newsletter-form">

          <input
            type="email"
            placeholder="Enter your Gmail"
            maxLength={80}
            required
          />

          <button type="submit">
            Subscribe
          </button>

        </div>

      </section>


      {/* ================= CONTACT SECTION ================= */}

      <section className="contact-section" id="contact">

        <div className="contact-wrapper">

          {/* LEFT SIDE */}

          <div className="contact-info">

            <span className="contact-label">
              GET IN TOUCH
            </span>

            <h2>
              We'd Love To
              <br />
              <strong>Hear From You.</strong>
            </h2>

            <p>
              Have a question about our hygiene products?
              Need help choosing a product? Send us a message
              and our team will get back to you.
            </p>


            <div className="contact-details">

              <div className="contact-detail">

                <div className="contact-icon">
                  ☎
                </div>

                <div>
                  <small>CALL US</small>
                  <strong>+91 8800570023</strong>
                </div>

              </div>


              <div className="contact-detail">

                <div className="contact-icon">
                  ✉
                </div>

                <div>
                  <small>EMAIL US</small>
                  <strong>info@deevora.com</strong>
                </div>

              </div>


              <div className="contact-detail">

                <div className="contact-icon">
                  📍
                </div>

                <div>
                  <small>OUR LOCATION</small>
                  <strong>India</strong>
                </div>

              </div>

            </div>

          </div>


          {/* RIGHT SIDE FORM */}

          <div className="message-card">

            <div className="message-heading">

              <span>SEND A MESSAGE</span>

              <h3>
                How Can We Help?
              </h3>

            </div>


            <form
              ref={contactFormRef}
              onSubmit={handleContactSubmit}
            >

              <div className="form-row">

                <div className="form-group">

                  <label>
                    Your Name <span className="field-limit">(Max 50 chars)</span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={contactForm.name}
                    maxLength={50}
                    minLength={2}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, name: e.target.value })
                    }
                    required
                  />

                </div>


                <div className="form-group">

                  <label>
                    Gmail <span className="field-limit">(Max 80 chars)</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Gmail"
                    value={contactForm.email}
                    maxLength={80}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, email: e.target.value })
                    }
                    required
                  />

                </div>

              </div>


              <div className="form-group">

                <label>
                  Mobile Number <span className="field-limit">(10 Digits)</span>
                </label>

                <div className="phone-input-group">
                  <span className="country-prefix">
                    <span>🇮🇳</span> +91
                  </span>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter 10-digit mobile number"
                    value={contactForm.phone}
                    maxLength={10}
                    minLength={10}
                    pattern="[6-9][0-9]{9}"
                    title="Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8 or 9"
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                      setContactForm({ ...contactForm, phone: val });
                    }}
                    required
                  />
                </div>

              </div>


              <div className="form-group">

                <label>
                  Your Query <span className="field-limit">({contactForm.query.length}/500)</span>
                </label>

                <textarea
                  name="query"
                  placeholder="Write your message or product query..."
                  value={contactForm.query}
                  maxLength={500}
                  minLength={5}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, query: e.target.value })
                  }
                  required
                ></textarea>

              </div>


              <button
                type="submit"
                className="send-message-button"
              >

                Send Message

                <span>
                  →
                </span>

              </button>


              <p className="form-note">
                🔒 Your message will be sent securely through WhatsApp / Email.
              </p>

            </form>

          </div>

        </div>

      </section>


      {/* ================= FOOTER COMPONENT ================= */}

      <Footer />


      {/* ================= PRODUCT MODAL ================= */}

      {selectedProduct && (

        <div
          className="modal-overlay"
          onClick={() => setSelectedProduct(null)}
        >

          <div
            className="product-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-modal"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product modal"
            >
              ×
            </button>

            <div className="modal-image">

              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
              />

            </div>


            <div className="modal-details">

              <span>
                {selectedProduct.category}
              </span>

              <h2>
                {selectedProduct.name}
              </h2>

              <div className="rating">
                ★★★★★
              </div>

              <div className="modal-price">
                ₹{selectedProduct.price}

                <del>
                  ₹{selectedProduct.oldPrice}
                </del>
              </div>

              <p>
                {selectedProduct.description}
              </p>


              <div className="modal-features">

                {selectedProduct.features.map(
                  (feature) => (
                    <div key={feature}>
                      ✓ {feature}
                    </div>
                  )
                )}

              </div>


              <button
                className="modal-cart"
                onClick={() => {
                  addToCart(selectedProduct);
                  setSelectedProduct(null);
                }}
              >
                Add to Cart
              </button>

            </div>

          </div>

        </div>

      )}


      {/* ================= CART DRAWER ================= */}

      {cartOpen && (

        <div
          className="cart-overlay"
          onClick={() => setCartOpen(false)}
        >

          <div
            className="cart-drawer"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="cart-header">

              <h2>
                Your Cart
              </h2>

              <button
                onClick={() => setCartOpen(false)}
                aria-label="Close cart"
              >
                ×
              </button>

            </div>


            {cart.length === 0 ? (

              <div className="empty-cart">
                <div style={{ fontSize: "40px", marginBottom: "10px" }}>🛒</div>
                <h3>Your cart is empty</h3>
                <p>
                  Add some hygiene products.
                </p>
              </div>

            ) : (

              <>

                <div className="cart-items">

                  {cart.map((item) => (

                    <div
                      className="cart-item"
                      key={item.id}
                    >

                      <img
                        src={item.image}
                        alt={item.name}
                      />

                      <div className="cart-item-info">

                        <h4>
                          {item.name}
                        </h4>

                        <strong>
                          ₹{item.price}
                        </strong>


                        <div className="quantity">

                          <button
                            onClick={() =>
                              decreaseQuantity(item.id)
                            }
                          >
                            −
                          </button>

                          <span>
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              increaseQuantity(item.id)
                            }
                          >
                            +
                          </button>

                        </div>

                        <button
                          className="remove"
                          onClick={() =>
                            removeFromCart(item.id)
                          }
                        >
                          Remove
                        </button>

                      </div>

                    </div>

                  ))}

                </div>


                <div className="cart-bottom">

                  <div className="cart-total">

                    <span>
                      Total
                    </span>

                    <strong>
                      ₹{cartTotal}
                    </strong>

                  </div>


                  <button
                    className="checkout-button"
                    onClick={() => {
                      setCartOpen(false);
                      setCheckoutOpen(true);
                    }}
                  >
                    Proceed to Checkout
                  </button>


                  <button
                    className="whatsapp-button"
                    onClick={() => sendWhatsApp()}
                  >
                    💬 Order on WhatsApp
                  </button>

                </div>

              </>

            )}

          </div>

        </div>

      )}


      {/* ================= CHECKOUT MODAL ================= */}

      {checkoutOpen && (

        <div className="modal-overlay">

          <div className="checkout-modal">

            <button
              className="close-modal"
              onClick={() => setCheckoutOpen(false)}
              aria-label="Close checkout"
            >
              ×
            </button>

            <h2>
              Checkout
            </h2>

            <p>
              Enter your details to place your query/order.
            </p>


            <form
              onSubmit={(e) => {
                e.preventDefault();

                if (checkoutForm.phone.length !== 10) {
                  alert("Please enter a valid 10-digit Indian mobile number.");
                  return;
                }

                setCheckoutOpen(false);
                sendWhatsApp(checkoutForm);
              }}
            >

              <input
                type="text"
                placeholder="Full Name (Max 50 chars)"
                value={checkoutForm.name}
                maxLength={50}
                minLength={2}
                onChange={(e) =>
                  setCheckoutForm({ ...checkoutForm, name: e.target.value })
                }
                required
              />

              <input
                type="email"
                placeholder="Gmail Address (e.g. name@gmail.com)"
                value={checkoutForm.email}
                maxLength={80}
                onChange={(e) =>
                  setCheckoutForm({ ...checkoutForm, email: e.target.value })
                }
                required
              />

              <div className="phone-input-group">
                <span className="country-prefix">
                  <span>🇮🇳</span> +91
                </span>

                <input
                  type="tel"
                  placeholder="10-digit Mobile Number"
                  value={checkoutForm.phone}
                  maxLength={10}
                  minLength={10}
                  pattern="[6-9][0-9]{9}"
                  title="Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8 or 9"
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setCheckoutForm({ ...checkoutForm, phone: val });
                  }}
                  required
                />
              </div>

              <textarea
                placeholder="Your Delivery Address / Query (Max 500 chars)"
                value={checkoutForm.query}
                maxLength={500}
                minLength={5}
                onChange={(e) =>
                  setCheckoutForm({ ...checkoutForm, query: e.target.value })
                }
                required
              ></textarea>


              <button
                type="submit"
                className="modal-cart"
              >
                Submit & Send to WhatsApp
              </button>

            </form>

          </div>

        </div>

      )}

      {/* ================= CART TOAST NOTIFICATION ================= */}
      {toastMessage && (
        <div className="cart-toast-notification">
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}

export default App;