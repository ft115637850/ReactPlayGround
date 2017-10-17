import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';  
import { createStore, combineReducers } from 'redux'; 
import todos from '../reducer/todos'
import visibilityFilter from '../reducer/visibilityFilter' 

it('renders without crashing', () => {
  /*
  const todoApp = combineReducers({todos, visibilityFilter});
  //store  
  let store = createStore(todoApp);  
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}>  
    <App />  
</Provider>, div);*/

});
