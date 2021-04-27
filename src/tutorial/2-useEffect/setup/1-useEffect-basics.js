import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {
  const initialValue = 0;
  const [counter, setCounter] = useState(initialValue);

  const handleClick = () => {
    setCounter((oldValue) => oldValue + 1);
  };

  useEffect(() => {
    document.title = `Click ${counter} times`;
  }, [counter]);

  return (
    <div className="container">
      <h1>{counter}</h1>
      <button onClick={handleClick} className="btn">
        click me
      </button>
    </div>
  );
};

export default UseEffectBasics;
