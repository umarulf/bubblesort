import React, { useState } from "react";
import BubbleSort from "./BubbleSort";
import "./BubbleSort.css";

function App() {
  const [userInput, setUserInput] = useState([]);

  return (
    <>
      <BubbleSort userInput={userInput} />
      <input
        className="input-field"
        placeholder="Enter Unsorted Numbers"
        type="text"
        onChange={(e) => setUserInput(e.target.value)}
      ></input>
    </>
  );
}

export default App;
