import React, { useState } from "react";
import axios from "axios";
import Output from "./Output";

/* `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=28e2d780-8e37-4805-a70e-8a22e8bc93b9`
*/

export default function Search() {

    const [word, setWord] = useState("");
    const [definition, setDefinition] = useState(null);

    function handleResponse(response) {
        console.log(response.data);
        setDefinition(response.data)
    }

    function handleDictionary() {
        let apiUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=28e2d780-8e37-4805-a70e-8a22e8bc93b9`

        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleDictionary();
    }

    function handleWordChange(event) {
        setWord(event.target.value);
    }

    return (
        <div className="container m-5">
            <h1>Dictionary</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Type the word..." autoFocus onChange={handleWordChange}/>
                <input type="submit" value="Search"/>
            </form>
            <div> 
               {definition != null ?  <Output output={definition} /> : " "}
            </div>
        </div>
    );
}