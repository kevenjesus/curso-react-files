import { combineReducers } from 'redux';
import userReducer from './reducers/UserReducer';

const rootReducer = combineReducers({
    user: userReducer
});

export default rootReducer;
