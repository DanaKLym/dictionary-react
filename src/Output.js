import React from "react";
import Meaning from "./Meanings";
import Warning from "./Warning";
import Pronunciation from "./Pronunciation";
import Transcription from "./Transcription";
import PartOfSpeech from "./PartofSpeech";
import TypoError from "./TypoError";
import "./Output.css";


export default function Output(props) {
    if (props.output.length <= 0) {
        return (
        <h3 className="errorMessage">Opps, something went wrong, please, type the word again</h3>);
    } else if (props.output[0].meta) {
        return (
            <div className="Output p-3">
                <h2 className="keyword">{props.output[0].meta.id.toUpperCase().split(":")[0].split(":")}</h2>
                <div className="d-flex justify-content-center flex-column">
                <Pronunciation pronunciation={props.output} />
                <Transcription transcription={props.output} />
                </div>
                <div>
                {props.output.map(function(description, index) {
                    return (
                        <div key={index}>
                            <div className="row">
                            <div className="col-6 text-start">
                            <PartOfSpeech description={description}/>
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