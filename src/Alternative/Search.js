import React, { useState } from "react";
import axios from "axios";
import Output from "./Output";

/*api-key: 28e2d780-8e37-4805-a70e-8a22e8bc93b9
 console.log(response.data[0]);*/


export default function Search() {

  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState(null);

  function handleResponse(response) {
   
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