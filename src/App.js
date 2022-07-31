import logo from './logo.svg';
import './App.css';
import { store } from './Redux/store';
import {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { handleDecrement, handleIncrement } from './Redux/action';



function App() {
  // const {dispatch} = store;
  // const {counter}= store.getState();
  // const [state, setState ] = useState(0);

  const counter=useSelector(store=>store.counter)
  const dispatch= useDispatch();

  // store.subscribe(() =>{
  //   console.log(store.getState())
  //   setState(prev=>prev+1)
  // })
  

  return (
    <div className="App">
      <h1>Counter : {counter}</h1>
      <div>
        <button onClick={()=>{dispatch(handleIncrement())}}>+</button>
        <button onClick={()=>{dispatch(handleDecrement())}}>-</button>
      </div>
    </div>
  );
}

export default App;
