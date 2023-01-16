import React, { useState } from "react";
import axios from "axios";

export default function Search() {

  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  function handleResponse(response) {
    console.log(response);
    setDefinition(response.data[0].meanings[0].definitions[0].definition);
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
      <div>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Enter the word' autoFocus onChange={handleWordChange}/>
      <input type="submit" value="Search"/>
    </form>
    <div className="output">{definition}</div>
    </div>
    );
}