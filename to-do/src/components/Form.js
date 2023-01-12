import React, { useState } from "react";

function Form(props) {
    //tested useState by adding text as intial state and physically seeing that in the input line
    const [title, setTitle] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        //accessing the callback function defined in App.js passed as props
        title ? props.addTodo(title) : alert("Oops, looks like you left out your reminder");
        //need to clear the input after submission
        setTitle("");
    }

    function handleChange(e) {
        // console.log("testing")
        // console.log(e.target.value);
        //store the updated state of the name as the input value changes
        setTitle(e.target.value);
    }

    return (
    <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
            What's on the agenda?
            </label>
        </h2>
        <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            value={title}
            onChange={handleChange}
        />
        <button type="submit" className="btn btn-info">
            Add
        </button>
    </form>
  )
}
export default Form;