import React from "react";

export default function TypoError(props) {
   if (Array.isArray(props.message)) {
    return ( <div><h3 className="my-3">Opps, something went wrong, look at the words below, did you mean any of those?</h3><div className="row p-3"> {props.message.map(function(typo, index){
        return (
            <div key={index} className="col-sm-3 py-2">{typo}</div>
        );
})} </div></div> );
   } else {
    return null;
   } ;
}