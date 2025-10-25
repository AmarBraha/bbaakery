import React from "react";
import "./Gallery.css";
import MasonryGallery from "../components/MansoryGallery";












function Gallery() {
  return (
    <div>
       <div id="topp-section">
        <div style={{alignItems: "center", justifyContent: "center",textAlign: "center"}}>
        <h1 style={{ color: "white" }}>Gallery</h1>
        <a href="/" style={{ color: "white", textDecoration: "none" }}>Home/<span><a href="/gallery" style={{ color: "white", textDecoration: "none" }}> Gallery </a></span></a>
        </div>
      </div>

      <MasonryGallery />
      {/* <div id="top-section"></div> */}

   
          </div>
  );
}

export default Gallery;
