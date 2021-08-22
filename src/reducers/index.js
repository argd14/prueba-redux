import counterReducer from './counter';
import loggedReducer from './counter';
import { combineReducers } from 'redux'; 

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
});

export default allReducers;