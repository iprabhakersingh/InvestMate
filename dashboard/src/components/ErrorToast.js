import React from "react";
import "./ErrorToast.css";

const ErrorToast = ({ message }) => {
  if (!message) return null;
  return (
    <div className="error-toast">
      <div className="error-text">{message}</div>
    </div>
  );
};

export default ErrorToast;
