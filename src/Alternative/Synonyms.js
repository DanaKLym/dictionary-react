import React from "react";

export default function Synonyms(props) {
    if (props.synonyms.length) {
   return(
    <ul> <em>Synonyms:</em>
        {props.synonyms.map(function(synonym, index){
            return(
                <li key={index}>{synonym}</li>
            );
        })}
    </ul>
   ); } else {
    return null;
   }
}