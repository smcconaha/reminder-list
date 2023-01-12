import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Todo from "./components/Todo";
import Form from "./components/Form";
import Filter from "./components/Filter";

function App(props) {
  //passing props.tasks in to preserve initial state
  const [todos, setTodos] = useState(props.todos);
  
  function toggleTaskCompleted(id) {
    //console.log(todos[0]) //verifying checkbox not updating to false
    const updatedTodos = todos.map((todo) => {
      //if todo id prop matches the id provided to the function then
      if (id === todo.id) {
        //spread operator to make new object
        //the completed prop is then changed
        return {...todo, completed: !todo.completed}
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function toggleTaskDeleted(id) {
    console.log(id);
  }

  //retrieve tasks from index.js, loop thru data with map and return todo component for each while passing props to Todo component
  const todoList = todos.map((todo) => (
    <Todo 
      id={todo.id} 
      title={todo.title} 
      completed={todo.completed} 
      key={todo.id}
      toggleTaskCompleted={toggleTaskCompleted}
      toggleTaskDeleted={toggleTaskDeleted}
    />
    ));
  //updating noun based on length of todo array
  const singularPlural = todoList.length === 1 ? 'task' : 'tasks';
  const todoCount = `You have ${todoList.length} ${singularPlural} left to complete`
  //addTodo is a callback prop, it expects data from our form to be input...title
  function addTodo(title) {
    // alert(title)
    //create new array with new todo title added
    //imported nanoid to create unique ids
    const newTodo = { id: `todo-${nanoid()}`, title, completed: false };
    /*update state of todos data to the new state
    spread operator copies existing array and adds object to the end
    pass this array into setTodos() to updat state*/
    setTodos([...todos, newTodo]);
}
  return (
    <div className="card border-primary mb-3 todoapp stack-large">
      <div className="card-header">Reminders and Todos</div>
      <div className="card-body">
          {/* pass function to Form component as props */}
          <Form addTodo={addTodo}/>
          <div className="filters btn-group stack-exception">
            <Filter />
          </div>
          <h2 className="card-title" id="list-heading">
            {todoCount}
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
