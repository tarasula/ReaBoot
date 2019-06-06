import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import ScrollToTop from './ScrollToTop';
import App from "./App";
import {applyMiddleware, createStore} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import { createBrowserHistory } from 'history';

let middlewares = [
    routerMiddleware(null),
    thunk
];
const store = createStore(reducers, applyMiddleware(...middlewares));

//
// const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
    <Provider store={store}>
    <HashRouter>
        <ScrollToTop>
            <App></App>
        </ScrollToTop>
    </HashRouter>
    </Provider>,
    document.getElementById('root')
);

