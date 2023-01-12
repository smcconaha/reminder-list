import React from "react";

function Form(props) {
    function handleSubmit(e) {
        e.preventDefault();
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
        />
        <button type="submit" className="btn btn-info">
            Add
        </button>
    </form>
  )
}
export default Form;