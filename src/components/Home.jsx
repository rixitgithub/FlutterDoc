// src/components/Home.jsx
import React from "react";
import Navbar from "./Navbar";
import home from "../assets/a.png";
import Button from "./Button";
import Second from "./Second";
import Third from "./Third";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <img src={home} alt="" className="responsive-image" />
        <div className="text">
          <h1 className="heading">FLUTTER?</h1>
          <p className="define">
            <span className="flutter">Flutter</span> is an open-source UI
            software development toolkit created by Google for building natively
            compiled applications for mobile, web, and desktop from a single
            codebase. Flutter enables developers to create visually attractive
            and performant applications with a rich set of pre-designed widgets.
          </p>
          <Button label="Website" to="https://docs.flutter.dev/" />
        </div>
      </div>
      <Second />
      <Third />
      <Footer />
    </div>
  );
}

export default Home;
