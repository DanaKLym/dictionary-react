import React from "react";
import Example from "./Example";
import "./Meaning.css"

export default function Meaning(props) {
    return (
        <div className="definition text-start px-3 mb-5">{props.description.shortdef.map(function(def, index){
            return (
                <div key={index}>
                    <div> {index + 1}. {def}</div>
                </div>
            );
        })}
        <Example example={props.description} />
        </div>
    );
}