import React from "react";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Todo from "./components/Todo";
import Form from "./components/Form";
import Filter from "./components/Filter";

function App(props) {
  //retrieve tasks from index.js, loop thru data with map and return todo component for each while passing props to Todo component
  const todoList = props.tasks?.map((task) => (
  <Todo id={task.id} title={task.title} completed={task.completed} key={task.id}/>
  ));
  return (
    <div className="card border-primary mb-3 todoapp stack-large">
      <div className="card-header">Reminders and Todos</div>
      <div className="card-body">
          <Form />
          <div className="filters btn-group stack-exception">
            <Filter />
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
