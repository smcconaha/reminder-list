import React, {useState} from "react";

//props are passes down from parent App.js file but defined in the index.js as DATA
export default function Todo (props) {
    const [isEditing, setEditing] = useState(false);
    //hook for storing and setting new name
    const [newTitle, setNewTitle] = useState('');
    //function sets new title
    function handleChange(e) {
        setNewTitle(e.target.value);
    }
    //Function handles edit form submit
    function handleSubmit(e) {
        e.preventDefault();
        props.editTodo(props.id, newTitle);
        setNewTitle("");
        setEditing(false);
      }
    //*****EDITING TEMPLATE
    const editingTemplate = (
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-3">
            <label className="todo-label pe-2" htmlFor={props.id}>
              New name for {props.title}
            </label>
            <input 
                id={props.id} 
                className="todo-text" 
                type="text"
                value={newTitle}
                onChange={handleChange} 
            />
          </div>
          <div className="btn-group">
            {/* when cancel button pressed setEditing returns false */}
            <button type="button" className="btn btn-dark" onClick={() => setEditing(false)}>
              Cancel
              <span className="visually-hidden">renaming {props.title}</span>
            </button>
            <button type="submit" className="btn btn-dark">
              Save
              <span className="visually-hidden">new name for {props.title}</span>
            </button>
          </div>
        </form>
      );
      //*****EDITING TEMP END
      //*****VIEW TEMPLATE
      const viewTemplate = (
        <div>
          <div>
              <input
                id={props.id}
                type="checkbox"
                className="me-2 checkbox"
                defaultChecked={props.completed}
                onChange={() => props.toggleTaskCompleted(props.id)}
              />
              <label className="todo-label fw-bold pe-2" htmlFor={props.id}>
                {props.title}
              </label>
            <div className="btn-group">
              {/* when edit button pressed setEditing returns true */}
              <button 
                type="button" 
                className="btn btn-outline-dark" 
                onClick={() => setEditing(true)}>
                Edit 
                <span className="visually-hidden">{props.title}</span>
              </button>
              <button
                type="button"
                className="btn btn-outline-dark"
                onClick={() => props.toggleTaskDeleted(props.id)}
                >
                Delete <span className="visually-hidden">{props.title}</span>
              </button>
                </div>
          </div>
        </div>
        //*****VIEW TEMP END
      );      
    return (
        <>
          <li className="todo list-inline-item">{isEditing ? editingTemplate : viewTemplate}</li>
          <br></br>
        </>
    );
}
