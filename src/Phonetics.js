import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import "./Phonetics.css";

export default function Phonetics(props){

    let sound = props.phonetics.audio;
    let transcription = props.phonetics.text;

    const audio = new Audio(sound);

    function handleSound() {
        audio.play();
    }

    if (sound !== "" & transcription !== "") {
        return (
            <div>
                <button type="button" className="phoneticsIcon" onClick={handleSound}>
                <FontAwesomeIcon icon={faVolumeHigh} />
                </button>
                <h4>{transcription}</h4>
            </div>
        );
    } else {
        return null;
    }

}