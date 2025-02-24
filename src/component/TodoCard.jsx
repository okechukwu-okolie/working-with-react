import React from 'react'

export default function TodoCard(props) {
    // destructuring props
    const { children, handleDeleteTodo, index, handleEditTodo} = props;
  return (
    <div>
         <li >
            <div>
            {children}

            <button onClick={()=>{handleEditTodo(index)}}>
            <i className="fa-solid fa-pen-to-square"></i> 
            </button>

            <button onClick={()=>{handleDeleteTodo(index)}} style={{color:'red'}}>
            <i className="fa-solid fa-trash"></i>
            </button>
            </div>
        </li>
    </div>
  )
}
