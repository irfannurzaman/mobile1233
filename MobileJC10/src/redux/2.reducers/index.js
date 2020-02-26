import todoReducers from './todoReducers'
import { combinreducers } from  'redux'

export default combinreducers({
    todo : todoReducers
})