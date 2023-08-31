import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Text from "./components/Text/Text";

function App() {
  const handleCardColorChange = (color:string) => {
    console.log("Selected color:", color); 
  };

  return (
    <div className="app-container">
      <Text />
      <Card backgroundColor="blue" colorChange={handleCardColorChange} />
    </div>
  );
}

export default App;
