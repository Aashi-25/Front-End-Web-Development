import React from 'react'
import CounterButton from './counter-example/counter-button';
import CounterValue from './counter-example/counter-value';

function App() {
  return (
    <div style={{textAlign : 'center' , marginTop : '10px'}}>
      <h1>Redux Toolkit</h1>
      <CounterButton/>
      <CounterValue/>
    </div>
  )
}

export default App;
