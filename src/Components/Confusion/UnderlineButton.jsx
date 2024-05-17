import React, { useState } from 'react';

const UnderlineButton = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <button
      onClick={handleClick}
      style={{ textDecoration: isClicked ? 'underline' : 'none' }}
    >
      {children}
    </button>
  );
};

export default UnderlineButton;
