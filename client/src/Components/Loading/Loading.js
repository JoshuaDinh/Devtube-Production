import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loading-background">
      <div className="loading-container">
        <h3>Loading</h3>
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
};

export default Loading;
