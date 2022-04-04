import React, { useEffect, useState } from "react";
import Form from "./Form";
import Charts from "./Charts";

const Search = () => {
  const [data, setData] = useState({});

  let child = data.enunciation ? (
    <Charts data={data} />
  ) : (
    <Form handleSubmit={handleSubmit} />
  );

  async function handleSubmit(book, prop) {
    try {
      console.log(`http://localhost:3001/book/${book}/prop/${prop}`);
      const data = await fetch(
        `http://localhost:3001/book/${book}/prop/${prop}`
      );
      const res = await data.json();
      setData(res);
    } catch (e) {
      console.log(e);
    }
    child = <Charts data={data} />;
  }

  return <div>{child}</div>;
};

export default Search;
