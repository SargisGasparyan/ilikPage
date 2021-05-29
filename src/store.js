import {createStore,applyMiddleware,compose,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {sortReducers} from './reducers/sortReducers'
import {changeCart} from './reducers/cartReducers'
const initialState={}

const composeEnhancer=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    combineReducers({
        products:sortReducers,
        cart:changeCart
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)

export default store