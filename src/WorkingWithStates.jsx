import { useState } from "react"

function WorkingWithStates(){
 const [age, setAge]=useState(0)
 const[input,setInput]= useState('')
 const[show,setShow]= useState(true)



    // this is working with onChange event for input tags
const handleInput =(e)=>{
    setInput(e.target.value)
}
// this is working with onClick events that ork with buttons
    function increase(){
       setAge(age+1)
    }
    const toggle = ()=>{
        setShow(!show)
    }



    return(
        <div>
            
            <h1>{age}</h1> <br /> <button onClick={increase} >Increase Age</button>
            <br /><br />

            <label htmlFor="">input text to display below the input tag</label><br /><br />
            <input type="text" onChange={handleInput} value={input} />
            <h1>{input}</h1>

            <button onClick={toggle}>SHOW/HIDE</button>
            {show && <h1> this is the text to be <br /> made to disappaer</h1>}

        </div>
    )
}
export default WorkingWithStates