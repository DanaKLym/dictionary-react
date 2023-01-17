import React from "react";

export default function Phonetics(props){

    const audio = new Audio(props.phonetics.audio);

    function handleSound() {
        audio.play();
    }

    return (
        <div>
            <button type="button" onClick={handleSound}>Click on me</button>
            <h4>{props.phonetics.text}</h4>
        </div>
    );
}