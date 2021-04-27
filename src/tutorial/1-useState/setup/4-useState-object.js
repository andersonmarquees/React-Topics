import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Finn",
    age: 33,
    message: "random text",
  });

  const handleChangeText = () => {
    person.message === "random text"
      ? setPerson({ ...person, message: "Hello" })
      : setPerson({ ...person, message: "random text" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button onClick={handleChangeText} className="btn">
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
