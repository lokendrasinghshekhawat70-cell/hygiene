import React, { useState } from "react";
import "./Shop.css";

const products = [
  {
    id: 1,
    name: "Azhiva Sanitary Pads",
    category: "Women's Hygiene",
    price: 199,
    image: "/products/sanitary-pads.png",
  },
  {
    id: 2,
    name: "Azhiva Baby Diapers",
    category: "Baby Care",
    price: 499,
    image: "/products/baby-diapers.png",
  },
  {
    id: 3,
    name: "Azhiva Wet Wipes",
    category: "Personal Care",
    price: 149,
    image: "/products/wet-wipes.png",
  },
  {
    id: 4,
    name: "Azhiva Period Pain Relief Roll On",
    category: "Women's Care",
    price: 249,
    image: "/products/period-roll-on.png",
  },
];

function Shop() {
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    const alreadyAdded = cart.find(
      (item) => item.id === product.id
    );

    if (alreadyAdded) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ]);
    }
  };

  // Remove product
  const removeFromCart = (id) => {
    setCart(
      cart.filter((item) => item.id !== id)
    );
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Total price
  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  // WhatsApp Order
  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    let orderMessage =
      "Hello Deevora Hygiene,\n\n" +
      "I want to order these products:\n\n";

    cart.forEach((item) => {
      orderMessage +=
        `${item.name} - ${item.quantity} × ₹${item.price}\n`;
    });

    orderMessage +=
      `\nTotal: ₹${totalPrice}\n\n` +
      "Please share the order details.";

    const whatsapp =
      `https://wa.me/918800570023?text=${encodeURIComponent(
        orderMessage
      )}`;

    window.open(whatsapp, "_blank");
  };

  return (
    <section className="shop-section" id="shop">
      {/* =====================
          SHOP HEADER
      ===================== */}
      <div className="shop-title">
        <span>DEEVORA HYGIENE</span>
        <h2>
          Shop Our <b>Products</b>
        </h2>
        <p>
          Premium hygiene products for your
          everyday care and comfort.
        </p>
      </div>

      {/* =====================
          CART SUMMARY
      ===================== */}
      <div className="cart-top">
        🛒 Cart
        <strong>
          {cart.reduce(
            (total, item) =>
              total + item.quantity,
            0
          )}
        </strong>
      </div>

      {/* =====================
          PRODUCTS
      ===================== */}
      <div className="shop-grid">
        {products.map((product) => (
          <div
            className="shop-card"
            key={product.id}
          >
            <div className="shop-image">
              <img
                src={product.image}
                alt={product.name}
              />
              <label>
                {product.category}
              </label>
            </div>

            <div className="shop-content">
              <h3>{product.name}</h3>
              <p>
                Premium quality hygiene product
                designed for comfort and care.
              </p>

              <div className="product-price">
                ₹{product.price}
              </div>

              <button
                className="add-cart-btn"
                onClick={() =>
                  addToCart(product)
                }
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* =================================
          CART — ONLY INSIDE SHOP SECTION
      ================================= */}
      {cart.length > 0 && (
        <div className="cart-section">
          <div className="cart-heading">
            <h2>
              🛒 Your Shopping Cart
            </h2>
            <span>
              {cart.length} Products
            </span>
          </div>

          {/* Cart Items */}
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

                <div className="cart-info">
                  <h3>
                    {item.name}
                  </h3>
                  <p>
                    ₹{item.price}
                  </p>
                </div>

                {/* Quantity */}
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

                {/* Item Total */}
                <strong className="item-total">
                  ₹{item.price * item.quantity}
                </strong>

                {/* Remove */}
                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* Cart Total */}
          <div className="cart-total">
            <div>
              <span>
                Total Amount
              </span>
              <strong>
                ₹{totalPrice}
              </strong>
            </div>

            <button
              className="order-btn"
              onClick={placeOrder}
            >
              💬 Order on WhatsApp
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Shop;
