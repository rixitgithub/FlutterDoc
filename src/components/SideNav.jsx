import React from "react";
import "./SideNav.css"; // Create a CSS file for styling

const SideNav = () => {
  return (
    <div className="sidenav">
      <a href="#section1">Section 1</a>
      <a href="#section2">Section 2</a>
      <a href="#section3">Section 3</a>
      {/* Add more links as needed */}
    </div>
  );
};

export default SideNav;
