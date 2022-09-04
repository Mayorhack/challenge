import React from "react";

const Button = ({ text, logo }) => {
  return (
    <button className="button">
      {text} <span>{logo}</span>
    </button>
  );
};

export default Button;
