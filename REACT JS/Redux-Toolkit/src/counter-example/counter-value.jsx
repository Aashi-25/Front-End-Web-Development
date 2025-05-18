import React from 'react'
import { useSelector } from 'react-redux';

function CounterValue() {
    const state = useSelector(state => state);
    const {countValue} = state;
    console.log(state);

  return (
    <p style={{margin : '8px'}}>Counter Value is {countValue}</p>
  )
}

export default CounterValue;