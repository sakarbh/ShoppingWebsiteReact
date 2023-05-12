import { createStore } from "redux";
import combReducer from "./redux/reducers/main";

const store = createStore(
    combReducer
)
export default store