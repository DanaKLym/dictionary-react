import React from "react";

export default function LanguageAccent(props) {
   return props.accent.includes("-uk.mp3") ? <span>GB</span> :
    props.accent.includes("-us.mp3") ? <span>US</span> :
    props.accent.includes("-au.mp3") ? <span>AU</span> :
    props.accent.includes("-ca.mp3") ? <span>CA</span> : null;
}