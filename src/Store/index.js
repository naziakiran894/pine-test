import { createStore, combineReducers } from "redux";
import { addToCartReducer } from "./reducers/AddToCartReducer";
import { removeItem } from "./actions/AddToCart";
import {getTotal} from "./actions/AddToCart";
const rootReducer = combineReducers({
  addToCartReducer,removeItem,getTotal, 
});
export const store = createStore(rootReducer);

console.log(store.getState(), "getState");
