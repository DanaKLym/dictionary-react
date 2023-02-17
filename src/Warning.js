import React from "react";
import "./Warning.css";

export default function Warning(props) {
    if(props.offensive.meta.offensive) {
        return(
            <div className="Warning mx-5 p-4">⚠️ May have offensive meaning</div>
        );
    } else {
        return null;
    }
}