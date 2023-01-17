import React from "react";
import Phonetics from "./Phonetics";

export default function Output(props) {

    if(props.output) {
    return (
        <div className="output">
            <h3>{props.output.word} {props.output.phonetics.map(function(phonetics, index){
                if (index < 1) {
                return (
                    <div key={index} className="phonetics">
                        <Phonetics phonetics={phonetics} />
                    </div>
                )} else {
                return (null); 
            }
            })}</h3>
        </div>
    );} else {
        return null;
    }
}