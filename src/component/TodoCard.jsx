import React from 'react'

export default function TodoCard(props) {
    // destructuring props
    const { children } = props;
  return (
    <div>
         <li >
            
            <div>
            {children}
            <i className="fa-solid fa-pen-to-square"></i> 
                <i className="fa-solid fa-trash"></i>
            </div>
        </li>
    </div>
  )
}
