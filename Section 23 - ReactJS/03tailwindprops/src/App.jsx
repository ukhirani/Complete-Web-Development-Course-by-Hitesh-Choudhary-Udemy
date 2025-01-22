import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  
  const myobject = {name:"Umang",surname: "Hirani"}
  return (
    <>
      {/* <div className="text-3xl bg-green-500 p-3 rounded-md">Hello</div> */}
      <Card username="umang"></Card>
      <Card post="here goes the post"></Card>
      <Card src = "https://images.unsplash.com/photo-1676552676584-3ee0aef1bd39?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Card>
      <Card object_passed = {myobject}></Card>

    </>
  )
}

export default App
