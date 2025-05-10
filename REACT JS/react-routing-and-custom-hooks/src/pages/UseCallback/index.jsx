import React, { useCallback, useState } from 'react'
import Counter from './counter';

function UseCallback(){
  const [countOne , setCountOne] = useState(0);
  const [countTwo , setCountTwo] = useState(0);

  const memoriseSetCountOneFunct = useCallback(() => setCountOne(countOne + 1) , [countOne]);
  const memoriseSetCountTwoFunct = useCallback(() => setCountTwo(countTwo + 1) , [countTwo]);

  return (
    <div style={{textAlign : 'center'}}>
      <h1>Use CallBack</h1>
      <Counter countValue = {countOne} 
      onClick = {memoriseSetCountOneFunct}/>
      <Counter countValue = {countTwo} 
      onClick = {memoriseSetCountTwoFunct}/>
    </div>
  )
}

export default UseCallback;