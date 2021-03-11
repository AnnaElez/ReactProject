import request from './request'
import * as actionTypes from './actionTypes'


export function getTasks() {
    return (dispatch) => {
        dispatch({ type: actionTypes.LOADING })
        request('http://localhost:3001/task')
            .then(res => {
                dispatch({ type: actionTypes.GET_TASKS_SUCCESS, tasks: res })
            })


            .catch((error) => {
                dispatch({ type: actionTypes.ERROR, error: error.message })
            })
    }


}



export function addTask(data) {
    return (dispatch) => {
        dispatch({ type: actionTypes.LOADING })
        request('http://localhost:3001/task', 'POST', data)
            .then(res => {
                dispatch({ type: actionTypes.ADD_TASK_SUCCESS, task: res })
            })


            .catch((error) => {
                dispatch({ type: actionTypes.ERROR, error: error.message })
            })
    }


}



export function deleteTask(taskId) {
    return (dispatch) => {
        dispatch({ type: actionTypes.LOADING })
        request(`http://localhost:3001/task/${taskId}`, 'DELETE')
            .then(res => {
                dispatch({ type: actionTypes.REMOVE_TASK_SUCCESS, taskId})
            })


            .catch((error) => {
                dispatch({ type: actionTypes.ERROR, error: error.message })
            })
    }


}