import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';


import ListUser from './listUser';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk, reduxPromise));

ReactDOM.render(
    <Provider store={store}>
        <ListUser />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
