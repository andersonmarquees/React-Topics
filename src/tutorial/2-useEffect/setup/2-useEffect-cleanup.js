import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const getWindowDimension = () => {
  const { innerWidth: width } = window;
  return width;
};

const UseEffectCleanup = () => {
  const [value, setValue] = useState(getWindowDimension());

  useEffect(() => {
    console.log("render");
    const handleResize = () => {
      setValue(getWindowDimension());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", getWindowDimension);
  }, []);

  return (
    <>
      <h1>Window</h1>
      <h2>{value}</h2>
    </>
  );
};

export default UseEffectCleanup;
