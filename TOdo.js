import React from 'react'
import { Button } from 'react-bootstrap'
import './card.css';
import './App.css';

function TOdo({todo,index,deleteTodo}) {
  return (
    <div className='card_1'>
 <span>{todo.text}</span>

 <div className='kard'>
 <Button onClick={()=>deleteTodo(index)} variant="danger">Delete</Button>
 </div>
 
 </div>
 
   
  )
}

export default TOdo