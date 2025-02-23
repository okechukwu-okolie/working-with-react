// import Map from './Map.jsx' 

// import WorkingWithStates from '/WorkingWithStates.jsx'
import './App.css'
import TodoInput from './component/TodoInput'
import TodoList from './component/TodoList'
import {useState} from 'react'

function App() {

  // const todos = ([
  //   'go to the gym',
  //   'pick the kids from school',
  //   'eat more fruits'
  // ])
  
const [todos, setTodos] = useState([])

function handleAddTodos(newTodos){
  const NewlyAddedTodo = [...todos, newTodos]
  setTodos(NewlyAddedTodo)
}

function handleDeleteTodo(index){
  const newTodoList = todos.filter((todo, todoIndex)=>{
    return todoIndex !== index
  })
  setTodos(newTodoList)
}

function handleEditTodo(index){

}



  return (
    <>
     
     {/* <Map/> */}
     {/* <WorkingWithStates/> */}
     <TodoInput handleAddTodos = {handleAddTodos}/>
     <TodoList handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </>
  )
}

export default App
