// src/components/Marquee.js
import React from 'react';
import './Marquee.css';

const Marquee = ({ text }) => {
  return (
    <div className="marquee">
      <div className="marquee-content">
        {text}
      </div>
    </div>
  );
};

export default Marquee;
