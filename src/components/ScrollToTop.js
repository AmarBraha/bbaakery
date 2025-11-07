import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAnimationControls } from "framer-motion";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start("hidden").then(() => {
      window.scrollTo(0, 0);
      controls.start("visible");
    });
  }, [pathname, controls]);

  return null;
}
