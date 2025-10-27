import React, { useEffect } from "react";
import "./Loader.css";
import bakeryGif from "../images/bakery-shop.gif";

export default function Loader({ loading = true }) {
  useEffect(() => {
    if (loading) {
      document.body.classList.add("loader-active");
      document.documentElement.classList.add("loader-active");
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.height = "100%";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.classList.remove("loader-active");
      document.documentElement.classList.remove("loader-active");
      document.body.style.overflow = "unset";
      document.body.style.position = "unset";
      document.body.style.width = "unset";
      document.body.style.height = "unset";
      document.documentElement.style.overflow = "unset";
    }

    return () => {
      document.body.classList.remove("loader-active");
      document.documentElement.classList.remove("loader-active");
      document.body.style.overflow = "unset";
      document.body.style.position = "unset";
      document.body.style.width = "unset";
      document.body.style.height = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [loading]);

  if (!loading) return null;

  return (
    <div className="loader-overlay" role="status" aria-live="polite">
      <div className="loader-content">
        <img src={bakeryGif} className="loader-gif" alt="Loading" />
      </div>
    </div>
  );
}
