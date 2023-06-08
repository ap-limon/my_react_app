import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count+1);
  const decrease = () => setCount(count-1)
  return (
    <div className="App">
      <button
        onClick={increment} className="counter"
      >
        +
      </button>
      <button
        onClick={decrease}
        className="counter"
      >
        -
      </button>
      <h2>{count}</h2>
    </div>
  );
}

export default App;
