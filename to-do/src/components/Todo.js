import React from "react";

//props are passes down from parent App.js file but defined in the index.js as DATA
export default function Todo (props) {
    return (
        <li className="todo stack-small">
            <div className="c-cb">
            <input 
                id={props.id} 
                type="checkbox" 
                defaultChecked={props.completed}
                //onChange={() => props.toggleTaskCompleted(props.id)} //verifying checkbox not changeing to false
            />
            <label className="todo-label" htmlFor="todo-0">
                {props.title}
            </label>
            </div>
            <div className="btn-group">
            <button type="button" className="btn btn-success">
                Edit <span className="visually-hidden">{props.title}</span>
            </button>
            <button type="button" className="btn btn-danger">
                Delete <span className="visually-hidden">{props.title}</span>
            </button>
            </div>
        </li>
    );
}
