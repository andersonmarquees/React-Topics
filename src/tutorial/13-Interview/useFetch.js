import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [people, setPeople] = useState([]);
  const [randomJsonUser, setRandomJsonUser] = useState("");

  const fetchUser = async () => {
    const data = await fetch(url);
    const response = await data.json();
    setPeople(response.results);
    // const objectJsonPerson = JSON.stringify(response, null, 2);
    // setRandomJsonUser(objectJsonPerson);
  };

  useEffect(() => {
    fetchUser();
  }, [url]);

  return { people, randomJsonUser };
};

export default useFetch;
