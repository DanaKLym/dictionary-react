import React from "react";
//import Example from "./Example"; <Example example={props.output}/>;
import Meaning from "./Meanings";
import Pronunciation from "./Pronunciation";

export default function Output(props) {
    if(props.output) {
        return (
            <div className="output">
                <h2>{props.output[0].meta.id.toUpperCase().split(":1")}</h2>
                <Pronunciation pronunciation={props.output} />
                
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
        return null;
    }

}