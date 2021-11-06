import { combineReducers } from "redux";
import cartReducer from "./CartReducer";
import userReducer  from "./UserReducer";

const mainReducer = combineReducers( {
    'user': userReducer,
    'cart': cartReducer,
})

export default mainReducer