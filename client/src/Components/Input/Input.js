import React from "react";
import "./input.css";

const Input = ({ value, type, placeholder, name, updateFormData }) => {
  return (
    <div className="input-wrapper">
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={(e) => updateFormData(e)}
      />
    </div>
  );
};

export default Input;
