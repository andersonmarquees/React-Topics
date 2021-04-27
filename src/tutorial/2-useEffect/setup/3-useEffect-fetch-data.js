import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [people, setPeople] = useState([]);

  const fetchPeople = async () => {
    const data = await fetch(url);
    const response = await data.json();
    setPeople(response);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <>
      <h3>github users</h3>
      <ul className="users">
        {people.map((person) => {
          const { avatar_url, id, login, html_url } = person;
          return (
            <li key={id}>
              <img src={avatar_url} alt="" />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
