import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import Slider from "../components/Slider";
import elisha from "../images/elisha-terada-IYjXGUpJH74-unsplash.jpg";
import Reviews from "../components/reviews.js";
import Testimonial from "../images/testimonial-image.jpg";
import GlareHover from "../components/GlareHover.js";
import CircularText from "../components/Circulartext.js";
import Image1 from "../images/about-us-image-1.jpg";
import Image2 from "../images/about-us-image-2.jpg";

function Home() {
  const navigate = useNavigate();
  const gotoContact = () => {
    navigate("/contact");
  };
  return (
    <div>
      <Slider />
      <div id="Contents">
        <div
          className="gallery"
          style={{
            backgroundImage: `url(${elisha})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="gallery-content">
            <button className="buttongallery">View Gallery</button>
          </div>
          <div className="gallery-text">
            <p>"The best breads I've ever tasted!</p>
            <p>Fresh & buttery - I can't start my mornings"</p>
          </div>
        </div>

        <div
          className="reviews"
          style={{
            backgroundImage: `url(${elisha})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="reviews-text">
            <p>“The best croissants I've ever tasted! Fresh, flaky &</p>
            <p>buttery - I can't start my mornings ”</p>
          </div>
        </div>

        <div className="hours">
          <div className="hours-header">
            <p className="phours">Working Hours</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8b5e3c"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="clock-icon"
            >
              <path d="M12 6v6l4 2" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <hr className="hours-divider" />
          <div className="hours-schedule">
            <div className="days-column">
              <p>Monday-Friday</p>
              <p>Saturday</p>
              <p>Sunday</p>
            </div>
            <div className="times-column">
              <p>08:00 AM - 08:00 PM</p>
              <p>09:00 AM - 06:00 PM</p>
              <p>Closed</p>
            </div>
          </div>
          <button className="getstarted" onClick={gotoContact}>
            <span>Get Started Now!</span>
          </button>
        </div>
      </div>

      <div id="Why">
        <div className="why-content">
          <div className="section-header">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_11_54272)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.76653 0.676086C9.79769 0.571324 9.89424 0.499023 10.0038 0.499023C10.1133 0.499023 10.2098 0.571324 10.241 0.676086C10.241 0.676086 10.6752 2.13156 11.1406 3.69267C11.8822 6.1798 13.8278 8.12534 16.3149 8.86692C17.876 9.33232 19.3314 9.76653 19.3314 9.76653C19.4362 9.7977 19.5085 9.89425 19.5085 10.0038C19.5085 10.1133 19.4362 10.2098 19.3314 10.241C19.3314 10.241 17.876 10.6752 16.3149 11.1406C13.8278 11.8822 11.8822 13.8278 11.1406 16.3149C10.6752 17.876 10.241 19.3315 10.241 19.3315C10.2098 19.4362 10.1133 19.5085 10.0038 19.5085C9.89424 19.5085 9.79769 19.4362 9.76653 19.3315C9.76653 19.3315 9.33231 17.876 8.86692 16.3149C8.12533 13.8278 6.17979 11.8822 3.69266 11.1406C2.13156 10.6752 0.676086 10.241 0.676086 10.241C0.571318 10.2098 0.499023 10.1133 0.499023 10.0038C0.499023 9.89425 0.571318 9.7977 0.676086 9.76653C0.676086 9.76653 2.13156 9.33232 3.69266 8.86692C6.17979 8.12534 8.12534 6.1798 8.86692 3.69267C9.33231 2.13156 9.76653 0.676086 9.76653 0.676086Z"
                  fill="#8B5E3C"
                />
              </g>
              <defs>
                <clipPath id="clip0_11_54272">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="section-subtitle">Why Choose Us</p>
          </div>
          <h1 className="section-title">Baking freshness & flavor</h1>
          <h1 className="section-title-italic">
            <span>you can trust</span>
          </h1>
          <p className="section-description">
            We blend time-honored techniques with the finest ingredients
            <br />
            to create elegant pastries and breads that delight the senses.
          </p>
          <div className="features-list">
            <ul>
              <li className="feature-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8b5e3c"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feature-icon"
                >
                  <path d="M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97 11 11 0 0 1 .132-6.487" />
                  <path d="M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352 11 11 0 0 0-6.486.132" />
                  <path d="M18 5a4 3 0 0 1 4 3 2 2 0 0 1-2 2 10 10 0 0 0-5.139 1.42" />
                  <path d="M5 18a3 4 0 0 0 3 4 2 2 0 0 0 2-2 10 10 0 0 1 1.42-5.14" />
                  <path d="M8.709 2.554a10 10 0 0 0-6.155 6.155 1.5 1.5 0 0 0 .676 1.626l9.807 5.42a2 2 0 0 0 2.718-2.718l-5.42-9.807a1.5 1.5 0 0 0-1.626-.676" />
                </svg>
                Artisan Quality: Each item is handcrafted with precision and
                care.
              </li>
              <li className="feature-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8b5e3c"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feature-icon"
                >
                  <path d="M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97 11 11 0 0 1 .132-6.487" />
                  <path d="M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352 11 11 0 0 0-6.486.132" />
                  <path d="M18 5a4 3 0 0 1 4 3 2 2 0 0 1-2 2 10 10 0 0 0-5.139 1.42" />
                  <path d="M5 18a3 4 0 0 0 3 4 2 2 0 0 0 2-2 10 10 0 0 1 1.42-5.14" />
                  <path d="M8.709 2.554a10 10 0 0 0-6.155 6.155 1.5 1.5 0 0 0 .676 1.626l9.807 5.42a2 2 0 0 0 2.718-2.718l-5.42-9.807a1.5 1.5 0 0 0-1.626-.676" />
                </svg>
                Fresh Ingredients: We source only the best, locally when
                possible.
              </li>
              <li className="feature-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8b5e3c"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feature-icon"
                >
                  <path d="M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97 11 11 0 0 1 .132-6.487" />
                  <path d="M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352 11 11 0 0 0-6.486.132" />
                  <path d="M18 5a4 3 0 0 1 4 3 2 2 0 0 1-2 2 10 10 0 0 0-5.139 1.42" />
                  <path d="M5 18a3 4 0 0 0 3 4 2 2 0 0 0 2-2 10 10 0 0 1 1.42-5.14" />
                  <path d="M8.709 2.554a10 10 0 0 0-6.155 6.155 1.5 1.5 0 0 0 .676 1.626l9.807 5.42a2 2 0 0 0 2.718-2.718l-5.42-9.807a1.5 1.5 0 0 0-1.626-.676" />
                </svg>
                Customer Satisfaction: Your happiness is our top priority.
              </li>
            </ul>
          </div>
        </div>

        <div className="why-images">
          <img
            src={Image1}
            className="about-image-left"
            alt="Bakery interior"
          />
          <div className="circular-wrapper">
            <div className="center-text">25+</div>
            <CircularText
              text="Year Experience * Year Experience * "
              onHover="slowDown"
              spinDuration={15}
              className="custom-class"
            />
          </div>
          <img
            src={Image2}
            className="about-image-right"
            alt="Bakery products"
          />
        </div>
      </div>

      <div id="Table">
        <div className="table-content">
          <div className="services-section">
            <div className="section-header">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_11_54273)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.76653 0.676086C9.79769 0.571324 9.89424 0.499023 10.0038 0.499023C10.1133 0.499023 10.2098 0.571324 10.241 0.676086C10.241 0.676086 10.6752 2.13156 11.1406 3.69267C11.8822 6.1798 13.8278 8.12534 16.3149 8.86692C17.876 9.33232 19.3314 9.76653 19.3314 9.76653C19.4362 9.7977 19.5085 9.89425 19.5085 10.0038C19.5085 10.1133 19.4362 10.2098 19.3314 10.241C19.3314 10.241 17.876 10.6752 16.3149 11.1406C13.8278 11.8822 11.8822 13.8278 11.1406 16.3149C10.6752 17.876 10.241 19.3315 10.241 19.3315C10.2098 19.4362 10.1133 19.5085 10.0038 19.5085C9.89424 19.5085 9.79769 19.4362 9.76653 19.3315C9.76653 19.3315 9.33231 17.876 8.86692 16.3149C8.12533 13.8278 6.17979 11.8822 3.69266 11.1406C2.13156 10.6752 0.676086 10.241 0.676086 10.241C0.571318 10.2098 0.499023 10.1133 0.499023 10.0038C0.499023 9.89425 0.571318 9.7977 0.676086 9.76653C0.676086 9.76653 2.13156 9.33232 3.69266 8.86692C6.17979 8.12534 8.12534 6.1798 8.86692 3.69267C9.33231 2.13156 9.76653 0.676086 9.76653 0.676086Z"
                    fill="#8B5E3C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_11_54273">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="section-subtitle">Our Services</p>
            </div>
            <h1 className="services-title">Delicious service that bring</h1>
            <h1 className="services-title-italic">
              joy to <span>every table</span>
            </h1>
          </div>

          <div className="services-description">
            <p>
              We believe every meal should be a celebration - that's why our
              artisanal baked goods are made with the finest ingredients and a
              whole lot of love, delivering joy to every table.
            </p>
          </div>
        </div>

        <div id="Divs">
          <div className="div">
            <div className="img"></div>
            <div className="div-content">
              <p className="div-number">01.</p>
              <h2 className="div-title">Artisan Breads</h2>
            </div>
          </div>

          <div className="div">
            <div className="img2"></div>
            <div className="div-content">
              <p className="div-number">02.</p>
              <h2 className="div-title">Baguette Breads</h2>
            </div>
          </div>

          <div className="div">
            <div className="img3"></div>
            <div className="div-content">
              <p className="div-number">03.</p>
              <h2 className="div-title">Vietnamese Breads</h2>
            </div>
          </div>

          <div className="div">
            <div className="img4"></div>
            <div className="div-content">
              <p className="div-number">04.</p>
              <h2 className="div-title">Rye Breads</h2>
            </div>
          </div>
        </div>
      </div>

      <div id="Customers">
        <div>
          <div className="section-header" style={{ marginBottom: "20px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
            </svg>
            <p
              style={{
                fontStyle: "italic",
                color: "#fff",
                fontWeight: 500,
                fontSize: 18,
                margin: 0,
              }}
            >
              Our Testimonials
            </p>
          </div>
          <h1 style={{ color: "#fff", margin: "10px 0" }}>
            Hear what our customers say
          </h1>
          <h1 style={{ margin: "0 0 20px 0" }}>
            <span
              style={{ fontStyle: "italic", fontWeight: 400, color: "#fff" }}
            >
              about us
            </span>
          </h1>

          <div className="reviewtable">
            <div className="reviews-container">
              <Reviews
                baseWidth={700}
                autoplay={true}
                autoplayDelay={3000}
                pauseOnHover={true}
                loop={true}
                round={false}
              />
            </div>
            <div className="testimonial-container">
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
              >
                <img
                  src={Testimonial}
                  className="testimonial-image"
                  alt="Customer testimonial"
                />
              </GlareHover>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
