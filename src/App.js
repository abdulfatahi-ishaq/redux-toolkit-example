import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment } from './redux/ducks/counterSlice';
import { getUser } from './redux/ducks/userSlice';

function App() {
const count = useSelector((state) => state.counter.count);
const dispatch = useDispatch();

useEffect(()=>{
  dispatch(getUser())
},[dispatch])

const user = useSelector((state)=>state.user);

  return (
    <div className="App">
     {user && <h1>Hello, {user.firstName}</h1>}
    <h1>This is: {count}</h1>
    <button onClick={()=>dispatch(increment())}>Add</button>
    <button onClick={()=>dispatch(decrement())}>Subtract</button>
    </div>
  );
}

export default App;
