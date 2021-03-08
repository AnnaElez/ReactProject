
const defaultState = {
    tasks:[],
    error:null
}

const reducer = (state = defaultState, action) => {

    switch (action.type) {
        case 'CHANGE_VALUE': {
            return {
                ...state,
                count: state.count + action.value
            }
        }


        case 'CHANGE_MESSAGE': {
            return {
                ...state,
                text: action.message
            }
        }

        case 'GET_TASKS_SUCCESS': {
            return {
                ...state,
                tasks:action.tasks
            }
        }
        default:return state;
    }

};

export default reducer;