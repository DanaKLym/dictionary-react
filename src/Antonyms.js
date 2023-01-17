import React from "react";

export default function Antonym(props) {
    if (props.antonym.antonyms.length) {
        return (
            <div>
                <h6>Antonyms:</h6>
                {props.antonym.antonyms.map(function(result, index){
                    return (
                    <div key={index}>{result}</div>
                    );
                })}
            </div>
        );
    } else {
        return null;
    }
}
