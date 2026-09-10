import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
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
Gmail: ${form.email}

Query:
${form.query}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="contact-form">
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
          placeholder="Enter your Gmail"
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
          Send Query on WhatsApp
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
