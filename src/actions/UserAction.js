import { GET_USERS, GET_PROFILE } from '../consts';

export const getUsers = () => {
    return dispatch => {
        fetch('https://reqres.in/api/users?page=2')
            .then(resposta => {
                return resposta.json()
            })
            .then(response => {
                dispatch({
                    type: GET_USERS,
                    payload: response.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const getProfile = () => {
    return dispatch => {
        fetch('https://reqres.in/api/users/2')
            .then(resposta => {
                return resposta.json()
            })
            .then(response => {
                dispatch({
                    type: GET_PROFILE,
                    payload: response.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}