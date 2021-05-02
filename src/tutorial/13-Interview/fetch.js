import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
// const url = "https://randomuser.me/api";

const FetchApi = () => {
  const [countPage, setCountPage] = useState(1);
  // const { people } = useFetch(url);

  const urlPagination = `
  https://randomuser.me/api?page=${countPage}&results=1&seed=abc
  `;

  const { people } = useFetch(urlPagination);

  const handleNextPerson = () => {
    setCountPage((countPage) => {
      return countPage + 1;
    });
  };

  return (
    <>
      {/* {people.map((person) => {
        const {
          name: { first, last },
          picture: { large },
          login: { uuid },
        } = person;
        return (
          <div key={uuid}>
            <p>{`${first} ${last}`}</p>
            <img src={large} alt={first} />
          </div>
        );
      })} */}
      {/* <pre>{randomJsonUser}</pre> */}
      <>
        {people.map((person) => {
          const {
            name: { first, last },
            login: { uuid },
            picture: { large },
          } = person;
          return (
            <div key={uuid} className="item">
              <h3>{first}</h3>
              <img src={large} alt={last} />
            </div>
          );
        })}
      </>
      <button className="btn" onClick={handleNextPerson}>
        next person
      </button>
    </>
  );
};

export default FetchApi;
