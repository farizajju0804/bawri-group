import React from 'react';
import './style.css'; // Make sure to import the CSS file

const TextAnimation = () => {
  return (
    <main className="text-container year-stat w-full">
      <svg stroke="#262626" strokeWidth="1" className="text-line" width="100%" height="100%">
        <text className="desktop-line" x="50%" dominantBaseline="middle" textAnchor="middle" y="50%" dy=".35em">
          The Bawri Group
        </text>
        <text className="mobile-line" x="50%" dominantBaseline="middle" textAnchor="middle" y="50%" dy=".35em">
          <tspan x="50%" dy="-0.6em">The Bawri</tspan>
          <tspan x="50%" dy="1.2em">Group</tspan>
        </text>
      </svg>
    </main>
  );
};

export default TextAnimation;
