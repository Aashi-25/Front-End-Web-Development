import React from 'react'
import useCounter from '../store/use-counter'

function ManageCounter() {

  const incrementCount = useCounter((state) => state.handleIncrementCount);
  // console.log(stateValue);
  return (
    <button style={{marginBottom : '20px' , background : 'black' , color : 'white' , fontSize : '18px' , fontWeight : 'bolder'}}
    onClick={incrementCount}>
      Handle Counter Value
    </button>
  )
}

export default ManageCounter