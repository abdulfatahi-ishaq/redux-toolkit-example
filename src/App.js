import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment } from './redux/slice/counterSlice';

function App() {
const count = useSelector((state) => state.counter.count);
const dispatch = useDispatch();
  return (
    <div className="App">
    <h1>This is: {count}</h1>
    <button onClick={()=>dispatch(increment())}>Add</button>
    <button onClick={()=>dispatch(decrement())}>Subtract</button>
    </div>
  );
}

export default App;
