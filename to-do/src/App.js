import React from "react";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Todo from "./components/Todo";

function App(props) {
  return (
    <div className="card border-primary mb-3 todoapp stack-large">
      <div className="card-header">Reminders and Todos</div>
      <div className="card-body">
          <form>
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
          <div className="filters btn-group stack-exception">
            <button type="button" className="btn btn-secondary" aria-pressed="true">
              <span className="visually-hidden">Show </span>
              <span>all</span>
              <span className="visually-hidden"> tasks</span>
            </button>
            <button type="button" className="btn btn-secondary" aria-pressed="false">
              <span className="visually-hidden">Show </span>
              <span>Active</span>
              <span className="visually-hidden"> tasks</span>
            </button>
            <button type="button" className="btn btn-secondary" aria-pressed="false">
              <span className="visually-hidden">Show </span>
              <span>Completed</span>
              <span className="visually-hidden"> tasks</span>
            </button>
          </div>
          <h2 className="card-title" id="list-heading">
            3 tasks remaining
          </h2>
          <ul
            role="list" //helps assistive tech explain the element a tag represents
            className="todo-list stack-large stack-exception"
            aria-labelledby="list-heading"
          >
            <Todo title="Eat breakfast"/>
            <Todo title="Walk the dog"/>
            <Todo title="Go to work"/>
          </ul>
      </div>
    </div>
  );
}

export default App;
