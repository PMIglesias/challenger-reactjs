import React, { useState } from "react";

const ColorSwapper = ({ color1, color2 }) => {
  const [currentColor, setCurrentColor] = useState(color1);

  const handleClick = () => {
    setCurrentColor(currentColor === color1 ? color2 : color1);
  };

  return (
    <div
      style={{
        backgroundColor: currentColor,
        width: "200px",
        height: "200px",
        cursor: "pointer",
      }}
      onClick={handleClick}
    />
  );
};

export default ColorSwapper;
