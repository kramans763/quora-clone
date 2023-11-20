import React from 'react';
import './App.css';
import Quora from './components/Home/Quora';
import { useDispatch, useSelector } from 'react-redux';
import { decrement } from './Action';
import { increment } from './Action';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch() ;
  return (
    <div className="App">
      {/* <main className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </section>
    </main> */}
       <Quora/> 
    </div>
  );
}

export default App;
