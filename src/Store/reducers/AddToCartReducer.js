import { ADD_TO_CART } from "../Type";
import { REMOVE_ITEM } from "../Type";
import { GET_TOTAL } from "../Type";
// import {action} from "../actions"

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

export const addToCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((e, i) => e.id !== action.payload),
      };

    case GET_TOTAL:
      return {
        ...state,
        totalPrice:action.payload,
      };

    default:
      return state;
  }
};
