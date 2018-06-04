import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './Routes/App';
import store from './Store/index';
import registerServiceWorker from './registerServiceWorker';

// window.store = store;

let reactAppReduxStore = 
  <Provider store={store}>
    <App />
  </Provider>

ReactDOM.render(reactAppReduxStore, document.getElementById('root'));
registerServiceWorker();