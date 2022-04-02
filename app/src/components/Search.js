import React, { useEffect, useState } from "react";
import Form from "./Form";
import Charts from "./Charts";

const Search = () => {
  const [data, setData] = useState({});

  let child = data.enunciation ? <Charts data={data}/> : <Form handleSubmit={handleSubmit} />;

  async function handleSubmit(book, prop) {
    try {
      console.log(`http://localhost:3001/book/${book}/prop/${prop}`)
      const data = await fetch(
        `http://localhost:3001/book/${book}/prop/${prop}`
      );
      const res = await data.json();
      setData(res);
    } catch (e) {
      console.log(e);
    }
    child = <Charts data={data}/>
  }

  return <div>{child}</div>;
};

export default Search;

/*
book: "2"

cited: {props: Array}

citedBy: {props: Array}

enunciation: "If there be two straight lines, and one of them be cut into any number of segments whatever, the rectangle contained by the two straigh…"

proposition: "1"

propsCited: ["I. 11", "I. 3", "I. 31", "I. 34"] (4)

propsCitedBy: ["X. 54", "X. 60", "X. 66", "X. 71", "X. 111"] (5)

text: "Let A, BC be two straight lines, and let BC be cut at random at the points D, E; I say that the rectangle contained by A, BC is equal t…"
*/
