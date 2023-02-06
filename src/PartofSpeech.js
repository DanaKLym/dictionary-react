import React from "react";
import "./PartofSpeech.css"

export default function PartOfSpeech(props) {
    if (props.description.fl != null) {
        return (
            <h3 className="headword">{props.description.hwi.hw.replaceAll("*", "·")} {``}
            <span className="partOfSpeech"><strong><em>{props.description.fl}</em></strong></span>
            <hr/>
            </h3>
        );
    } else {
        return null;
    }
}