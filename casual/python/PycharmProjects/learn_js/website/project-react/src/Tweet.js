import React from "react";
import "./App.css"
import Button from "./Button";

function Tweet({name, message, likes}){
    return(
    <div className="tweet">
        <h3>{name}</h3>
        <h4>{'"' + message + '"'}</h4>
        <Button></Button>
        <p>Likes</p>
       
    </div>
    );
}

export default Tweet;