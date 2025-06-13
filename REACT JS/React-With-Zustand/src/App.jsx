import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ManageCounter from './counter-app/manage-counter'
import CounterValue from './counter-app/counter-value'
import Products from './products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>React With Zustand</h1>
      <ManageCounter/>
      <CounterValue/>
      <Products/>
    </div>
  )
}

export default App
