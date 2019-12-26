import {combineReducers} from 'redux'
import reducerColors from './reducerColors'
import products from './data'

const allReducers = combineReducers({
    colorList : reducerColors,
    mainData : products
})

export default allReducers