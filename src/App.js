import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import ContactPage from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import ScrollToTop from "./components/ScrollToTop";
import Bakey from "./components/Bakey";
import './components/theme.css';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="App">
      <Loader loading={loading} />
      <BackToTopButton />
      <Bakey />
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
