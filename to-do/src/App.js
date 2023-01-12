import React from "react";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js"

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
            <li className="todo stack-small">
              <div className="c-cb">
                <input id="todo-0" type="checkbox" defaultChecked={true} />
                <label className="todo-label" htmlFor="todo-0">
                  Eat
                </label>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-success">
                  Edit <span className="visually-hidden">Eat</span>
                </button>
                <button type="button" className="btn btn-danger">
                  Delete <span className="visually-hidden">Eat</span>
                </button>
              </div>
            </li>
            <li className="todo stack-small">
              <div className="c-cb">
                <input id="todo-1" type="checkbox" />
                <label className="todo-label" htmlFor="todo-1">
                  Sleep
                </label>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-success">
                  Edit <span className="visually-hidden">Sleep</span>
                </button>
                <button type="button" className="btn btn-danger">
                  Delete <span className="visually-hidden">Sleep</span>
                </button>
              </div>
            </li>
            <li className="todo stack-small">
              <div className="c-cb">
                <input id="todo-2" type="checkbox" />
                <label className="todo-label" htmlFor="todo-2">
                  Repeat
                </label>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-success">
                  Edit <span className="visually-hidden">Repeat</span>
                </button>
                <button type="button" className="btn btn-danger">
                  Delete <span className="visually-hidden">Repeat</span>
                </button>
              </div>
            </li>
          </ul>
      </div>
    </div>
  );
}

export default App;
