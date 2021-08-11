import React from "react";
import "./formAlert.css";

const FormAlert = ({ formStatus }) => {
  return (
    <div className="form-alert">
      <span>{formStatus}</span>
    </div>
  );
};

export default FormAlert;
