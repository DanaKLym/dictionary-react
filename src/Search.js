import React, { useState } from "react";
import axios from "axios";
import Output from "./Output";


export default function Search() {

  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setDefinition(response.data[0]);
  }

  function handleDictionary() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
event.preventDefault();
handleDictionary();
  };

  function handleWordChange(event) {
setWord(event.target.value);
  }

    return (
      <div className="container m-5">
        <h1>Dictionary</h1>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Enter the word...' autoFocus onChange={handleWordChange}/>
      <input type="submit" value="Search"/>
    </form>
    <Output output={definition} />
    </div>
    );
}