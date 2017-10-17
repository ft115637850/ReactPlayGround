import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import todos from './reducer/todos'
import visibilityFilter from './reducer/visibilityFilter'
import { createStore, combineReducers } from 'redux';  
import { Provider } from 'react-redux';  
import registerServiceWorker from './registerServiceWorker';

const todoApp = combineReducers({todos, visibilityFilter});
//store  
let store = createStore(todoApp);  

ReactDOM.render(
<Provider store={store}>  
    <App />  
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
