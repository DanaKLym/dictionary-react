import React from "react";
import Meaning from "./Meanings";
import Pronunciation from "./Pronunciation";

export default function Output(props) {
    if(props.output[0].meta) {
        return (
            <div className="output">
                <h2>{props.output[0].meta.id.toUpperCase().split(":1")}</h2>
                <Pronunciation pronunciation={props.output} />
                <div>[{props.output[0].hwi.prs[0].mw}]</div>
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
        return <h2> Opps, something went wrong, did you mean... {props.output[0]}?</h2>;
    }

}