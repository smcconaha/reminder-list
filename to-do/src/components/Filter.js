import React from "react";

function Filter(props) {
    //Passed props from App and updating state based upon title of button clicked
    return (
    <button 
        type="button" 
        className="btn btn-secondary m-1" 
        aria-pressed={props.isPressed}
        onClick={() => props.setFilter(props.title)}
    >
        <span className="visually-hidden">Show </span>
        <span>{props.title}</span>
        <span className="visually-hidden"> tasks</span>
    </button>
    )
}
export default Filter;