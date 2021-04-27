import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState(true);

  const handleToggle = () => {
    text ? setText(false) : setText(true);
  };

  return (
    <>
      <h1>Finn</h1>
      <button onClick={handleToggle} className="btn">
        toggle error
      </button>
      {text ? (
        <div>
          <h2>there is no error</h2>
        </div>
      ) : (
        <div>
          <h1>Error...</h1>
          <p>there is an error</p>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
