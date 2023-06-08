import graphReducer from "./graphReducer";
import { combineReducers } from "redux";


const rootReducer=combineReducers({
    data:graphReducer
})

export default rootReducer;