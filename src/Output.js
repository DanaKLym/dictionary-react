// <Pronunciation pronunciation={props.output} />
// <Transcription transcription={props.output} />
// import Headword from "./Headword";
// import NewKeyWord from "./NewKeyWord";
import React from "react";
import Meaning from "./Meanings";
import Pronunciation from "./Pronunciation";
import Transcription from "./Transcription";


export default function Output(props) {
    if(props.output[0].meta) {
        return (
            <div className="output">
                 <h2>{props.output[0].meta.id.toUpperCase().split(":1")}</h2>
                <Pronunciation pronunciation={props.output} />
                <Transcription transcription={props.output} />
                <div>
                {props.output.map(function(description, index) {
                    return (
                        <div key={index}>
                            <h3 className="headword"><em>{description.hwi.hw}</em></h3>
                            <div className="partOfSpeech"><strong>{description.fl}</strong></div>
                            <Meaning description={description} />
                        </div>
                    );
                })}
                </div>
            </div>
        );
    } else {
        return <h2> Opps, something went wrong, please, type the word again</h2>;
    }

}