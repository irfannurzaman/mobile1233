import React from 'react'
import { View, Text} from 'react-native'
import { useDispatch, useSelector} from 'react-redux'


const TodoListScreen = props => {

    const dispatch = useDispatch()
    const todoInput = useSelector(state => state.todo.todoInput)

    return (
       <>
            <TextInput onChangeText={text => dispatch({
                type: 'TODO_INPUT'
            })}
            style={{ width : '90%', borderColor: 'red', borderWidth: 1, padding: 10 }}/>
            <Text>Todo Here</Text>
            <Text>{todoInput}</Text>
       </>
    )

}

export default TodoListScreen