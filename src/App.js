
import './App.css';
import Header from './Components/Header';
import {Todos} from './Components/Todos';
import {AddTodo} from './Components/AddTodo';
import {Footer} from './Components/Footer';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
   let initTodo;
   if(localStorage.getItem("todos")===null)
   {
     initTodo = [];
   }
   else
   {
     initTodo = JSON.parse(localStorage.getItem("todos"));
   }
   const onDelete = (todo)=>{
    console.log("I am completed", todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    // delete
    setTodos(todos.filter((e)=>{
           return e!==todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title,desc)=>{
        console.log("adding", title, desc);
        let no;
        if(todos.length==0)
        {
          no=0;
        }
        else{
          no = todos[todos.length-1].no + 1;
        }
        const myTodo = {
          no: no,
          title: title,
          desc:desc
        }
      setTodos([...todos,myTodo]);  
      console.log(myTodo);  
  }
  
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
      <Header title="My Todo List" searchBar={false}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete = {onDelete} />
      <Footer/>
      </Router>
    </>
  );
}

export default App;
