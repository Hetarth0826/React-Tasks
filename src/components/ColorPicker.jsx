import React, { useState } from "react";

const ColorPicker = ({ colors }) => {
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");

  const handleButtonClick = () => {
    setShowColors(!showColors);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColors(false);
  };

  return (
    <div>
      <h1>Color Picker</h1>
      <button onClick={handleButtonClick}>Pick a color</button>
      {showColors && (
        <ul>
          {colors.map((color, index) => (
            <li
              key={index}
              style={{ backgroundColor: color, width: "3rem", margin: "2rem" }}
              onClick={() => handleColorClick(color)}
            ></li>
          ))}
        </ul>
      )}
      {selectedColor && <p>Selected color: {selectedColor}</p>}
    </div>
  );
};

export default ColorPicker;
