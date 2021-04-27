import React, { useState } from "react";

const UseStateCounter = () => {
  const initialValue = 0;

  const [counter, setCounter] = useState(initialValue);

  console.log(useState()[1]);

  const handleDecrease = () => {
    setCounter((oldValue) => oldValue - 1);
  };

  const handleReset = () => {
    setCounter(initialValue);
  };

  const handleIncrease = () => {
    setCounter((oldValue) => oldValue + 1);
  };

  const handleComplexCounter = () => {
    setTimeout(() => {
      setCounter((oldValue) => oldValue + 1);
    }, 1000);
  };
  return (
    <div className="container">
      <section style={{ marginBottom: "3rem" }}>
        <h2>Regular Counter</h2>
        <h1>{counter}</h1>
        <button onClick={handleDecrease} className="btn">
          decrease
        </button>
        <button onClick={handleReset} className="btn">
          reset
        </button>
        <button onClick={handleIncrease} className="btn">
          increase
        </button>
      </section>

      <section>
        <h2>Complex Counter</h2>
        <h1>{counter}</h1>
        <button onClick={handleComplexCounter} className="btn">
          increase
        </button>
      </section>
    </div>
  );
};

export default UseStateCounter;
