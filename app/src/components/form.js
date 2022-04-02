import React, { useState } from "react";
import './form.css'

const Form = (props) => {
  const [book, setBook] = useState("");
  const [prop, setProp] = useState("");

  function onHandleSubmit(e) {
    e.preventDefault();
    props.handleSubmit(book, prop);
    setBook('')
    setProp('')
  }

  return (
    <div>
      <form style={{display: 'flex', flexDirection: 'column', width: '60%'}}>
        <input
          onChange={(e) => setBook(e.target.value)}
          type="text"
          value={book}
          style={{marginTop: '10px'}}
        />
        <input
          onChange={(e) => setProp(e.target.value)}
          type="text"
          value={prop}
          style={{marginTop: '10px'}}
        />
        <button onClick={onHandleSubmit} type="submit" style={{marginTop: '10px'}}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
