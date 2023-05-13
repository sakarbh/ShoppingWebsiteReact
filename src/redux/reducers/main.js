import { combineReducers } from "redux";
import { cartReducer} from "./reducer";
import prodDetails from './reducer2'

const combReducer = combineReducers({
    cartReducer , prodDetails
})
export default combReducer