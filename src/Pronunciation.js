import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import "./Phonetics.css"

export default function Pronunciation(props) {

    function hadleSound() {
        let keyWord = props.pronunciation[0].hwi.prs[0].sound.audio;
        const audioUrl = `https://media.merriam-webster.com/audio/prons/en/us/mp3/${keyWord.charAt()}/${keyWord}.mp3`;
        const audio = new Audio(audioUrl);

        if (audioUrl) {
           return audio.play();
        } else {
            return null;
        }
    }

    if (props.pronunciation[0].hwi.prs != null){
        return (
            <div className="mx-3">
            <button type="button" className="phoneticsIcon" onClick={hadleSound}>
            <FontAwesomeIcon icon={faVolumeHigh} />
            </button>
            </div>
        );
    } else {
        return null;
    }

}