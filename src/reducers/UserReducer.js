import { GET_USERS, GET_PROFILE } from '../consts';
const INITIAL_STATE = {
    list: [],
    profile: null
};


const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_USERS:
            return {...state, list: action.payload}
        case GET_PROFILE:
            return {...state, profile: action.payload}
        default:
            return state;
    }
};

export default userReducer;