import { GET_USERS } from '../consts';
const INITIAL_STATE = {
    users: [],
    userTarget: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_USERS:
            return {...state, users: action.payload}
        default:
            return state;
    }
};

export default userReducer;