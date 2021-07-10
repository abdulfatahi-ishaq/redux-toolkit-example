import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";
import testSlice from "./slice/testSlice";

const reducer = combineReducers({
    counter: counterSlice,
    test:testSlice
});

const store = configureStore({
    reducer,
    middleware:[...getDefaultMiddleware({thunk:false})]
});

export default store;

