import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  // let counter = 69
  const[counter,setCounter] =  useState(69) //first variable you see is a variable and second is a function 

  const addValue = ()=>{
  //  setCounter(counter+1)
  setCounter((prevCounter)=>prevCounter+1)
  setCounter((prevCounter)=>prevCounter+1)
  setCounter((prevCounter)=>prevCounter+1)
  }
  const removeValue = () =>{
    setCounter(counter-1)
  }

  return (
    <>
    <h1>React Course with hitesh {counter}</h1>
    <h1>Counter Value:{counter}</h1>
    <button onClick={addValue}>Add Value </button> {" "}
    <button onClick={removeValue}>Remove Value</button>
    <p>footer : {counter}</p>


    </>
  )
}

export default App
