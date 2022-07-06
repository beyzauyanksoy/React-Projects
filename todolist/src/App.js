
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React,{userState} from 'react'; 
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [todoList, setTodoList]=useState([])
  const [todo,setTodo]=useState('')
  const addTodo=()=>
  {
   setTodoList(prevTodoList=>[...prevTodoList,{id: uuidv4() ,todo:todo, isEditable:false, isCompleted:false}])
    setTodo('')
  }
  const completeTodo=(id)=>{
    setTodoList(prevTodoList=>prevTodoList.map(todoItem=>todoItem.id===id ? {...todoItem,isCompleted: !todoItem.isCompleted} : todoItem))
  }
  const deleteTodo=(id)=>{
    setTodoList(prevTodoList=>prevTodoList.filter(todoItem=>todoItem.id!==id))
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <h1 className="mt-5">To - Do List</h1>
      
        <div className='d-flex w-50 mt-3'>
        <Form.Control
        className='w-75'
          placeholder="Yapılacak işi girin"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
         
        />
      <Button as="input" type="button" value="EKLE" className='ms-5'onClick={()=>addTodo()} />{''}
        </div>
       
      <div className='mt-5 w-75'>
      {
        todoList.map(
         ( todoItem)=>
         <div key={todoItem.id} className="d-flex justify-content-between w-75">
          <div className='d-flex'>
          <Form.Check 
            type= "checkbox"
            className='me-2'
            value={todoItem.isCompleted}
            onChange={()=>completeTodo(todoItem.id)}
          />
          <label className={`${todoItem.isCompleted ? 'text-decoration-line-through': ''} fw-bold`}>
             {todoItem.todo}
          </label>
            
          </div>
          <div>
            <button className='btn btn-warning mt-1' onClick={()=>deleteTodo(todoItem.id)}>Sil</button>
          </div>
            
         </div>
         
        
        )
      }
      </div>
      <div>
       

      </div>
    </div>
  );
}

export default App;
