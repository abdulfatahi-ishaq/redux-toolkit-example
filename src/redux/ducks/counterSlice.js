import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name:"counter",
    initialState:{
        count:100,
        score:250
    },
    reducers:{
        increment:(state) => ({...state, count:state.count + 10, score:state.score + 1}),
        decrement: (state) => ({...state, count:state.count - 10, score:state.score - 10})
    }
});

export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;