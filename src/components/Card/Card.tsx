import React, { useState } from "react";
import "./Card.css";

interface CardProps {
  title: string;
  imageUrl: string;
  text: string;
}

const Card = (props: CardProps) => {
  const { title, imageUrl, text } = props;
  const [selectedBackgroundColor, setSelectedBackgroundColor] =
    useState("#7856");
  const [customColor, setCustomColor] = useState("");

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newColor = event.target.value;
    setSelectedBackgroundColor(newColor);
  };

  const handleCustomColorChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomColor(event.target.value);
  };

  const addCustomColor = () => {
    if (customColor) {
      setSelectedBackgroundColor(customColor);
      setCustomColor("");
    }
  };

  return (
    <div
      className="card-container"
      style={{ backgroundColor: selectedBackgroundColor }}
    >
      <h2 className="card-title">{title}</h2>
      <img className="card-image" src={imageUrl} alt="mage card" />
      <p className="card-text">{text}</p>
      <select value={selectedBackgroundColor} onChange={handleColorChange}>
      <option value="blue">blue</option>
        <option value="lightblue">lightblue</option>
        <option value="lightgreen">lightgreen</option>
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
