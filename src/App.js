import React from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { counterAction } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <h1>Counter {counter} !</h1>
      <button onClick={() => dispatch(counterAction('INCREMENT'))}>+</button>
      <button onClick={() => dispatch(counterAction('DECREMENT'))}>-</button>
      {isLogged ? <h3>Valuable Information I shouldnt see  </h3> : ''}
    </div>
  );
}

export default App;