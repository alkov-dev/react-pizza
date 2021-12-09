import pizzasReducer from './pizzas'
import filterReducer from './filter'
import cartReducer from './cart'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  pizzasReducer,
  filterReducer,
  cartReducer
})

export default rootReducer