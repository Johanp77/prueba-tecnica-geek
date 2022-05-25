import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { firebaseReducers } from "../reducers/firebaseReducers";
import { loginReducers } from "../reducers/loginReducers";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    loginReducers,
    firebaseReducers
});


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
    );