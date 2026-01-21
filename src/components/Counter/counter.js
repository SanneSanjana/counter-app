
import "./index.css";
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <h2 className="heading">Counter</h2>
      <h3 className="count">{count}</h3>

      <div>
        <button className="button" onClick={increase}>Increase</button>
        <button className="button" onClick={decrease}>Decrease</button>
      </div>
    </div>
  );
}

export default Counter;
