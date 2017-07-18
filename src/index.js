import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider, createStore} from 'react-redux';
import promiseMiddleware from 'redux-promise';
import {reducer} from './reducers/index';

const store = createStore(reducer, promiseMiddleware)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
