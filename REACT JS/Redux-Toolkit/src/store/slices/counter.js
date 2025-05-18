import {createslice} from "@reduxjs/toolkit";

const initialState = {
    countValue : 0
}

export const counterSlice = createslice({
    name : 'counter' ,
    initialState,
    reducers : {
        handleIncreaseCountAction : () => {

        }
    }
})

export const {handleIncreaseCountAction} = counterSlice.actions;

export default counterSlice.reducer;