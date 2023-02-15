import React from "react";
import "./Photos.css"

export default function Photos(props) {
    if(props.photos) {
        return (
            <div className="row">
                {props.photos.map(function (photo, index) {
                    return (<div className="col-12 col-md-6 col-lg-4 my-3" key={index}> <a href={photo.src.original} target="_blank" rel="noreferrer" ><img src={photo.src.landscape}  alt={photo.alt} title={photo.alt} className="img-fluid rounded shadow photoGrid" /></a></div>)
                })}</div>
        );
    } else {
        return null;
    }
}