import React from "react";

export default function Headword(props) {
    if(props.headword.hwi.hw != null) {
        return (
            <h3 className="headword"><em>{props.headword.hwi.hw}</em></h3>
        );
    } else {
        return null;
    }
}