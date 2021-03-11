import * as actionTypes from './actionTypes'

const defaultState = {
    tasks:[],
    error:null,
    loading:false,
    successMessage:null,
    errorMessage: null,
    addTaskSuccess:false,
}

const reducer = (state = defaultState, action) => {

    switch (action.type) {
        case actionTypes.ERROR: {
            return {
                ...state,
                errorMessage:action.error,
                loading:false,
                successMessage:'Error',
            }
        }

        case actionTypes.GET_TASKS_SUCCESS: {
            return {
                ...state,
                tasks:action.tasks,
                loading:false,
                successMessage:'Tasks came successfully',
            }
        }
        default:return state;

        case actionTypes.LOADING: {
            return {
                ...state,
                loading:true,
                addTaskSuccess:false,
                errorMessage:null,
                successMessage:null,
            }
        }
        
        case actionTypes.ADD_TASK_SUCCESS: {

            const tasks = [...state.tasks,action.task]
            return {
                ...state,
                tasks:tasks,
                loading:false,
                successMessage:'Tasks created successfully',
                addTaskSuccess:true,
            }
        }

        case actionTypes.REMOVE_TASK_SUCCESS: {
            const newTasks = state.tasks.filter(task => task._id !== action.taskId)
            return {
                ...state,
                tasks:newTasks,
                loading:false,
                successMessage:'Tasks deleted successfully',
            }
        }
    }

};

export default reducer;