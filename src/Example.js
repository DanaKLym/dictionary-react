import React from "react";

export default function Example(props) {

     if (props.example.quotes) {
            return (
                <div>
                    <br/> 
                    <strong>Example:</strong>
                {props.example.quotes.map(function(quotes, index) {
                return (
                    <div key={index} className="quotes my-2">
                        {quotes.t.replace(`{qword}`, ``).replace(`{/qword}`, ``)}
                    </div>
                        );
                    })}
                </div>);
    } else {
        return null;
           }
                
}