import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email) {
      const person = { name, email };
      setPeople((people) => {
        return [...people, person];
      });
      setName("");
      setEmail("");
    } else {
      console("empty values");
    }
  };
  console.log(people);
  return (
    <>
      <article>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Name:</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn">
            Add Person
          </button>
        </form>
        {people.map((person, index) => {
          const { name, email } = person;
          return (
            <div className="item" key={index}>
              <h4>{name}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
