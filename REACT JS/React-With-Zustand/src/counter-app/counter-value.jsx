import React from 'react'
import useCounter from '../store/use-counter';
// import useCounter from '../store/use-counter';

function CounterValue() {
  const count = useCounter(state => state.count);
  // console.log(stateValue);
  return (
    <div>Counter Value is {count}</div>
  )
}

export default CounterValue;