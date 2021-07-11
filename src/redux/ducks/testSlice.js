import { createSlice } from '@reduxjs/toolkit';

const testSlice = createSlice({
    name:"counter",
    initialState:10,
    reducers:{
        increment:(state) => state + 2,
        decrement: (state) => state - 5
    }
});

export const {increment, decrement} = testSlice.actions;

export default testSlice.reducer;