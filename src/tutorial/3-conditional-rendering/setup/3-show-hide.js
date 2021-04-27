import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  const getScreenWidth = () => {
    setWidth(() => window.innerWidth);
  };

  const handleShow = () => {
    setShow(() => !show);
  };

  useEffect(() => {
    window.addEventListener("resize", getScreenWidth);
    return () => window.removeEventListener("resize", getScreenWidth);
  }, []);

  return (
    <>
      <button onClick={handleShow} className="btn">
        show/hide
      </button>
      <div>
        <h1>Window</h1>
        {show && <h2>{width} Pixels</h2>}
      </div>
    </>
  );
};

export default ShowHide;
