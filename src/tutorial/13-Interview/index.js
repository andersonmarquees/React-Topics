import React, { useState } from "react";

const Index = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prevState) => prevState + 1);
  };
  return (
    <>
      <section>
        <div className="item" style={{ fontSize: "3rem" }}>
          {count}
        </div>
        <button onClick={handleCount} className="btn">
          Add
        </button>
      </section>
    </>
  );
};

export default Index;
