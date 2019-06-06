import {combineReducers} from "redux";
import cardReducer from "./cardReducer";
import loginReducer from "./loginReducer";
import testReducer from "./testReducer";
import globalReducer from "./globalReducer";
import {routerReducer} from 'react-router-redux';


export default combineReducers({
    routing: routerReducer,
    cars: cardReducer,
    login: loginReducer,
    test: testReducer,
    global: globalReducer
});