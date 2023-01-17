/*return (
  <div key={index} className="phonetics">
  <Phonetics phonetics={phonetics} />
</div>*/
/*<h3>{props.output.word} {props.output.phonetics.map(function(phonetics, index){
                if (index < 1) {
                return (
                    <div key={index} className="phonetics">
                        <Phonetics phonetics={phonetics} />
                    </div>
                )} else {
                return (null); 
            }
            })}</h3> */
import React from "react";
import Phonetics from "./Phonetics";
import Meanings from "./Meanings";

export default function Output(props) {

    if(props.output) {
    return (
        <div className="output">
            <h3>{props.output.word} {props.output.phonetics.map(function(phonetics, index){
                if (index < 2) {
                return (
                    <div key={index}>
                        <Phonetics phonetics={phonetics} />
                    </div>
                );} else {
                    return null;
                }
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