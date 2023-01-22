import React from "react";
import Meaning from "./Meanings";
import Warning from "./Warning";
import Pronunciation from "./Pronunciation";
import Transcription from "./Transcription";


export default function Output(props) {
    if (props.output.length === 0) {
        return (
        <h2>Opps, something went wrong, please, type the word again</h2>);
    } else if (props.output[0].meta) {
        return (
            <div className="output">
                <h2>{props.output[0].meta.id.toUpperCase().split(":1")}</h2>
                <Pronunciation pronunciation={props.output} />
                <Transcription transcription={props.output} />
                <div>
                {props.output.map(function(description, index) {
                    return (
                        <div key={index}>
                            <h3 className="headword"><em>{description.hwi.hw.replaceAll("*", "·")}</em></h3>
                            <div className="row">
                            <div className="col-6 text-start">
                            <div className="partOfSpeech"><strong>{description.fl}</strong></div>
                            </div>
                            <div className="col-6">
                            <Warning offensive={description} />
                            </div>
                            </div>
                            <Meaning description={description} />
                        </div>
                    );
                })}
                </div>
            </div>
        );
    } else {
        return (<h2> Opps, something went wrong, did you mean one of these...? {props.output.map(function(index, typo) {
            return (
                <div key={index}>{typo}</div>
            );
        })}</h2>);
    }
}