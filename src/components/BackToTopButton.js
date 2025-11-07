import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import "./BackToTopButton.css";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`back-to-top-button ${!isVisible ? "hidden" : ""}`}
      aria-label="Back to top"
    >
      <ChevronUp />
    </button>
  );
}
