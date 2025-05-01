import { useReducer } from "react";


const initialState = {
    ShowTextFlag : false,
    changeTextStyleFlag : false
}

const HIDE_TEXT = 'HIDE_TEXT';
const SHOW_TEXT = 'SHOW_TEXT';
const CHANGE_TEXT_STYLE = 'CHANGE_TEXT_STYLE';

function reducer(state , action){
    switch (action.type) {
        case HIDE_TEXT:
            console.log(state , action)
            return {...state,
                ShowTextFlag : false
            }
        case SHOW_TEXT:
            return {...state,
                ShowTextFlag : true
            }
        case CHANGE_TEXT_STYLE:
            return {...state,
                changeTextStyleFlag : !state.changeTextStyleFlag
            }
        default:
            return state;
    }
}
export default function UseReducerExample() {
    const [state , dispatch] = useReducer(reducer,initialState)
    console.log(state);
    return(
        <div>
            { state?.ShowTextFlag ?<h3 style = {{backgroundColor : state?.changeTextStyleFlag ? 'black' : 'red'}}>Use Reducer Hook Example</h3> : null }

            <button style = {{marginRight: "10px"}} onClick ={() => dispatch({type : HIDE_TEXT})}> Hide Text </button>
            <button style = {{marginRight: "10px"}} onClick = {() => dispatch({type : SHOW_TEXT})}>Show Text</button>
            <button onClick={() => dispatch({type : CHANGE_TEXT_STYLE})}>Toggle Text Styles</button>
        </div>
    )
}