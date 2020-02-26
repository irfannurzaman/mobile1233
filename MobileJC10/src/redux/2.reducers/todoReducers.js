const INITIAL_STATE = {
    todoInput : '',
    todoData : []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TODO_INPUT' :
            return {...state, todoInput : action.payload}
        case 'GET_TODO' :
            return {... state, todoData : action.payload}
        case 'ADD_TODO' :
            return {...state, todoData : [...todoData, {key : Data.now().toString(), value: todoInput}]}
        case 'RESET_TODO' :
            return INITAL_STATE
        default :
        return state
    }
}