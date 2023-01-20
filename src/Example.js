import React from "react";

export default function Example(props) {

    if (props.example) {
        return (
            <div>
                <h3>{props.example.map(function(example, index) {
                    return (
                        <ul key={index}>
                            <li>{example.quotes}</li>
                        </ul>
                    );
                })}</h3>
            </div>
        );
    } else {
        return null;
    }
}