import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import cart from './cart'
import filters from './filters'
import pizzas from './pizzas'

const rootReducers = combineReducers({
  cart,
  filters,
  pizzas,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)))
window.store = store

export default store
