import { createStore } from "redux";
import bubbleSortReducer from "./reducers";

const store = createStore(bubbleSortReducer);

export default store;
