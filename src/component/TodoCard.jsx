import React from 'react'

export default function TodoCard(props) {
    // destructuring props
    const { children, handleDeleteTodos, index } = props;
  return (
    <div>
         <li >
            <div>
            {children}
            <button>
            <i className="fa-solid fa-pen-to-square"></i> 
            </button>
            
            <button onClick={()=>{handleDeleteTodos(index)}}>
            <i className="fa-solid fa-trash"></i>
            </button>
            </div>
        </li>
    </div>
  )
}
