import { GET_USERS } from '../consts';

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