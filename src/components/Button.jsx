import React from "react";
import { Link } from "react-router-dom";

const Button = ({ label, to }) => {
  return (
    <Link to={to}>
      <button>{label}</button>
    </Link>
  );
};

export default Button;
