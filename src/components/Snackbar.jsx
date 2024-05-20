import React, { useState, useEffect } from 'react';
import './Snackbar.css';

const Snackbar = ({ message, onClose }) => {
  console.log(message);
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="snackbar">
      {message}
    </div>
  );
};

export default Snackbar;