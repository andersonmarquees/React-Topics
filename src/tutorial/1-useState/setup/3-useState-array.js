import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const handleRemove = (id) => {
    const newArrayPeople = people.filter((person) => person.id !== id);
    setPeople(newArrayPeople);
  };

  const handleClearAll = () => {
    people.length === 0 ? setPeople(data) : setPeople([]);
  };

  return (
    <div className="container">
      {people.map(({ id, name }) => {
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => handleRemove(id)}>remover</button>
          </div>
        );
      })}

      <button onClick={handleClearAll} className="btn">
        {people.length === 0 ? "List Names" : "clear items"}
      </button>
    </div>
  );
};

export default UseStateArray;
