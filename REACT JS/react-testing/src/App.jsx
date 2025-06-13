import { useState } from 'react'
import './App.css'
import HelloWorld from "../components/HelloWorld";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h1> React Unit Testing </h1>
    <HelloWorld/>
    </div>
  )
}

export default App
