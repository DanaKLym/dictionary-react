import React from "react";
import Meaning from "./Meanings";
import Warning from "./Warning";
import Pronunciation from "./Pronunciation";
import Transcription from "./Transcription";
import TypoError from "./TypoError";


export default function Output(props) {
    if (props.output.length <= 0) {
        return (
        <h2>Opps, something went wrong, please, type the word again</h2>);
    } else if (props.output[0].meta) {
        return (
            <div className="output">
                <h2>{props.output[0].meta.id.toUpperCase().split(":1")}</h2>
                <div className="d-flex">
                <Pronunciation pronunciation={props.output} />
                <Transcription transcription={props.output} />
                </div>
                <div>
                {props.output.map(function(description, index) {
                    return (
                        <div key={index}>
                            <h3 className="headword">{description.hwi.hw.replaceAll("*", "·")}</h3>
                            <div className="row">
                            <div className="col-6 text-start">
                            <div className="partOfSpeech"><strong><em>({description.fl})</em></strong></div>
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
        return (<TypoError message={props.output}/>);
    }
}