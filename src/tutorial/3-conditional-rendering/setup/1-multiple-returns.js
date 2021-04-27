import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);
  const [error, setError] = useState(false);

  const getFetch = async () => {
    try {
      const data = await fetch(url);
      const response = await data.json();
      setPeople(response);
      setLoading(false);
      setError(true);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getFetch();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (!error) {
    return <h1>Error...</h1>;
  }
  return (
    <>
      <h1>{people.name}</h1>
    </>
  );
};

export default MultipleReturns;
