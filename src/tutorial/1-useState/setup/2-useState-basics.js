import React, { useState } from "react";
import { Fragment } from "react";

const UseStateBasics = () => {
  const [title, setTitle] = useState("random text");

  const handleTitle = () => {
    title === "random text"
      ? setTitle("Hello There!")
      : setTitle("random text");
  };
  return (
    <Fragment>
      <h2>{title}</h2>
      <button onClick={handleTitle} className="btn">
        change title
      </button>
    </Fragment>
  );
};

export default UseStateBasics;
