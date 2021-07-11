import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterSlice from "./ducks/counterSlice";
import testSlice from "./ducks/testSlice";
import userReducer from "./ducks/userSlice";
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from "./sagas/rootSaga";

const SagaMiddleware = createSagaMiddleware();


const reducer = combineReducers({
    counter: counterSlice,
    test:testSlice,
    user:userReducer
});

const store = configureStore({
    reducer,
    middleware:[...getDefaultMiddleware({thunk:false}), SagaMiddleware]
});

SagaMiddleware.run(watcherSaga);

export default store;

