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
        props.editTodos(props.id, newTitle);
        setNewTitle("");
        setEditing(false);
      }
    //*****EDITING TEMPLATE
    const editingTemplate = (
        <form className="stack-small">
          <div className="form-group">
            <label className="todo-label" htmlFor={props.id}>
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
            <button type="button" className="btn todo-cancel" onClick={() => setEditing(false)}>
              Cancel
              <span className="visually-hidden">renaming {props.title}</span>
            </button>
            <button type="submit" className="btn btn__primary todo-edit">
              Save
              <span className="visually-hidden">new name for {props.title}</span>
            </button>
          </div>
        </form>
      );
      //*****EDITING TEMP END
      //*****VIEW TEMPLATE
      const viewTemplate = (
        <div className="stack-small">
          <div className="c-cb">
              <input
                id={props.id}
                type="checkbox"
                defaultChecked={props.completed}
                onChange={() => props.toggleTaskCompleted(props.id)}
              />
              <label className="todo-label" htmlFor={props.id}>
                {props.title}
              </label>
            </div>
            <div className="btn-group">
              {/* when edit button pressed setEditing returns true */}
              <button type="button" className="btn" onClick={() => setEditing(true)}>
                Edit <span className="visually-hidden">{props.title}</span>
              </button>
              <button
                type="button"
                className="btn btn__danger"
                onClick={() => props.deleteTask(props.id)}
              >
                Delete <span className="visually-hidden">{props.title}</span>
              </button>
            </div>
        </div>
        //*****VIEW TEMP END
      );      
    return (
        <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>
    );
}
