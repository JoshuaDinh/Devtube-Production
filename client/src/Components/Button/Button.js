import React from "react";
import "./button.css";

const Button = ({ handleClick, name, type }) => {
  return (
    <button
      className={`button ${type === "cancle" && "cancle-button"}`}
      onClick={(e) => handleClick(e)}
      type={type}
    >
      {name}
    </button>
  );
};

export default Button;
