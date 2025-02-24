import './App.css'
import TodoInput from './component/TodoInput'
import TodoList from './component/TodoList'
import {useEffect, useState} from 'react'

function App() {

const [todos, setTodos] = useState([])
 const [todoValue, setTodoValue] =useState('')


function persistData(newList){
  localStorage.setItem('todos',JSON.stringify({todos:newList}))
}


function handleAddTodos(newTodos){
  const NewlyAddedTodo = [...todos, newTodos]
  persistData(NewlyAddedTodo)
  setTodos(NewlyAddedTodo)
  setTodoValue('')
}

function handleDeleteTodo(index){
  const newTodoList = todos.filter((todo, todoIndex)=>{
    return todoIndex !== index

  })
  setTodos(newTodoList)
  persistData(newTodoList)
}

function handleEditTodo(index){
  const valueToBeEdited = todos[index]
  setTodoValue(valueToBeEdited)
  handleDeleteTodo(index)

}


useEffect(()=>{
  if(!localStorage){
    return
  }

  let localTodos = localStorage.getItem('todos')
  
  if(!localTodos){
    return
  }

  localTodos = JSON.parse(localTodos).todos
  setTodos(localTodos)
},[])


  return (
    <>
     <TodoInput addedTodos = {handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue} />
     <TodoList todos = {todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />
     
    </>
  )
}


export default App
