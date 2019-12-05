import {combineReducers} from 'redux'
import reducerColors from './reducerColors'

const allReducers = combineReducers({
    colorList : reducerColors
})

export default allReducers