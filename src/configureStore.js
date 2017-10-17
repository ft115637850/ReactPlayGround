import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';
import { createStore, combineReducers } from 'redux';  
import todos from './reducer/todos';
import visibilityFilter from './reducer/visibilityFilter';

const persistData = loadState();

const todoApp = combineReducers({todos, visibilityFilter});
//store  
let configureStore = createStore(todoApp, persistData);  
configureStore.subscribe(throttle(() => {
    saveState({
        todos:configureStore.getState().todos
    });
}, 1000));

export default configureStore;