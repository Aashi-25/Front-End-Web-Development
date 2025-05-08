import React, { useState , useLayoutEffect } from 'react'

function UseWindowResize() {
    const [windowSize , setWindowSize] = useState({
        width : 0,
        height : 0
    })

    function handleResize(){
        setWindowSize({
            width : window.innerWidth,
            height : window.innerHeight
        })
    }

    useLayoutEffect(() => {
        handleResize();
        window.addEventListener('resize' , handleResize)

        return () => {
            window.removeEventListener('resize' , handleResize)
        }
    },[])

    return windowSize;
}

export default UseWindowResize;

//useWindowResize is a type of custom hook that tracks and returns the  the current window dimensions (width and height) whenever the browser window is resized.

//more examples of customHooks :-
// useLocalstorage
// useCounter
// useSessionStorage
// useOutsideClick