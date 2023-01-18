import React from "react";
import Phonetics from "./Phonetics";
import Meanings from "./Meanings";

export default function Output(props) {

    if(props.output) {
    return (
        <div className="output">
            <h2>{props.output.word}</h2>
            <h3>{props.output.phonetics.map(function(phonetics, index){
                return (
                    <div key={index}>
                        <Phonetics phonetics={phonetics} />
                    </div>
                );
            })}</h3>
            <div className="meanings">
                {props.output.meanings.map(function(meanings, index){
                    return (
                    <div key={index}>
                        <Meanings meanings={meanings}/>
                    </div>);
                })}
            </div>
        </div>
    );} else {
        return null;
    }
}