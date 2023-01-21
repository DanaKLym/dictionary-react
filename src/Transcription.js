import React from "react";

export default function Transcription(props) {
    if(props.transcription[0].hwi.prs != null) {
        return (
            <div>[{props.transcription[0].hwi.prs[0].mw}]</div>
        );
    } else {
        return  null;
    }
}