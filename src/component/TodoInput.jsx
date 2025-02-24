import React,{useState} from 'react'

export default function TodoInput(props) {
  const {addedTodos, setTodoValue ,todoValue} = props
 



  return (
    <header>
        <input placeholder='Enter todo...' value={todoValue} onChange={(e)=>{setTodoValue(e.target.value)}}/>
        <button onClick={()=>{addedTodos(todoValue)}}>ADD </button>
    </header>
  )
}
//value={todoValue} onChange ={(e)=>{setTodoValue(e.target.value)}}
//onClick={handleAddTodos(todoValue)}