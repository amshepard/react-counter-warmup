import './App.css';
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // Function to increment count by 1
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Function to multiply count by 2
  const multiplyCount = () => {
    setCount(count * 2);
  };

  return (
    <div className="App">
      <div className="number">{count}</div>
      <div className="buttons-container">
        <div className="counter-button" onClick={incrementCount}>+1</div>
        <div className="counter-button blue" onClick={multiplyCount}>x2</div>
      </div>
    </div>
  );
}

export default App;
