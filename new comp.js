import React,{useState}from 'react'
import { Form,Button } from 'react-bootstrap';

function Newcomp({addTodo}) {
  const[value,Setvalue]=useState('');

  const handleSubmit=(e)=>{e.preventDefault();

    if(!value) return;
  addTodo(value);
  Setvalue('')
  
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label><h2>Add to do </h2> </Form.Label>
        <Form.Control 
         type="text"
         className="input text-bg-gray"
        value={value}
        onChange ={e=>Setvalue(e.target.value)}
        placeholder="Enter Todo"

        ></Form.Control>
      </Form.Group><br></br>
      <Button type="submit">Submit</Button>

    </Form>
  )
}

export default Newcomp;