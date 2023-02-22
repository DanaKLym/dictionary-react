import React from "react";
import "./Footer.css";

export default function Footer() {

    let year = new Date().getFullYear();

    return (
        <div className="Footer my-4">
            <div className="text-lg-start text-center">@{year} Bohdana Klymenko.</div>
            <div className="row">
                <div className="col-12 col-lg-6 text-lg-start text-center"><a href="https://github.com/DanaKLym/dictionary-react" target="_blank" rel="noreferrer" title="View source code">Open-source</a> code by <a href="https://bohdanaklymenko.netlify.app/" target="_blank" rel="noreferrer" title="Go to personal website">Bohdana Klymenko</a></div>
                <div className="col-12 col-lg-6 text-lg-end text-center">Powered with <a href="https://dictionaryapi.com/products/json" target="_blank" rel="noreferrer">Merriam-Webster Dictionary API</a> and <a href="https://www.pexels.com/api/" target="_blank" rel="noreferrer">Pexels API</a></div>
            </div>
        </div>
    );
}