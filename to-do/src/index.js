import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//This array of objects will be passes as props to the App
//Naming convention stating that data will never change
const DATA = [
  { id: "todo-0", title: "Eat breakfast", completed: true },
  { id: "todo-1", title: "Make coffee", completed: false },
  { id: "todo-2", title: "Do 100 pushups", completed: false }
];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App todos={DATA}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
