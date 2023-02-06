// {definition != null ?  <Output output={definition} /> : " "}

import React, { useState } from "react";
import axios from "axios";
import Output from "./Output";
import Photos from "./Photos";
import "./Search.css"

export default function Search() {

    const [word, setWord] = useState("");
    const [definition, setDefinition] = useState(null);
    const [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        console.log(response.data);
        setDefinition(response.data)
    }

    function handleDictionary() {
        let apiUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=28e2d780-8e37-4805-a70e-8a22e8bc93b9`

        axios.get(apiUrl).then(handleResponse);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos)
    }

    function handlePhotos() {
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
        let pexelsApiKey = `563492ad6f91700001000001bc5440db709f491fb84aa5d279e748d5`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}` };

        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleDictionary();
        handlePhotos();
    }

    function handleWordChange(event) {
        setWord(event.target.value);
    }

    return (
        <div className="container my-5 py-3">
            <h1 className="my-2">Dictionary</h1>
            <form onSubmit={handleSubmit} className="my-3">
                <input type="text" placeholder="Type the word..." onChange={handleWordChange} className="searchInput m-4"/>
                <input type="submit" value="Search"/>
            </form>
            <div> 
               {definition != null ?  <Output output={definition} /> : " "}
            </div>
            <Photos photos={photos} />
        </div>
    );
}