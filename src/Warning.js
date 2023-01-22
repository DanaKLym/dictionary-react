import React from "react";

export default function Warning(props) {
    if(props.offensive.meta.offensive) {
        return(
            <div> May bear derogatory meaning</div>
        );
    } else {
        return null;
    }
}