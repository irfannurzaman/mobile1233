const INITIAL_STATE = {
    todoInput : '',
    todoDateCreated : '',
    todoDateCompleted : '',
    todoDate : []
}

export default (state = INITIAL_STATE, action) => {
    switch ( action, state) {
        case 'TODO_INPUT':
            return {...state, todoInput : action.payload}
        default :
            return state
    }
}