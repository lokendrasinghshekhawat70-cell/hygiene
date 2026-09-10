import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

function ContactForm({
  serviceId = "YOUR_SERVICE_ID",
  templateId = "YOUR_TEMPLATE_ID",
  publicKey = "YOUR_PUBLIC_KEY"
}) {
  const formRef = useRef();
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    // Check if user has configured actual EmailJS credentials
    if (
      serviceId &&
      serviceId !== "YOUR_SERVICE_ID" &&
      templateId &&
      templateId !== "YOUR_TEMPLATE_ID" &&
      publicKey &&
      publicKey !== "YOUR_PUBLIC_KEY"
    ) {
      setStatus("Sending...");
      emailjs
        .sendForm(serviceId, templateId, formRef.current, publicKey)
        .then(() => {
          setStatus("Message sent successfully! ✅");
          alert("Message sent successfully via Email! ✅");
          formRef.current.reset();
          setPhone("");
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
          setStatus("Email sending failed ❌");
          alert("Email sending failed ❌");
        });
    } else {
      // Fallback to instant WhatsApp dispatch
      const name = formRef.current.name.value;
      const email = formRef.current.email.value;
      const query = formRef.current.query.value;

      const message = `
Hello Deevora Hygiene,

New Query - Deevora Hygiene:

Name: ${name}
Email: ${email}
Mobile: +91 ${phone}

Query:
${query}

Thank you!
      `;

      const whatsappNumber = "918800570023";
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`;

      window.open(whatsappURL, "_blank");
      setStatus("Query opened in WhatsApp! 💬");
    }
  };

  return (
    <div className="contact-form">
      <h2>Send Your Query</h2>

      <form ref={formRef} onSubmit={sendMessage}>
        <input
          type="text"
          name="name"
          placeholder="Your Name (Max 50 chars)"
          maxLength={50}
          minLength={2}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Gmail (e.g. name@gmail.com)"
          maxLength={80}
          required
        />

        <div className="phone-input-group" style={{ marginBottom: "15px" }}>
          <span className="country-prefix">
            <span>🇮🇳</span> +91
          </span>
          <input
            type="tel"
            name="phone"
            placeholder="10-digit Mobile Number"
            value={phone}
            maxLength={10}
            minLength={10}
            pattern="[6-9][0-9]{9}"
            title="Please enter a valid 10-digit Indian mobile number"
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, "").slice(0, 10);
              setPhone(val);
            }}
            required
          />
        </div>

        <textarea
          name="query"
          placeholder="Write your query (Max 500 chars)..."
          maxLength={500}
          minLength={5}
          required
        ></textarea>

        <button type="submit">
          💬 Send Message on WhatsApp →
        </button>

        {status && <p style={{ marginTop: "10px", fontSize: "13px", color: "#073b82", fontWeight: "bold" }}>{status}</p>}
      </form>
    </div>
  );
}

export default ContactForm;
