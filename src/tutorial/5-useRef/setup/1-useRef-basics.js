import React, { useEffect, useRef, useState } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const [name, setName] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleName = () => {
    const getName = inputRef.current.value;

    setName(getName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form className="form">
        <div>
          <input
            ref={inputRef}
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleName}
          />
        </div>
        <button onClick={handleSubmit} type="submit">
          submit
        </button>
      </form>
      <div className="item">{name}</div>
    </>
  );
};

export default UseRefBasics;
