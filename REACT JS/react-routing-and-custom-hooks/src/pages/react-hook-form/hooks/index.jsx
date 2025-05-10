import React, { useEffect, useReducer, useRef } from 'react'

function Hooks() {

    const countValue = useRef(0);
    const divElementRef = useRef();
    const inputRefElement = useRef();

    function handleClick(){
        countValue.current++;
        console.log(countValue.current);
    }

    useEffect(() => {
        const getDivReference = divElementRef.current;
        console.log(getDivReference);
        inputRefElement.current.focus();

        getDivReference.style.color = "yellow";

        setTimeout(() => {
            getDivReference.style.color = 'green';
        },2000);
    },[]);

  return (
    <div style={{textAlign : 'center'}}>
        <h1>UseRef , UseCallback and UseMemo Hook</h1>
        <button onClick = {handleClick}>Click me</button>
        <div ref = {divElementRef}>
            Some random text
        </div>
        <input name='name' placeholder='Enter your name' ref={inputRefElement}/>
    </div>
  )
}

export default Hooks