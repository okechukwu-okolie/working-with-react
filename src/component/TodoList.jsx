import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList() {

    let todos = [
        'go to the gym',
        'pick the kids from school',
        'eat more fruits'
    ]
  return (
    <ul>
        {todos.map((todo, index)=>{
            return(
               <TodoCard key={index}>
                    <span>{todo}</span>
               </TodoCard>
            )
        })}
    </ul>
  )
}
