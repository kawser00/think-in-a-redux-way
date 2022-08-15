import React from 'react';

const Button = ({handler, children}) => {
  return (
    <button
      className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
      onClick={handler}
    >
      {children}
    </button>
  );
};

export default Button;