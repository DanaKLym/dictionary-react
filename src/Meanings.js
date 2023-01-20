import React from "react";

export default function Meaning(props) {
    return (
        <div className="definition text-start">{props.description.shortdef.map(function(def, index){
            return (
                <div key={index}>
                    <div> {index + 1}. {def}</div>
                </div>
            );
        })}
        <hr/>
        </div>
    );
}