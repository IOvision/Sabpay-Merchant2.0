import { createStore, combineReducers } from 'redux'
import inventoryReducer from './reducers/inventoryReducer'
import merchantReducer from './reducers/merchantReducer'

const rootReducer = combineReducers({
    inventoryReducer,
    merchantReducer
})

const configureStore = () => createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export type RootState = ReturnType<typeof rootReducer>

export default configureStore