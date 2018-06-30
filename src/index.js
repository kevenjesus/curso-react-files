import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';


import ListUser from './listUser';
import Profile from './Profile';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk, reduxPromise));

ReactDOM.render(
    <Provider store={store}>
        <Profile />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
