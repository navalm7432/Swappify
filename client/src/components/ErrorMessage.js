import React from "react";
import "./ErrorMessage.css";
function ErrorMessage({ eMessage, clearError }) {
  return (
    <div className="errorMessage">
      <p>{eMessage}</p>
      <span className="errorMessageButton" onClick={clearError}>X</span>
    </div>
  );
}

export default ErrorMessage;