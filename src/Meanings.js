import React from "react";
import Example from "./Example";

export default function Meaning(props) {
    return (
        <div className="definition text-start">{props.description.shortdef.map(function(def, index){
            return (
                <div key={index}>
                    <div> {index + 1}. {def}</div>
                </div>
            );
        })}
        <Example example={props.description} />
        <hr/>
        </div>
    );
}