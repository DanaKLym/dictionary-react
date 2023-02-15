import React from "react";
import "./Warning.css";

export default function Warning(props) {
    if(props.offensive.meta.offensive) {
        return(
            <div className="Warning p-4">⚠️ May have derogatory meaning</div>
        );
    } else {
        return null;
    }
}