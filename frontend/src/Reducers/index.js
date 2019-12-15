import {combineReducers} from 'redux'
import reducerColors from './reducerColors'
import pagination from './pagination'

const allReducers = combineReducers({
    colorList : reducerColors,
    pagination : pagination
})

export default allReducers