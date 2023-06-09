import React, { useState } from "react";
import "./App.css";

function App() {
  const [temprature, setTemprature] = useState(1);
  const [tempratureColor, setTempratureColor] = useState("cold")

  const tempColor = (v) => {
    if (v < 20) { setTempratureColor("cold") };
    if (v > 20) { setTempratureColor("neutral") };
    if (v > 29) { setTempratureColor("hot") };
  }

  const increaseTemp = () => {
    const newTemp = temprature + 1;
    tempColor(newTemp);
    setTemprature(newTemp)
  }

  const decreaseTemp = () => {
    const newTemp = temprature - 1;
    tempColor(newTemp);
    setTemprature(newTemp);
  }

  return (
    <div className="app-container">
      <div className="temprature-display-container">
        <div className={`temprature-display ${tempratureColor}`}>
          {temprature} ℃
        </div>
      </div>
      <div className="btn-container">
        <button onClick={() => increaseTemp()} className="counter">
          +
        </button>
        <button onClick={() => decreaseTemp()} className="counter">
          -
        </button>
      </div>
    </div>
  );
}

export default App;
