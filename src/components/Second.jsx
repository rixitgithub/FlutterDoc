import React from "react";
import home from "../assets/2.png";
import Button from "./Button";

function Second() {
  return (
    <div className="main second">
      <div className="text">
        <h1 className="heading">Documentation</h1>
        <p className="define">
          Dive into clear, well-structured resources that cover everything from
          installation to advanced topics. Whether you're a beginner or an
          experienced developer, our documentation offers in-depth insights,
          practical examples, and best practices to help you build robust and
          beautiful cross-platform applications seamlessly. Explore the
          documentation to unleash the full potential of Flutter and streamline
          your development journey.
        </p>
        <Button label="Go to Docs" to="/documentation" />
      </div>
      <img src={home} alt="" className="responsive-image" />
    </div>
  );
}

export default Second;
