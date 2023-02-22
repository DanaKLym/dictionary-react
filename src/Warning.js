import React from "react";
import "./Warning.css";

export default function Warning(props) {
    if(props.offensive.meta.offensive) {
        return(
            <div className="Warning mx-3 mx-lg-5 p-3 p-lg-4 scale-up-center">May have offensive meaning</div>
        );
    } else {
        return null;
    }
}