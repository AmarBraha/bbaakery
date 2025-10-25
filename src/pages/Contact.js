import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Toaster, toast } from "react-hot-toast";
import "./Contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // replace with your EmailJS template ID
        form.current,
        "YOUR_PUBLIC_KEY"   // replace with your EmailJS public key
      )
      .then(
        () => {
          toast.success("Message sent successfully! 🎉", {
            style: { borderRadius: "10px", background: "#333", color: "#fff" },
          });
          e.target.reset();
        },
        () => {
          toast.error("Oops! Something went wrong 😕", {
            style: { borderRadius: "10px", background: "#333", color: "#fff" },
          });
        }
      );
  };

  return (
    <section className="contact-section">
      <Toaster position="top-right" reverseOrder={false} />
      <div id="topp-section">
        <div style={{alignItems: "center", justifyContent: "center",textAlign: "center"}}>
        <h1 style={{ color: "white" }}>Contact</h1>
        <a href="/" style={{ color: "white", textDecoration: "none" }}>Home/<span><a href="/contact" style={{ color: "white", textDecoration: "none" }}> Contact </a></span></a>
        </div>
      </div>

      
      <div className="contact-container">
        
        <div className="contact-info">
          <p className="subtitle">✦ Contact us</p>
          <h1>
            We’re here to chat and <br />
            share the <span>love for pastries</span>
          </h1>
          <p className="desc">
            Feel free to reach out — we’re just a message away with something sweet to say!
          </p>

          <div className="info-grid">
            <div className="info-box">
              <span className="icon">📞</span>
              <div>
                <h4>Connect Now</h4>
                <p>+(123)456–789 / +(987)456–321</p>
              </div>
            </div>
            <div className="info-box">
              <span className="icon">✉️</span>
              <div>
                <h4>Email Us</h4>
                <p>support@domainname.com</p>
              </div>
            </div>
          </div>

          <div className="info-grid">
            <div className="info-box">
              <span className="icon">📍</span>
              <div>
                <h4>Visit Our Bakery</h4>
                <p>123 Sweet Street, Bakersville, NY 10001</p>
              </div>
            </div>
            <div className="info-box">
              <span className="icon">🕒</span>
              <div>
                <h4>Working Hour</h4>
                <p>
                  Mon–Sat: 8:00 AM – 8:00 PM <br /> Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="contact-form">
          <h2>
            Contact <span>us</span>
          </h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-row">
              <input type="text" name="first_name" placeholder="First name" required />
              <input type="text" name="last_name" placeholder="Last name" required />
            </div>
            <div className="form-row">
              <input type="email" name="email" placeholder="E-mail" required />
              <input type="text" name="phone" placeholder="Phone" />
            </div>
            <textarea name="message" placeholder="Write Message..." required></textarea>
            <button type="submit" className="submit-btn">
              Submit Message →
            </button>
          </form>
        </div>
      </div>

      <div className="map-container">
        <iframe
          title="Google Map - Prizren"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47273.23890872682!2d20.69339826715841!3d42.22347528970957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1353950a12f4301f%3A0xda0e2e9b8d3d5850!2sPrizren%2020000!5e0!3m2!1sen!2s!4v1747320092671!5m2!1sen!2s"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
