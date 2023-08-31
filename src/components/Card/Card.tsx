import React, { useState } from "react";
import "./Card.css";

interface CardProps {
  backgroundColor: string;
  colorChange: (color: string) => void;
}

const Card = (props: CardProps) => {
  const { backgroundColor, colorChange } = props;

  const [selectedBackgroundColor, setSelectedBackgroundColor] =
    useState(backgroundColor);

  const [customColor, setCustomColor] = useState("");

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newColor = event.target.value;
    setSelectedBackgroundColor(newColor);
    colorChange(newColor);
  };

  const handleCustomColorChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomColor(event.target.value);
  };
  const addCustomColor = () => {
    if (customColor) {
      setSelectedBackgroundColor(customColor);
      colorChange(customColor);
      setCustomColor("");
    }
  };

  return (
    <div
      className="card-container"
      style={{ backgroundColor: selectedBackgroundColor }}
    >
      <h2 className="card-title">AAAAA</h2>
      <img
        className="card-image"
        src="https://loremflickr.com/320/240/brazil,rio"
        alt="mage card"
      />
      <p className="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sunt,
        inventore, totam, numquam aliquid quidem beatae voluptatibus.
      </p>
      <select value={selectedBackgroundColor} onChange={handleColorChange}>
        <option value="white">white</option>
        <option value="lightblue">lightblue</option>
        <option value="lightgreen">lightgreen</option>
        {customColor && <option value={customColor}>{customColor}</option>}
      </select>
      <input
        className="inputColor"
        type="text"
        placeholder="add color"
        value={customColor}
        onChange={handleCustomColorChange}
      />
      <button onClick={addCustomColor}>Add Custom Color</button>
    </div>
  );
};

export default Card;
