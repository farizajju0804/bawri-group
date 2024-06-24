import React from 'react';
import './style.css'; // Make sure to import the CSS file

const TextAnimation = () => {
  return (
    <main className="text-container">
      <svg className="text-stroke" viewBox="0 0 500 100" width="80%" height="100%">
        <text className="text" x="20" y="75">The Bawri Group</text>
      </svg>
    </main>
  );
};

export default TextAnimation;
