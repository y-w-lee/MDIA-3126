import React from 'react';

const Button = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-pink-400 transition"
  >
    {children}
  </button>
);

export default Button;
