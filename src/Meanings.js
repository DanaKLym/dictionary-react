import React from "react";
import Antonym from "./Antonyms";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
    return (
        <div className="meanings">
            <div>{props.meanings.synonyms.map(function(synonym, index){
                return(
                    <div key={index}>{synonym}</div>
                );
            })}</div>
            <div className="definitions"><strong>{props.meanings.partOfSpeech}</strong></div>
            {props.meanings.definitions.map(function(definitions, index){
                return (
                    <div key={index}>
                        <br/>
                        <div>{definitions.definition}</div>
                        <div className="example"><em>{definitions.example}</em></div>
                        <Synonyms synonyms={definitions.synonyms} />
                    </div>
                );
            })}
            <Antonym antonym={props.meanings} />
        </div>
    );
}