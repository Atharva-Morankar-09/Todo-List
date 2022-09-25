
import React from 'react'
import {TodoItems} from './Todoitems';

export const Todos = (props) => {
  return (
    <div className='container my-3'>
         <h3 className='my-3'>Todos List</h3>
         {/* <TodoItems todo = {props.todos[0]} />
         <TodoItems todo = {props.todos[1]} />
         <TodoItems todo = {props.todos[2]} /> */}
          {props.todos.length===0?"No Todos to display":
           props.todos.map((todos)=>{
                return <TodoItems todo = {todos} key = {todos.no} onDelete = {props.onDelete}/>
          })
          }
          
    </div>
  )
}
