import React from "react";

export default function NewKeyWord(props) {

    if(props.newKeyWord[0].meta.id != null) {
        return (
            <h2>{props.newKeyWord[0].meta.id.toUpperCase().split(":1")}</h2>
        );
    } else {
        return null;
    }
}