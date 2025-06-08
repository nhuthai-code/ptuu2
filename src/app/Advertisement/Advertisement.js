"use client";

import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Advertisement() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="4000">
          <img
            src="/img/hero_slide_1.webp"
            className="d-block w-100"
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <img
            src="/img/hero_slide_4.webp"
            className="d-block w-100"
            alt="Slide 2"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
