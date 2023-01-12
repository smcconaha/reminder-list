import React from "react";

function Filter(props) {
    return (
    <button type="button" className="btn btn-secondary" aria-pressed="true">
        <span className="visually-hidden">Show </span>
        <span>all</span>
        <span className="visually-hidden"> tasks</span>
    </button>
    )
}
export default Filter;