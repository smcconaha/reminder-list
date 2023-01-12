import React from "react";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Todo from "./components/Todo";

function App(props) {
  //retrieve tasks from index.js, loop thru data with map and return todo component for each while passing props to Todo component
  const todoList = props.tasks?.map((task) => (
  <Todo id={task.id} title={task.title} completed={task.completed} key={task.id}/>
  ));
  return (
    <div className="card border-primary mb-3 todoapp stack-large">
      <div className="card-header">Reminders and Todos</div>
      <div className="card-body">
          
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
            {todoList}
          </ul>
      </div>
    </div>
  );
}

export default App;
