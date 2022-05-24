import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducers } from "../reducers/loginReducers";



const reducers = combineReducers({
    loginReducers
});


export const store = createStore(
    reducers,
    applyMiddleware(thunk)
    );