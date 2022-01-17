import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './rootReducer'


const middleware = [thunk]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))


const makeStore = (context) => store

export const wrapper = createWrapper(makeStore)

export default store
