import React from "react";

export default function Transcription(props) {

    if(props.transcription[0].hwi.prs != null) {
        return (
            <div className="transcription">[{props.transcription[0].hwi.prs[0].mw.replaceAll(`sh`, `ʃ`).replaceAll(`j`, `ʤ`).replaceAll(`ch`, `ʧ`).replaceAll(`zh`, `ʒ`).replaceAll(`th`, `Ɵ`).replaceAll(`t͟h`, `ð`).replaceAll(`ā`, `ei`).replaceAll('ī', 'ai')}]</div>
        );
    } else {
        return  null;
    }
}