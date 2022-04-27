import React, {useState} from "react";

const TextSearch = () => {
  const [text, setBook] = useState("");
  const [data, setData] = useState([])

  function onHandleSubmit(e) {
    e.preventDefault();
    setBook("");
  }

  async function onHandleSubmit(e) {
    e.preventDefault()
    try {
      const data = await fetch(
        `http://localhost:3001/text/${text}`
      );
      const res = await data.json();
      console.log(res)
      setData(res);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column", width: "60%" }}>
        <input
          onChange={(e) => setBook(e.target.value)}
          type="text"
          value={text}
          style={{ marginTop: "10px" }}
          placeholder="text"
        />
        <button
          onClick={onHandleSubmit}
          type="submit"
          style={{ marginTop: "10px" }}
        >
          Search Text
        </button>
      </form>
    </div>
  )
}

export default TextSearch