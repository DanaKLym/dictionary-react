import React from "react";
import "./ErrorMessage.css";

export default function TypoError(props) {
   if (Array.isArray(props.message)) {
    return ( <div className="scale-up-center"><h3 className="errorMessage my-3">Opps, something went wrong, look at the words below, did you mean any of those?</h3><div className="row p-3"> {props.message.map(function(typo, index){
        return (
            <div key={index} className="variantsSelection col-sm-3 py-2">{typo}</div>
        );
})} </div></div> );
   } else {
    return null;
   } ;
}