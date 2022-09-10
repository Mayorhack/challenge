import React from "react";

const Button = ({ text, logo, inView }) => {
  return (
    <button className="button">
      {text}{" "}
      {logo && (
        <span className={inView ? "translateX_button" : ""}>{logo}</span>
      )}
    </button>
  );
};

export default Button;
