import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap'; 
import Newcomp from './new comp';
import TOdo from './TOdo';

function App() {
  const[todos,SetTodos]=useState([

]);

  const addTodo=(text)=>{
    const newTodo=[...todos,{text,isdone: false}];
    SetTodos(newTodo);
  
  }
  const deleteTodo=(index)=>{
    const newTodo=[...todos];
    newTodo.splice(index, 1);
    SetTodos(newTodo);
  
  }
  return (
    <div className="App">
      <div className='container'>
        <h1 className="text-center mb-5">To do List</h1>
        <Newcomp addTodo={addTodo} />
        <br />
 <div className="todo">
{
  todos.map((todo,index)=>(
    <Card>
      <Card.Body>
      <TOdo todo={todo} index={index} deleteTodo={deleteTodo}/>
      </Card.Body>
    </Card>
  ) )
}
        </div>

      </div>

    </div>
  );
}

export default App;
