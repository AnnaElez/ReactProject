import request from './request'


export function getTasks() {
    return (dispatch) => {
        request('http://localhost:3001/task')
            .then(res => {
                dispatch({ type: 'GET_TASKS_SUCCESS', tasks: res })
            })


            .catch((error) => {
                dispatch({ type: 'GET_TASKS_FAILURE', error: error.message })
            })
    }


}