import {combineReducers, createStore,applyMiddleware} from "redux";
import  thunkMiddleWare from "redux-thunk";
import {TranslateReducer} from './Reducer/TranslateReducer'

let reducers = combineReducers({
    Translate: TranslateReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));


export default store;
