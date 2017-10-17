import React from 'react';
import ReactDOM from 'react-dom';
import Root from './container/Root'
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Root store={configureStore} />, document.getElementById('root'));
registerServiceWorker();
