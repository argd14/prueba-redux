import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'; 



 // STORE will handle the Global state of the application 

 // Action description of what you want to do 
  const increment = () =>{
    return {
      type: 'INCREMENT'
    }
  }
  const decrement = () =>{
    return {
      type: 'DECREMENT'
    }
  }

 // REDUCER describes actions tranform state into the next state
const counter = (state = 0, action) =>{
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
}

let store = createStore(counter);

// display in the cosole
store.subscribe(()=> console.log(store.getState()));

 // DISPATCH send the action to the reducer 

store.dispatch(increment());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
