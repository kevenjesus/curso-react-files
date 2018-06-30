import { GET_USERS } from '../consts';
const INITIAL_STATE = {
    list: []
};


const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_USERS:
            return {...state, list: action.payload}
        default:
            return state;
    }
};

export default userReducer;